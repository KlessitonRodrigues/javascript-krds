/* eslint-disable */

declare namespace UserTypes {
    type UserHistory = {
        from: string
        to: string
        amount: string
        result: string
        rate: string
        createdAt: date
    }

    type User = {
        email: string
        password: string
        history: UserHistory[]
    }
}
