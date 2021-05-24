import "../common/template/dependencies"
import React from "react"
import Header from "../common/template/header"
import SideBar from "../common/template/sidebar"
import Footer from "../common/template/footer"
import Routes from "./routes"
import Toastr from "../common/message/msg"

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Toastr />
    </div>
)