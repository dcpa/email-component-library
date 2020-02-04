import React,{ Component } from "react"; 
import { Container, Row, Col } from 'react-bootstrap';
import KittyKatty from "../Svg/Svg";
import HomeJumbo from "../HomePageJumbo/HomePageJumbo";
import SideBar from "../SideBar/Sidebar";
import CompLink from "../SideBar/CompLinks";
import EmailShell from "../EmailShell/EmailShell";

export default class ViewBox extends Component { 
        state = {
            viewBox: "Home",
            compWasClicked: false,
            currentComponent: ""
        }

        componentLinkClicked = (name) => {
            console.log(name);
            this.setState({
                compWasClicked: true
            });
        }

        renderItem() {
            return (
                <EmailShell />
            )
        }

    render(){
        return(
            <Container fluid>
                <Row>
                <Col xs="2" md="2" className="text-center">
                    <Container>
                        <Row>
                            <Col xs="12">
                                <KittyKatty />
                            </Col>
                        </Row>
                    </Container>
                    <SideBar title="YesMail 2019">
                        <CompLink componentName="Image Fine Print" clickAction={this.componentLinkClicked} />
                    </SideBar>
                </Col>
                <Col xs="10">
                    <br />
                    {
                        !this.state.compWasClicked ? 
                            <HomeJumbo /> : 
                            this.renderItem()
                    }
                    
                </Col>
                </Row>
            </Container>
        )
    }
}