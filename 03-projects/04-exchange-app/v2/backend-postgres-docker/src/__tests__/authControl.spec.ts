import server from './__mocks__/server'

describe('Auth Controller', () => {
    const testUser = {
        email: process.env.TEST_USER_EMAIL,
        password: process.env.TEST_USER_PASSWORD,
    }

    it('Should fail on create a new user with same email', async () => {
        const res = await server.post('/auth/create').send(testUser)
        expect(res.body).toMatchObject({ success: false, msg: 'user already exists' })
    })

    it('Should fail on use a invalid credencials', async () => {
        const res = await server.post('/auth').send({ email: '', password: '' })
        expect(res.body).toMatchObject({ success: false, msg: 'invalid credentials' })
    })

    it('Should fail on use a invalid email', async () => {
        const res = await server.post('/auth').send({ ...testUser, email: 'test@1234' })
        expect(res.body).toMatchObject({ success: false, msg: 'user not founded' })
    })

    it('Should fail on use a invalid password', async () => {
        const res = await server.post('/auth/create').send({ ...testUser, password: '123' })
        expect(res.body).toMatchObject({ success: false, msg: 'user already exists' })
    })

    it('Should return a access token on login', async () => {
        const res = await server.post('/auth').send(testUser)
        const { accessToken, email, history } = res.body.data

        expect(typeof accessToken).toBe('string')
        expect(email).toBe(testUser.email)
        expect(history).toBeInstanceOf(Array)
    })
})
