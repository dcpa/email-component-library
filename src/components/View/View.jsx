import React,{ Component } from "react"; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import KittyKatty from "../Svg/Svg";
import HomeJumbo from "../HomePageJumbo/HomePageJumbo";
import SideBar from "../SideBar/Sidebar";
import CompLink from "../SideBar/CompLinks";
import EmailShell from "../EmailShell/EmailShell";
import ImgFinePrint from "../email-components/FinePrint/ImageFinePrint";

export default class ViewBox extends Component { 
        state = {
            viewBox: "Home",
            compWasClicked: false,
            currentComponent: "",
            highlightButtonHover: false,
            highlightsAreOn: true
        }

        componentLinkClicked = (name) => {
            console.log(name);
            this.setState({
                compWasClicked: true,
                currentComponent: name
            });
        }

        renderItem(currentItem) {
            console.log("Triggered", currentItem);
            switch (currentItem) {
                case "Image Fine Print":
                    return <ImgFinePrint highlightsOn={this.state.highlightsAreOn} />;
            }
        }


        toggleHighlights = () => {
            this.setState({
                highlightsAreOn: !this.state.highlightsAreOn,
                highlightButtonHover: !this.state.highlightButtonHover
            })
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
                                {!this.state.compWasClicked ? null :
                                ( 
                                this.state.highlightsAreOn ? 
                                <Button 
                                    variant="outline-warning"
                                    onClick={this.toggleHighlights}
                                    >
                                        Turn Highlights Off
                                </Button> :
                                <Button 
                                    variant="outline-light"
                                    onClick={this.toggleHighlights}
                                    >
                                        Turn Highlights On
                                </Button>
                                )}
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <SideBar title="YesMail 2019">
                        <CompLink componentName="Image Fine Print" clickAction={this.componentLinkClicked} />
                    </SideBar>
                </Col>
                <Col xs="10">
                    <br />
                    {
                        !this.state.compWasClicked  ? 
                            <HomeJumbo /> : 
                            <EmailShell>
                                {this.renderItem(this.state.currentComponent)}
                            </EmailShell>
                    }
                    
                </Col>
                </Row>
            </Container>
        )
    }
}