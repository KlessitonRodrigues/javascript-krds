import React from "react"

import "./style/app.css"
import waveTop from "./style/svg/waveTop.svg"
import waveBottom from "./style/svg/waveBottom.svg"
import {
    Header,
    Section,
    SectionBlack,
    Article,
    Row,
    List,
    Footer
} from "./style/styleComponents"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header>
                    <Row>
                        <h1>Lorem Ipsum</h1>
                        <List>
                            <li class="active"><a>Home</a></li>
                            <li><a href="#">Categories</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">About us</a></li>
                        </List>
                    </Row>
                </Header>
                <Section>
                    <h2>Section I</h2>

                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                </Section>

                <img src={waveTop} alt="" />

                <SectionBlack>
                    <h2>Section II</h2>

                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                </SectionBlack>

                <img src={waveBottom} alt="" />

                <Section>
                    <h2>Section III</h2>

                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                    <Article>
                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quidem fugit est nulla
                            incidunt! Illo pariatur mollitia nesciunt
                            inventore similique? Facilis laborum
                            obcaecati iste! Repellendus nisi,
                            rem odio laborum tenetur qui!
                        </p>
                    </Article>
                </Section>

                <Footer>
                    <List>
                        <li><a href="#">Lorem ipsun</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                    </List>
                </Footer>
            </div>
        )
    }
}