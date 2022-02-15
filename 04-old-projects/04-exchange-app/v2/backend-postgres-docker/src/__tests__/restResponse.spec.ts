import { response } from 'express'
import restResponse from '../util/restResponse'

describe('Rest Response', () => {
    it('Should return ', () => {
        const res = response
        const sendData = { success: true, data: { name: 'test' }, msg: 'test' }

        res.json = (data) => data
        const resData = restResponse(res, sendData)

        expect(resData).toBe(sendData)
    })
})
