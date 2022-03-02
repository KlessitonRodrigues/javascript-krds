import TestResponse from '../../../util/testResponse'
import sortListPost from './post'

describe('sortist route', () => {
  it('Should return a sorted response', () => {
    const req = { body: { classN: [1, 10, 2], classS: ['b', 'E', 'a'] } }
    const res = new TestResponse()

    /* @ts-ignore */
    sortListPost(req, res)

    expect(res.resData).toEqual({
      status: 200,
      body: {
        success: true,
        data: {
          classN: [1, 2, 10],
          classS: ['a', 'b', 'e']
        }
      }
    })
  })

  it('Should return a error response', () => {
    const req = { body: { classN: '1', classS: 'a' } }
    const res = new TestResponse()

    /* @ts-ignore */
    sortListPost(req, res)

    expect(res.resData).toEqual({
      status: 200,
      body: {
        success: false,
        msg: 'needs two or more values to compare'
      }
    })
  })
})
