import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class Gifs extends React.Component {

    state = {
        highlightOn: this.props.highlightsOn,
    }



    render() {
        return (
            <>
                <table style={{ padding: 0 }} cellPadding="0" cellSpacing="0" border="0" bgcolor="#FFFFFF">
                    <tbody>
                        <tr>
                            <td>
                                <OverlayTrigger
                                    key="top"
                                    placement="top"
                                    overlay={
                                    <Popover id="fineprint-tooltip">
                                        <Popover.Title as="h3">
                                            GIF - Header
                                        </Popover.Title>
                                        <Popover.Content>
                                            This is a GIF as it renders on almost every email client except Outlook 2016 for Windows 10 computers. The width for a header gif should be no more than 600px.
                                        </Popover.Content>
                                    </Popover>
                                    }>
                                        <div className={this.props.highlightsOn ? "highlighted" : null}>
                                            <img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/BROADWAY/19.20Season/Mean/MEAN.gif" alt="" style={{ border: "0px" }} />
                                        </div>
                                </OverlayTrigger>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: "30px 20px 0px 20px", textAlign: "left" }}>
                                <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                                    <tbody>
                                        <tr>
                                            <td style={{ fontSize: "24px", lineHeight: "1.2em", fontFamily: "Arial, Helvetica, sans-serif", color: "#005775", fontWeight: "bold", textAlign: "center" }}>Headline Here</td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontSize: "20px", lineHeight: "1.2em", fontFamily: "Arial, Helvetica, sans-serif", color: "#47B9C7", fontWeight: "bold", textAlign: "center" }}>
                                                Sub-headline Here
                                                <br />
                                                <br />
                                                <hr style={{ height: "2px", borderWidth: 0, color: "#F6F6F6", backgroundColor: "#F6F6F6", width: "100%", padding: "0px", margin: "0px" }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontSize: "16px", fontWeight: "normal", lineHeight: "1.2em", fontFamily: "Arial, Helvetica, sans-serif", color: "#747474", padding: "10px 0px 0px 0px", textAlign: "center" }}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio impedit maiores voluptates aut ducimus nam modi itaque libero illo laudantium, quisquam quibusdam, commodi alias id! Debitis non illum delectus id!
                                            </td>
                                        </tr>
                                        <tr>
                                        <OverlayTrigger
                                                key="top"
                                                placement="top"
                                                overlay={
                                                <Popover id="fineprint-tooltip">
                                                    <Popover.Title as="h3">
                                                        GIF (Not MSO)
                                                    </Popover.Title>
                                                    <Popover.Content>
                                                        This is a GIF as it renders on almost every email client except Outlook 2016 for Windows 10 computers. The width for an in-body gif should be no more than 550px.
                                                    </Popover.Content>
                                                </Popover>
                                                }>
                                                <td style={{textAlign: "center", padding:" 10px 0px 0px 0px"}}>
                                                    <div className={this.props.highlightsOn ? "highlighted" : null}>
                                                        <a href="https://www.denvercenter.org/tickets-events/"><img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/THEATRE%20COMPANY/19.20Season/Twenty50/Twenty50.gif" alt="Another gray box, fascinating!" style={{border:"0px", maxWidth: "500px"}} /></a>
                                                    </div>
                                                </td>
                                            </OverlayTrigger>
                                        </tr>
                                        <tr>
                                        <OverlayTrigger
                                                key="top"
                                                placement="top"
                                                overlay={
                                                <Popover id="fineprint-tooltip">
                                                    <Popover.Title as="h3">
                                                        GIF (MSO)
                                                    </Popover.Title>
                                                    <Popover.Content>
                                                        This is a jpeg still of the first frame of the GIF as it renders on Outlook 2016 for Windows 10 computers. The width for an in-body gif should be no more than 550px. 
                                                        <br />
                                                        We code this so that only one or the other "gif" shows up, depending on what machine a user is on.
                                                    </Popover.Content>
                                                </Popover>
                                                }>
                                                <td style={{textAlign: "center", padding:" 10px 0px 0px 0px"}}>
                                                    <div className={this.props.highlightsOn ? "highlighted" : null}>
                                                        <a href="https://www.denvercenter.org/tickets-events/"><img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/THEATRE%20COMPANY/19.20Season/Twenty50/twenty50-gif-fallback.jpg" alt="Another gray box, fascinating!" style={{border:"0px", maxWidth: "500px"}} /></a>
                                                    </div>
                                                </td>
                                            </OverlayTrigger>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}