import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class TileListL extends React.Component {

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
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                    <Popover id="fineprint-tooltip">
                        <Popover.Title as="h3">
                            Tile List (Large)
                        </Popover.Title>
                        <Popover.Content>
                            This is another versatile format for displaying a list of shows with image assets. This particular example comes from the Radvantage series.
                            <br />
                            This particular format is better for shorter lists - displaying maybe up to 7 shows.
                            <br />
                            <br />
                            <strong className="safeChanges">Safe Changes:</strong>  Font color, font size, image size (under 550px), adding CTAs
                            <br />
                            <strong className="breakChanges">Breaking Changes:</strong> Alignment or placement changes, multiple images in a line
                        </Popover.Content>
                    </Popover>
                    }>
                        <div className={this.props.highlightsOn ? "highlighted" : null}>
                {/* SHOW ONE */}
                    <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                        <tbody>
                    <tr>
                        <td align="center" valign="top" style={{fontSize:0, padding:"10px 0px 10px 0px"}}> 
                        <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"600px"}}>
                            <tbody>
                            <tr>
                            <td align="center" valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"15px 20px 0px 20px"}}>
                            <a href="https://tickets.denvercenter.org/Online/login.asp?targetpage=article/radv_20you_lost_me"><img src="https://storage.googleapis.com/dcpa-email-images/THEATRE%20COMPANY/19.20Season/LostMe/TC2019-20_600x600_Web_Show%20Tiles-lost-me.jpg" alt="You Lost Me" style={{border:"2px #cccccc solid", display:"block", width:"400px", height: "400px"}} width="400" height="400" /></a>
                            </td>
                            </tr>
                            <tr>
                            <td align="center" valign="top" style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"30px 10px 0px 10px"}}>
                            <span style={{color:"#ec008c", fontSize: "24px"}}> <strong>$20 tickets</strong></span><br />
                            <a style={{lineHeight: "1.4em", color:"#747474", textDecoration:"none", fontWeight:"bold", fontSize: "22px"}} href="https://tickets.denvercenter.org/Online/login.asp?targetpage=article%2Fradv_20you_lost_me&utm_source=yesmail&utm_medium=email&utm_campaign=radvantage-you-lost-me"><i>You Lost Me</i></a> 
                            <br /> Now &ndash; Feb 23
                            </td>
                            </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    </tbody>
                    </table>     


                    {/* SHOW TWO */}
                    <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                        <tbody>
                    <tr>
                        <td align="center" valign="top" style={{fontSize:0, padding:"10px 0px 10px 0px"}}> 
                        <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth:"600px"}}>
                            <tbody>
                            <tr>
                            <td align="center" valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"15px 20px 0px 20px"}}>
                            <a href="https://tickets.denvercenter.org/Online/login.asp?targetpage=article%2Fradv_20twenty50&utm_source=yesmail&utm_medium=email&utm_campaign=radvantage-twenty50-`__MMID__`"><img src="https://storage.googleapis.com/dcpa-email-images/THEATRE%20COMPANY/19.20Season/Twenty50/TC_19-20Season_600x600_twenty50.jpg" alt="twenty50" style={{border:"2px #cccccc solid", display:"block", width:"400px", height: "400px"}} width="400" height="400" /></a>
                            </td>
                            </tr>
                            <tr>
                            <td align="center" valign="top" style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"30px 10px 0px 10px"}}>
                                <span style={{color:"#ec008c", fontSize: "24px"}}> <strong>$20 tickets</strong></span><br />
                                <a style={{lineHeight: "1.4em", color:"#747474", textDecoration:"none", fontWeight:"bold", fontSize: "22px"}} href="https://tickets.denvercenter.org/Online/login.asp?targetpage=article%2Fradv_20twenty50&utm_source=yesmail&utm_medium=email&utm_campaign=radvantage-twenty50-`__MMID__`"><i>twenty50</i></a> 
                            <br />Now &ndash; Mar 1
                            </td>
                            </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                    </tbody>
                    </table>     
                    </div>
                </OverlayTrigger>

            </>
        )
    }
}