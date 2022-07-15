import * as fs from 'fs'
import * as path from 'path'
import writeFile from '../writeFile/writeFile'

const pathForSchemas = (filename: string) => path.resolve('.', `develop/schemas/${filename}.json`)

export default async (paths: object, callback?: () => void) => {
  for (const path in paths) {
    if (Object.prototype.hasOwnProperty.call(paths[path], 'post')) {
      const object1 = paths[path].post?.requestBody?.content?.['application/json']?.schema
      const object2 = paths[path].post?.requestBody?.content?.['*/*']?.schema
      const fileName = path.toLowerCase().split('/').join('_')
      const outFileName = fileName[0] === '_' ? fileName.replace('_', '') : fileName

      if (object1 || object2) {
        const path = pathForSchemas(outFileName)

        if (fs.existsSync(path)) {
          await fs.unlinkSync(path)
        }

        await writeFile(path, { content: object1 || object2 })
      }
    }
  }

  if (callback) callback()
}