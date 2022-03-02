import TestResponse from '../../../util/testResponse'
import interlacePost from './post'

describe('interlace route', () => {
  it('Should return as interlaced true', () => {
    const req = { body: { intervalA: [10, 15], intervalB: [14, 20] } }
    const res = new TestResponse()

    /* @ts-ignore */
    interlacePost(req, res)

    expect(res.resData).toEqual({
      status: 200,
      body: {
        success: true,
        data: {
          isInterlaced: true
        }
      }
    })
  })

  it('Should return as interlaced false', () => {
    const req = { body: { intervalA: [10, 15], intervalB: [16, 20] } }
    const res = new TestResponse()

    /* @ts-ignore */
    interlacePost(req, res)

    expect(res.resData).toEqual({
      status: 200,
      body: {
        success: true,
        data: {
          isInterlaced: false
        }
      }
    })
  })

  it('Should return a error response', () => {
    const req = { body: { intervalA: [10, 15], intervalB: [14, 20, 30] } }
    const res = new TestResponse()

    /* @ts-ignore */
    interlacePost(req, res)

    expect(res.resData).toEqual({
      status: 200,
      body: {
        success: false,
        msg: 'must be between two arrays'
      }
    })
  })
})
