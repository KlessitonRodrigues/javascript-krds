import React, { Component } from "react"
import { reduxForm, Field, formValueSelector } from "redux-form"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { init } from "./billingCycleAction"
import LabelAndInput from "../common/form/labelAndInput"
import Summary from "./summary"
import ItemList from "./itemList"

class BillingCycleForm extends Component {

    calculateSummary() {
        const { credits = [0], debts = [0] } = this.props
        const sum = (t, value) => t + value

        return {
            sumOfCredits: credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebits: debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebits } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field
                        name="name"
                        component={LabelAndInput}
                        cols="12 4"
                        label="Nome"
                        placeholder="..."
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
                    <Summary
                        credit={sumOfCredits}
                        debt={sumOfDebits} />
                    <ItemList
                        cols="12 12 6"
                        list={credits}
                        type={"credits"}
                        label={"Créditos"}
                        readOnly={readOnly} />
                    <ItemList
                        cols="12 12 6"
                        list={debts}
                        type={"debts"}
                        label={"Débitos"}
                        readOnly={readOnly} />
                </div>

                <div className="box-footer">
                    <button
                        type="submit"
                        className={`btn btn-${this.props.btnColor} form-btn`}>
                        {this.props.btnLabel}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
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

const selector = formValueSelector("billingCycleForm")

const mapStateToProps = state => ({
    credits: selector(state, "credits"),
    debts: selector(state, "debts")
})

const mapDispatchToProps = dispatch => bindActionCreators(
    { init }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(billingCycleReduxForm)



