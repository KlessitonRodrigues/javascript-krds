import axios from "axios"
import { toastr } from "react-redux-toastr"

const URL = "http://localhost:3003/api"

export function getList() {
    const request = axios.get(`${URL}/billingCycles`)
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}

export function create(data) {
    axios.post(`${URL}/billingCycles`, data)
    .then(res =>
        toastr.success("Sucesso", "Operação realizada com sucesso"))
    .catch(e =>
        e.response.data.errors
            .forEach(err =>
                toastr.erro("Erro", err))
    )

    return {
        type: ""
    }
}