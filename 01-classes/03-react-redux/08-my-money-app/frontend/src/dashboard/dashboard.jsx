import React, { Component } from "react"
import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import Row from "../common/layout/row"
import ValueBox from "../common/widget/valueBox"

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="v1.0" />
                <Content>
                    <Row>
                        <ValueBox
                            cols="12 4"
                            color="green"
                            icon="bank"
                            value="R$ 10"
                            text="Total de créditos" />
                        <ValueBox
                            cols="12 4"
                            color="red"
                            icon="credit-card"
                            value="R$ 10"
                            text="Total de Débitos" />
                        <ValueBox
                            cols="12 4"
                            color="blue"
                            icon="money"
                            value="R$ 10"
                            text="Valor Consolidado" />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard