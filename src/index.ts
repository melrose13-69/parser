import * as path from 'path'
import swaggerParser from './swaggerParser'

const x = path.resolve('.', 'develop/api.swagger.yaml')
const y = path.resolve('.', 'develop/api.bundle.json')

swaggerParser(x, y)

export { swaggerParser }