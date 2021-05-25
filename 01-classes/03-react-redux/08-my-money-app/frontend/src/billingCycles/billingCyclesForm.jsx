import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { init } from "./billingCycleAction"
import LabelAndInput from "../common/form/labelAndInput"

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={LabelAndInput}
                        cols="12 4"
                        label="Nome"
                        placeholder="ex: aluguel da casa"
                        readOnly={readOnly} />
                    <Field
                        name="month"
                        component={LabelAndInput}
                        cols="12 4"
                        label="Mês"
                        placeholder="ex: 01, 02, ..."
                        readOnly={readOnly} />
                    <Field
                        name="year"
                        component={LabelAndInput}
                        cols="12 4"
                        label="Ano"
                        placeholder="ex: 2021"
                        readOnly={readOnly} />
                </div>
                <div className="box-footer">
                    <button
                        type="submit"
                        className={`btn btn-${this.props.btnColor} form-button`}>
                        {this.props.btnLabel}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default form-button"
                        onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

const billingCycleReduxForm = reduxForm({
    form: "billingCycleForm", destroyOnUnmount: false
})(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(billingCycleReduxForm)



