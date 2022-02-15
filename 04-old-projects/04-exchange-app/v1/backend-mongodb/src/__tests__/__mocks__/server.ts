import supertest from 'supertest'

import { app } from '../../index'

export default supertest.agent(app)
