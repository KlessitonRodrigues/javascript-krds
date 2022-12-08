export default class Response {
  resData = {
    status: 0,
    body: null
  }

  status(code) {
    this.resData.status = code
    return this
  }

  send(data) {
    this.resData.body = data
  }
}
