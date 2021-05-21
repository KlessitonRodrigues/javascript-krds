import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getSummary } from "./dashboardAction.js"
import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import Row from "../common/layout/row"
import ValueBox from "../common/widget/valueBox"

class Dashboard extends Component {

    componentDidMount() {
        this.props.getSummary()
    }

    render() {
        const { credit, debit } = this.props.summary

        return (
            <div>
                <ContentHeader title="Dashboard" small="v1.0" />
                <Content>
                    <Row>
                        <ValueBox
                            cols="12 4"
                            color="green"
                            icon="bank"
                            value={`R$ ${credit}`}
                            text="Total de créditos" />
                        <ValueBox
                            cols="12 4"
                            color="red"
                            icon="credit-card"
                            value={`R$ ${debit}`}
                            text="Total de Débitos" />
                        <ValueBox
                            cols="12 4"
                            color="blue"
                            icon="money"
                            value={`R$ ${credit - debit}`}
                            text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary
})

const mapDispatchToProps = dispach =>
    bindActionCreators({
        getSummary
    }, dispach)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Dashboard)