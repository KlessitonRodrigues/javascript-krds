import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { changeTab } from "./tabAction.js"

class tabHeader extends Component {
    render() {
        const isActive = this.props.selectedTab === this.props.target

        return (
            <li className={isActive ? "active" : ""}>
                <a href="javascript:;"
                    data-toggle="tab"
                    data-target={this.props.target}
                    onClick={() =>
                        this.props.changeTab(this.props.target)}>
                    <i className={`fa fa-${this.props.icon}`} />
                    {" " + this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state => ({
    selectedTab: state.selectedTab
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(tabHeader)