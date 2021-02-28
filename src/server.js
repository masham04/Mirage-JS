import {createServer} from 'miragejs'
import product from './json/product.json'
const makeserver = () => {
    let server = createServer({
        routes(){
            this.namespace = 'api'
            this.get('/products', (_req,_res) => {
                return product;
            })
            this.post('/add', (schema, request) => {
                const attrs = JSON.parse(request.requestBody)
                  product.push(attrs)
              })
        }
    })
}
export default makeserver