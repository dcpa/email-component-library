import React,{ Component } from "react"; 
import { Container, Row, Col } from 'reactstrap';
import KittyKatty from "../Svg/Svg";
import SearchForm from "../SearchForm/SearchForm";
import HomeJumbo from "../HomePageJumbo/HomePageJumbo";

export default class ViewBox extends Component { 
    state = {
        componentWasClicked: false, 
        activeComponent: "SearchForm", 

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
                                <SearchForm />
                            </Col>
                        </Row>
                    </Container>
                    YesMail 2019
                    <br />
                    Menu 
                    <br />
                    Where
                    <br />
                    Components
                    <br />
                    Will
                    <br /> Be
                    <br />
                    linked
                    <br />
                    <this.state.activeComponent />
                </Col>
                <Col xs="10">
                    <br />
                    <HomeJumbo />
                </Col>
                </Row>
            </Container>
        )
    }
}