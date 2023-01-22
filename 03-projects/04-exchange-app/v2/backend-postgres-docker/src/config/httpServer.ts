import http from 'http'

export default (app: Express.Application) => {
    return http.createServer(app)
}
