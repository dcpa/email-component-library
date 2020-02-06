import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class Promobox extends React.Component {

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
                                <img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/600x225-fpo.jpg" alt="" style={{ border: "0px" }} />
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
                                                <br /><br />
                                            </td>
                                        </tr>
                                        <tr>
                                            <div className={this.props.highlightsOn ? "highlighted" : null}>
                                            <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Popover id="fineprint-tooltip">
                                        <Popover.Title as="h3">
                                            Promo Code Box
                                        </Popover.Title>
                                        <Popover.Content>
                                            Grab some attention for a new promotion! Customize to your heart's desire.
                                            <br />
                                            <br />
                                            <strong className="safeChanges">Safe Changes:</strong> Background color, font colors, font treatments, line-heights, padding, font size, borders
                                            <br />
                                            <strong className="breakChanges">Breaking Changes:</strong> Total width
                                        </Popover.Content>
                                    </Popover>
                                }>
                                            <td 
                                            style={{fontSize:"22px", fontWeight:"normal", lineHeight:"1.8em", fontFamily:"Arial, Helvetica, sans-serif", color: "mediumpurple", padding:"40px", textAlign:"left", backgroundColor: "khaki", border: "2px solid gold", borderRadius: "5px"}}>
                                            <strong>This world of wonder is perfect for audiences of all ages! Use code <span style={{textShadow: "4px 2px thistle", color: "magenta"}}>WONKA</span> to get a family 4-pack for only $159*.</strong>
                                            </td>
                                            </OverlayTrigger>
                                            </div>
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