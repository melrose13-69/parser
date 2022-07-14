import * as path from 'path'
import writeFile from '../writeFile/writeFile'

const pathForSchemas = (filename: string) => path.resolve('.', `develop/schemas/${filename}.js`)

export default async (paths: object) => {
  for (const path in paths) {

    if (Object.prototype.hasOwnProperty.call(paths[path], 'post')) {
      const object = paths[path].post?.requestBody?.content?.['application/json']?.schema
      const fileName = paths[path].post.tags[0].toLowerCase()

      if (object) {
        writeFile(pathForSchemas(fileName), { content: object, hint: 'export const schema = ' })
      }
    }
  }
}