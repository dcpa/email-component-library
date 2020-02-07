import React,{ Component } from "react"; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import KittyKatty from "../Svg/Svg";
import HomeJumbo from "../HomePageJumbo/HomePageJumbo";
import SideBar from "../SideBar/Sidebar";
import CompLink from "../SideBar/CompLinks";
import EmailShell from "../EmailShell/EmailShell";



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
                                <a href="/"><KittyKatty /></a>
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
                        <CompLink componentName="Vanilla Content Block" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Image Fine Print" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Photos and Quotes" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Numbered List" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Calendar" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Gifs" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Promo Code Box" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Footer Banner" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Banner List" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Tile List (Large)" clickAction={this.componentLinkClicked} />
                        <CompLink componentName="Tile List (Small)" clickAction={this.componentLinkClicked} />
                    </SideBar>
                </Col>
                <Col xs="10">
                    <br />
                    {
                        !this.state.compWasClicked  ? 
                            <HomeJumbo /> : 
                            <EmailShell currentComponent={this.state.currentComponent} highlightState={this.state.highlightsAreOn}>
                            </EmailShell>
                    }
                    
                </Col>
                </Row>
            </Container>
        )
    }
}