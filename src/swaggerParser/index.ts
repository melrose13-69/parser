import { load } from 'js-yaml'
import { readFileSync, writeFile } from 'fs'

export default async (swaggerPath: string, outputPath: string) => {
  try {
    const swaggerFile = readFileSync(swaggerPath, 'utf8')
    const doc = await load(swaggerFile)

    await writeFile(outputPath, JSON.stringify(doc), 'utf8', error => {
      if (!error) {
        console.log('[js-yaml] Parse was resolved')
        return
      }

      throw error
    })
  } catch (e) {
    console.error(`[js-yaml] Parse was rejected: ${e}`)
  }
}
