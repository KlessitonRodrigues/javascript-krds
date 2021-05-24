import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { create } from "./billingCycleAction"
import { selectTab, hideTabs } from "../common/tab/tabAction"
import ContentHeader from "../common/template/contentHeader"
import Content from "../common/template/content"
import Tabs from "../common/tab/tabs"
import TabsContent from "../common/tab/tabsContent"
import TabsHeader from "../common/tab/tabsHeader"
import TabHeader from "../common/tab/tabHeader"
import TabContent from "../common/tab/tabContent"
import List from "./billingCyclesList"
import Form from "./billingCyclesForm"

class billingCycles extends Component {

    componentDidMount() {
        this.props.selectTab("tabList")
        this.props.hideTabs({
            tabUpdate: true,
            tabDelete: true,
        })
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                label="listar"
                                icon="bars"
                                target="tabList" />
                            <TabHeader
                                label="Incluir"
                                icon="plus"
                                target="tabCreate" />
                            <TabHeader
                                label="Alterar"
                                icon="pencil"
                                target="tabUpdate" />
                            <TabHeader
                                label="Excluir"
                                icon="trash-o"
                                target="tabDelete" />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <h1>Update</h1>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <h1>Delete</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, hideTabs, create
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(billingCycles)