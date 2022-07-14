import * as path from 'path'
import referencing from './referencing'
import swaggerParser from './swaggerParser'
import schemaGenerator from './schemaGenerator'

const swagger = path.resolve('.', 'develop/api.swagger.yaml')
const apiBundle = path.resolve('.', 'develop/api.bundle.json')
const apiReferencing = path.resolve('.', 'develop/api.referencing.json')

// swaggerParser(swagger, apiBundle)

// import jsons from '../develop/api.bundle.json'
import jsons from '../develop/api.referencing.json'
//
// const json = JSON.stringify(jsons)
//
// referencing(json, 'components.schemas', 'paths', { path: apiReferencing })
schemaGenerator(jsons.paths)
export { swaggerParser }