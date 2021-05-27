import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Field, arrayInsert, arrayRemove } from "redux-form"
import Grid from "../common/layout/grid"
import Input from "../common/form/input"
import If from "../common/layout/if"

class CreditList extends Component {
    add(index, item = {}) {
        if (!this.props.readOnly)
            this.props.arrayInsert(
                "billingCycleForm",
                this.props.type,
                index,
                item
            )
    }

    remove(index) {
        if (!(this.props.readOnly || this.props.list.length === 1))
            this.props.arrayRemove(
                "billingCycleForm",
                this.props.type,
                index
            )
    }

    renderRows() {
        const { list = [], type } = this.props

        return list.map((item, i) => (
            <tr key={i}>
                <td>
                    <Field
                        name={`${type}[${i}].name`}
                        component={Input}
                        placeholder="..."
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field
                        name={`${type}[${i}].value`}
                        component={Input}
                        placeholder="R$:"
                        readOnly={this.props.readOnly} />
                </td>
                <If test={type === "debts"}>
                    <td>
                        <Field
                            name={`${type}[${i}].status`}
                            component={Input}
                            placeholder="..."
                            readOnly={this.props.readOnly} />
                    </td>
                </If>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm form-btn"
                        onClick={() => this.add(i + 1)}>
                        <i className="fa fa-plus" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning btn-sm form-btn"
                        onClick={() => this.add(i + 1, item)}>
                        <i className="fa fa-clone" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => this.remove(i)}>
                        <i className="fa fa-close" />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.label}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.type === "debts"}>
                                    <th>Estado</th>
                                </If>
                                <th className="table-actions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators({
        arrayInsert,
        arrayRemove
    }, dispatch)

export default connect(null, mapDispatchToProps)(CreditList)