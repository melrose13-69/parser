export default (parsedSchemaFromYaml: string, schemasKey: string, pathsKey: string) => {
  const parsedJson = JSON.parse(parsedSchemaFromYaml)
  const schemas = parsedJson[schemasKey]
  const paths = parsedJson[pathsKey]

  return ((schemas, paths) => {
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

    return Promise.resolve(parsedSchemaFromYaml)
  })(schemas, paths)
}