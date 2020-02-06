import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class ImgFinePrint extends React.Component {

    state = {
        highlightOn: this.props.highlightsOn,
    }



    render() {
        return (
            <>
                <table style={{ padding: 0 }} cellPadding="0" cellSpacing="0" border="0" bgcolor="#FFFFFF">
                    <tbody>
                        <tr>
                        <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Popover id="fineprint-tooltip">
                                        <Popover.Title as="h3">
                                            Header Image
                                        </Popover.Title>
                                        <Popover.Content>
                                            This is the image that heads each content block - it is a quick way to impart what show/event the text below pertains to. 
                                            <br />
                                            It can be no more than 600 pixels wide. Typically it is 245px high.
                                            <br />
                                            <br />
                                            <strong className="safeChanges">Safe Changes:</strong> Increased height, placing a gif here
                                            <br />
                                            <strong className="breakChanges">Breaking Changes:</strong> Increased width, multiple images on same line
                                        </Popover.Content>
                                    </Popover>
                                }
                            >
                            <td>
                                <div className={this.props.highlightsOn ? "highlighted" : null}>
                                    <img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/600x225-fpo.jpg" alt="" style={{ border: "0px" }} />
                                </div>
                            </td>
                            </OverlayTrigger>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td style={{ padding: "30px 20px 0px 20px", textAlign: "left" }}>
                                <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                                    <tbody>
                                        <tr>
                                            <td style={{ fontSize: "24px", lineHeight: "1.2em", fontFamily: "Arial, Helvetica, sans-serif", color: "#005775", fontWeight: "bold", textAlign: "center" }}>
                                            <OverlayTrigger
                                                key="top"
                                                placement="top"
                                                overlay={
                                    <Popover id="fineprint-tooltip">
                                        <Popover.Title as="h3">
                                            Headline
                                        </Popover.Title>
                                        <Popover.Content>
                                            A sentence-long explanation of the content block. Ideally it is short enough to remain on one line. 
                                            <br />
                                            <br />
                                            <strong className="safeChanges">Safe Changes:</strong> Font color, font size, alignment
                                            <br />
                                            <strong className="breakChanges">Breaking Changes:</strong> Line height, letter spacing
                                        </Popover.Content>
                                    </Popover>
                                }>
                                <div className={this.props.highlightsOn ? "highlighted" : null}> Headline Here
                                </div>
                                </OverlayTrigger>
                                </td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontSize: "20px", lineHeight: "1.2em", fontFamily: "Arial, Helvetica, sans-serif", color: "#47B9C7", fontWeight: "bold", textAlign: "center" }}>
                                            <OverlayTrigger
                                                key="top"
                                                placement="top"
                                                overlay={
                                    <Popover id="fineprint-tooltip">
                                        <Popover.Title as="h3">
                                            Sub-headline
                                        </Popover.Title>
                                        <Popover.Content>
                                            <em>Show Title </em> | MMM DD (or Now) &ndash; MMM DD
                                            <br />
                                            <br />
                                            <strong className="safeChanges">Safe Changes:</strong> (None Recommended) Font color, font size, alignment
                                            <br />
                                            <strong className="breakChanges">Breaking Changes:</strong> Line height, letter spacing
                                        </Popover.Content>
                                    </Popover>
                                }>
                                <div className={this.props.highlightsOn ? "highlighted" : null}>
                                                Sub-headline Here
                                </div>
                                </OverlayTrigger>
                                                <br />
                                                <br />
                                                <hr style={{ height: "2px", borderWidth: 0, color: "#F6F6F6", backgroundColor: "#F6F6F6", width: "100%", padding: "0px", margin: "0px" }} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ fontSize: "16px", fontWeight: "normal", lineHeight: "1.2em", fontFamily: "Arial, Helvetica, sans-serif", color: "#747474", padding: "10px 0px 0px 0px", textAlign: "center" }}>
                                            <OverlayTrigger
                                                key="top"
                                                placement="top"
                                                overlay={
                                    <Popover id="fineprint-tooltip">
                                        <Popover.Title as="h3">
                                            Body Copy
                                        </Popover.Title>
                                        <Popover.Content>
                                            The main copy presented to users. 
                                            <br />
                                            Remember: Less is more in email marketing. The goal is to drive people to the website to purchase or read or watch a thing.
                                            <br />
                                            <br />
                                            <strong className="safeChanges">Safe Changes:</strong> (None Recommended) Font color, font size, alignment
                                            <br />
                                            <strong className="breakChanges">Breaking Changes:</strong> Line height, letter spacing
                                        </Popover.Content>
                                    </Popover>
                                }>
                                            <div className={this.props.highlightsOn ? "highlighted" : null}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio impedit maiores voluptates aut ducimus nam modi itaque libero illo laudantium, quisquam quibusdam, commodi alias id! Debitis non illum delectus id!
                                            </div>
                                        </OverlayTrigger>
                                            </td>
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