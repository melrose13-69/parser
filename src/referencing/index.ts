import writeFile from '../writeFile/writeFile'

export default (parsedSchemaFromYaml: string, schemasKey: string, pathsKey: string, writingFile?: { path: string }): object | void => {
  const parsedJson = JSON.parse(parsedSchemaFromYaml)
  const generator = (keys: string, obj: object = parsedJson, index = 0): object => {
    const splittedKeys = keys.split('.')

    if (index < splittedKeys.length - 1) {
      return generator(keys, obj[splittedKeys[index]], index + 1)
    }

    return obj[splittedKeys[index]]
  }
  const schemas = generator(schemasKey)
  const paths = generator(pathsKey)

  ;((schemas, paths) => {
    (function req (object) {
      for (const key in object) {
        if (Array.isArray(object[key]) || typeof object[key] === 'object') {
          req(object[key])
        }

        if (key === '$ref') {
          const refKey = object[key].split('/').pop()
          const schema = schemas[refKey]

          Object.keys(schema).forEach(k => (object[k] = schema[k]))
          delete object[key]
        }
      }

      return req
    })(schemas)(paths)
  })(schemas, paths)

  if (writingFile && writingFile.path) {
    return writeFile(writingFile.path, parsedJson)
  }

  return parsedJson
}