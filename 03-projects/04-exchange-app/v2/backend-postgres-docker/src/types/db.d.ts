declare namespace DBTypes {
    type Client = {
        client_id?: number
        client_email: string
        client_password: string
    }

    type History = {
        history_id?: number
        history_from: string
        history_to: string
        history_amount: string
        history_result: string
        history_rate: string
        history_createdat: string
        client_id?: string
    }
}
