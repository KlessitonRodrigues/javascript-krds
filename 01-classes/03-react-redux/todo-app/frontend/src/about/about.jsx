import React from "react"
import PageHeader from "../template/pageHeader"

export default props => (
    <div>
        <PageHeader name="Sobre" small="nós" />

        <div className="panel panel-primary">
            <div className="panel-heading">
                <h4>Nossa História</h4></div>
            <div className="panel-body">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum expedita
                perferendis corrupti ratione
                atque obcaecati fugiat aperiam.</div>
        </div>

        <div className="panel panel-primary">
            <div className="panel-heading">
                <h4>Misão e Visão</h4></div>
            <div className="panel-body">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum expedita
                perferendis corrupti ratione
                atque obcaecati fugiat aperiam.</div>
        </div>

        <div className="panel panel-primary">
            <div className="panel-heading">
                <h4>Impressa</h4></div>
            <div className="panel-body">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laborum expedita
                perferendis corrupti ratione
                atque obcaecati fugiat aperiam.</div>
        </div>
    </div>
)