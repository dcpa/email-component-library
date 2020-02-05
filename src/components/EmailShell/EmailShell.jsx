import React from "react";
import "./EmailShell.css";

export default class EmailShell extends React.Component {

    state = {

    }

    render() {
        return (
            <div style={{padding:0, margin:0, backgroundColor: "#F5F5F5"}}>
                <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#F5F5F5"}}>
                    <table cellSpacing="0" padding="0" border="0" width="600" role="presentation" bgcolor="#FFFFFF">
                        <tbody>
                        <tr>
                            <td align="center">
                                <table bgcolor="#FFFFFF" cellPadding="0" cellSpacing="0" width="100%">
                                    <tbody>
                                    <tr>
                                        <td align="center" bgcolor="#FFFFFF" className="inner-padding" style={{padding: "0px 0px 0px 0px", textAlign: "center",  lineHeight: "1.4em"}}>
                                            <table align="center" bgcolor="#FFFFFF" border="0" cellPadding="0" cellSpacing="0" style={{textAlign: "center", fontFamily:  "Montserrat, sans-serif", display: "inline-table"}} width="100%">
                                                <tbody>
                                                <tr>
                                                    <td style={{textAlign: "left", lineHeight: "1.2em", fontSize: "10px", verticalAlign: "top", color:"#FFFFFF", textAlign:"center"}}>`pv` </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <table bgcolor="#FFFFFF" border="0" cellPadding="0" cellSpacing="0" width="100%">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div style={{display:"inline-block", verticalAlign: "top", width:"100%"}}>
                                                            <table bgcolor="#FFFFFF" border="0" cellPadding="0" cellSpacing="0" align="left" style={{maxWidth: "100px"}}>
                                                                <tbody>
                                                                <tr>
                                                                    <td style={{padding: "0px 0px 0px 20px", fontSize:"30px"}}>

                                                                        <a href="https://www.denvercenter.org/tickets-events/?utm_source=yesmail&amp;utm_medium=email&amp;utm_campaign=primary-logo"><img src="https://storage.googleapis.com/dcpa-email-images/200x64-DCPA-logo-primary.png" alt="DENVER CENTER FOR THE PERFORMING ARTS" style={{color: "#000000", fontSize:"14px", lineHeight:"1.2em", textAlign:"left", fontFamily: 'Open Sans, sans-serif', border:"0px"}} /></a>

                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                            <table style={{padding: 0}} cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                                <tbody>
                                <tr>
                                    <td align="center" style={{padding:"0px 0px -5px 0px", borderBottom:"7px solid #005775"}}>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            
                        {this.props.children}

                    <div style={{backgroundColor:"#005776"}}>
                        <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF" style={{background: "#005776"}}>
                            <tbody>
                            <tr>
                                <td>
                                    <div style={{display:"inline-block", verticalAlign:"top", width:"100%"}}>
                                        <table bgcolor="#FFFFFF" border="0" cellPadding="0" cellSpacing="0" align="left" style={{ maxWidth: "300px", background: "#005776"}}>
                                           <tbody>
                                            <tr>
                                                <td style={{fontSize:"16px", fontWeight:900, textTransform: "uppercase", textAlign: "left", lineHeight:"1.2em", color:"#ffffff", fontFamily:" Montserrat, sans-serif", padding:"28px 20px 0px 20px"}}>
                                                    BOX OFFICE: <a style={{textDecoration: "none", color: "#ffffff"}} href="tel:3038934100">303.893.4100</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <table bgcolor="#FFFFFF" border="0" cellPadding="0" cellSpacing="0" align="right" style={{background: "#005776"}} id="hideonmobile">
                                           <tbody>
                                            <tr>
                                                <td style={{padding:"16px 20px 0px 20px", fontSize:"16px", textAlign: "right", display: "inline-flex"}}>
                                                    <a href="https://www.facebook.com/DenverCenter/"><img src="https://storage.googleapis.com/dcpa-email-images/SM-facebook-white-email.png" alt="Facebook" style={{color:"#ffffff", fontSize:"14px", lineHeight:"1.2em", textAlign:"center", fontFamily: "'Open Sans', sans-serif", border:"0px", padding: "0px 5px 5px 5px"}} /></a>
                                                    <br id="showonmobile" /> <a href="https://twitter.com/denvercenter"><img src="https://storage.googleapis.com/dcpa-email-images/SM-twitter-white-email.png" alt="Twitter" style={{color:"#ffffff", fontSize:"14px", lineHeight:"1.2em", textAlign:"center", fontFamily: "'Open Sans', sans-serif", border:"0px", padding: "0px 5px 5px 5px"}} /></a>

                                                    <br id="showonmobile" /> <a href="https://www.instagram.com/denvercenter/"><img src="https://storage.googleapis.com/dcpa-email-images/SM-instagram-white-email.png" alt="Instagram" style={{color:"#ffffff", fontSize:"14px", lineHeight:"1.2em", textAlign:"center", fontFamily:" 'Open Sans', sans-serif", border:"0px", padding:" 0px 5px 5px 5px"}} /></a>

                                                    <br id="showonmobile" /> <a href="https://www.youtube.com/denvercenter"><img src="https://storage.googleapis.com/dcpa-email-images/SM-youtube-white-email.png" alt="Youtube" style={{color:"#ffffff", fontSize:"14px", lineHeight:"1.2em", textAlign:"center", fontFamily:" 'Open Sans', sans-serif", border:"0px", padding:" 0px 5px 5px 5px"}} /></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td style={{padding:"15px 20px 10px 20px", textAlign: "center", width:" 100%"}}>
                                    <div style={{height:" 1px", width: "100%", margin: "0px auto", background: "#7ac79b"}}></div>
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontSize:"16px", lineHeight:"1.2em", color:"#ffffff", fontFamily:" Montserrat, sans-serif", fontStyle:" italic", padding: "30px 20px 10px 20px", textAlign: "center"}}>
                                    We engage and inspire through the transformative <br /> power of live theatre.
    </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{backgroundColor:"#005776"}}>
                        <tbody>
                        <tr>
                            <td style={{height:"0px", fontSize:"12px", lineHeight:"1.2em", padding:"20px 0px 20px 0px", textAlign:"center", color:"#FFFFFF"}}>
                                <span style={{fontSize:"10px", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif"}}>Broadway Season Sponsors</span><br />
                                <br />
                                <img style={{display:"inline-block", verticalAlign:"middle"}}  src="https://storage.googleapis.com/dcpa-email-images/uc-health-logo-white-web.png" alt="uchealth" />&nbsp;&nbsp;<img style={{display:"inline-block", verticalAlign:"middle"}} alt="United" src="https://storage.googleapis.com/dcpa-email-images/united-logo-white-web.png" />&nbsp;&nbsp;<img style={{display:"inline-block", verticalAlign:"middle"}} src="https://storage.googleapis.com/dcpa-email-images/SPONSORS/Wht_BMWSkylineLogo%20copy-100x40.png" alt="BMW of Denver Downtown" />
                                <br /> <br />
                                <span style={{fontSize:"10px", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif"}}>Theatre Company Sponsors</span><br />
                                <br />
                                <img style={{display:"inline-block"}} alt="University of Colorado" src="https://storage.googleapis.com/dcpa-email-images/cu-all-campuses-logo-white-web.png" />&nbsp;&nbsp; --><img style={{display:"inline-block"}}  alt="Daniel L. Ritchie" src="https://storage.googleapis.com/dcpa-email-images/dan-ritchie-logo-white-web.png" />&nbsp;&nbsp;<img style={{display:"inline-block"}} alt="The Shubert Foundation" src="https://storage.googleapis.com/dcpa-email-images/shubert-foundation-logo-white-web.png" />
                                <div style={{padding: "20px 0px 0px 0px"}}></div> <br />
                                <span style={{fontSize:"10px", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif"}}>Additional Sponsors</span><br /><br />
                                <img style={{display:"inline-block"}} alt="SCFD" src="https://storage.googleapis.com/dcpa-email-images/SPONSORS/SCFD/SCFD_new_logo_100x44.png" width="100px" style={{width: "100px"}} />&nbsp;&nbsp;<img style={{display:"inline-block"}} alt="Denver Post Community" src="https://storage.googleapis.com/dcpa-email-images/denver-post-community-logo-white.png" />&nbsp;&nbsp;<img style={{display:"inline-block"}} alt="CBS4" src="https://storage.googleapis.com/dcpa-email-images/cbs4-logo-white.png" /><br />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={{backgroundColor:"#005776"}}>


                        <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF" style={{background: "#005776"}}>
                            <tbody>
                            <tr>
                                <td style={{padding:"0px 20px 40px 20px", textAlign: "center", width: "100%"}}>

                                    <a style={{color:"#ffffff", fontSize:"10px", lineHeight: "1.2em", fontFamily: "Arial, sans-serif", textDecoration: "none"}} href="#">Unsubscribe</a>
                                    <p style={{color:"#ffffff", fontSize:"10px", lineHeight: "1.2em", fontFamily:" Arial, sans-serif"}}>
                                        <a style={{color:"#ffffff", textDecoration:"none"}} href="https://www.denvercenter.org/terms-and-conditions/#tab-id-7">Privacy Policy</a><br id="showonmobile" /> <span id="hide">|</span> <a style={{color:"#ffffff", textDecoration:"none"}} href="https://www.denvercenter.org/terms-and-conditions/">Terms &amp; Conditions</a><br id="showonmobile" /> <span id="hide">|</span> <a style={{color:"#ffffff", textDecoration:"none"}} href="@HTML_PREVIEW_LINK">View Online</a>
                                    </p>
                                    <p style={{color:"#ffffff", fontSize:"10px", lineHeight: "1.2em", fontFamily:" Arial, sans-serif"}}>
                                        CN: 1234567
                                                                            </p>
                                    <p style={{color:"#ffffff", fontSize:"10px", lineHeight: "1.2em", fontFamily:" Arial, sans-serif"}}>
                                        ©2019 Denver Center for the Performing Arts | 1101 13th St. Denver, CO 80204<br />
                                        A tax-exempt 501(c)(3) nonprofit organization EIN #<span style={{color: "#CCCCCC"}}>84-0407760</span>
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        )
    }
}