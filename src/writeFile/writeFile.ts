import * as fs from 'fs'
import safeJsonStringify from 'safe-json-stringify'

export default async (filePath: string, file: { content: object, hint: string }, successText?: string, errorText?: string) => {
  successText = successText ?? '[JSON Write File] Success'
  errorText = errorText ?? '[JSON Write File] Error'
  const str = safeJsonStringify(file.content)
  const fileContent = file.hint ? `${file.hint} ${str}` : str

  await fs.writeFile(filePath, fileContent, error => {
    if (error) {
      return console.log(errorText)
    }

    console.log(successText)
  })
}