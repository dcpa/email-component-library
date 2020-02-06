import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class FooterBanner extends React.Component {

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
                <br /><br />
                
                <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ffffff">
                <tr>
                    <td align="center" valign="top" style={{fontSize:0, padding:"0px 20px 20px 20px"}}> 
                    <OverlayTrigger
                                key="top"
                                placement="top"
                                overlay={
                                    <Popover id="fineprint-tooltip">
                                        <Popover.Title as="h3">
                                            Footer Banner
                                        </Popover.Title>
                                        <Popover.Content>
                                            The Footer Banner is a highly adaptable component that can be used for many purposes. This example comes from the Designer Series as an instruction and cta to use one's passes. 
                                            It can also be used to inform patrons of a promotion, or to promote a show in a low-key fashion.
                                            <br />
                                            <br />
                                            <strong className="safeChanges">Safe Changes:</strong> Background color, font color, CTA copy, copy within box
                                            <br />
                                            <strong className="breakChanges">Breaking Changes:</strong> Alignment or placement changes, width changes
                                        </Popover.Content>
                                    </Popover>
                                }
                            >
            <div className={this.props.highlightsOn ? "highlighted" : null}>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#ee7623;">
                        <tr>
                        <td align="center" valign="top" style={{fontSize:0, padding:"20px 0px 20px 0px"}}>
                        <div style={{display:"inline-block", maxWidth:"93%", minWidth:"300px", verticalAlign:"top", width:"100%"}}>
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style={{maxWidth:"560px"}}>
                            <tr>
                            <td valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", textAlign: "left", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"0px 20px 0px 20px"}}>
                                <p style={{fontSize:"25px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#FFFFFF", textAlign:"center"}}>
                                    <span style={{fontWeight:"bold"}}>Use your passes on <span style={{fontStyle:"italic"}}>`showName`</span></span>
                                </p>
                                <p style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#FFFFFF", textAlign:"left"}}>
                                <ol>
                                    <li style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#ffffff", padding: "0px 0px 10px 0px"}}>
                                        Log in below
                                    </li>
                                    <li ststyle={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#ffffff", padding: "0px 0px 10px 0px"}}>
                                        Choose the performance and seat(s) of your choice
                                    </li>
                                    <li style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#ffffff", padding: "0px 0px 10px 0px"}}>
                                        Select the $0.00 “Redeem Voucher” price type.
                                    </li>
                                </ol>
                                </p>
                            </td>
                            </tr>
                            <tr>
                            <td align="center" style={{padding:"30px 20px 25px 20px"}}>
                                <table cellpadding="0" cellspacing="0" border="0" id="full">
                                <tr>
                                    <td style={{ color:"#FFFFFF", textAlign:"center", fontSize:"16px", lineHeight:"1.2em", fontWeight:700, cursor:"pointer", fontFamily:" Arial, sans-serif, 'Montserrat'", padding:"20px 40px 20px 40px", textTransform: "uppercase", width: "300px", border: "3px solid white"}} align="center">
                                            <a style={{color:"#FFFFFF", textDecoration:"none", cursor:"pointer"}}
                                    href="https://tickets.denvercenter.org/Online/">LOG IN & BOOK</a>
                                    </td>
                                </tr>       
                                </table>
                            </td>
                            </tr>    
                            </table>
                        </div>
                        </td>
                        </tr>
                    </table>
                    </div>
                </OverlayTrigger>
                    </td>
                </tr>
                </table>
                
            </>
        )
    }
}