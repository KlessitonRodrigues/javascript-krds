import axios from "axios"
import { toastr } from "react-redux-toastr"
import { selectTab, hideTabs } from "../common/tab/tabAction"
import { reset as formReset, initialize } from "redux-form"

const formInitialState = {}
const URL = "http://localhost:3003/api"

export function getList() {
    const request = axios.get(`${URL}/billingCycles`)
    return {
        type: "BILLING_CYCLES_FETCHED",
        payload: request
    }
}

export function create(data) {
    return submit(data, "post")
    /* e.response.data.errors.forEach(err => toastr.erro("Erro", err)*/
}

export function update(data) {
    return submit(data, "put")
}

export function remove(data) {
    return submit(data, "delete")
}

function submit(data, method) {
    return dispatch => {
        const id = data._id ? data._id : ""

        axios[method](`${URL}/billingCycles/${id}`, data)
            .then(res => {
                toastr.success("Sucesso",
                    "Operação realizada com sucesso")
                dispatch(init())
            })
            .catch(e => toastr.error("Erro",
                "Os dados do formulário estão inválida"))
    }
}

export function showUpdate(bc) {
    return [
        selectTab("tabUpdate"),
        hideTabs({ tabCreate: true, tabList: true, tabUpdate: false }),
        initialize("billingCycleForm", bc)
    ]
}

export function showDelete(bc) {
    return [
        selectTab("tabDelete"),
        hideTabs({
            tabCreate: true,
            tabList: true,
            tabUpdate: true,
            tabDelete: false
        }),
        initialize("billingCycleForm", bc)
    ]
}

export function init() {
    return [
        hideTabs({
            tabUpdate: true,
            tabList: false,
            tabCreate: false,
            tabDelete
        }),
        selectTab("tabList"),
        getList(),
        initialize("billingCycleForm", formInitialState),
    ]
}