import { load } from 'js-yaml'
import { readFileSync } from 'fs'
import writeFile from '../writeFile/writeFile'

export default async (swaggerPath: string, outputPath: string) => {
  try {
    const swaggerFile = readFileSync(swaggerPath, 'utf8')
    const doc = await load(swaggerFile)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return writeFile(outputPath, doc, '[js-yaml] Parse was resolved')
  } catch (e) {
    console.error(`[js-yaml] Parse was rejected: ${e}`)
  }
}
