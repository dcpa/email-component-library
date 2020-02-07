import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class TileListS extends React.Component {

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
                            Tile List (Small)
                        </Popover.Title>
                        <Popover.Content>
                            This is another versatile format for displaying a list of shows with image assets.
                            <br />
                            This particular format is better for longer lists - displaying more than 7 shows.
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
                <table cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" width="100%" style={{margin: "0 auto"}}>
    <tr>
        <td style="padding:30px 20px 0px 20px; text-align:center;" width="600" style={{maxWidth:"600px"}}>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                <tr>
                    <td align="center" valign="top" style={{fontSize:0, padding:"10px 0px 10px 0px"}}>
            <table align=" center" border="0" cellpadding="0" cellspacing="0" width="100%" style={{maxWidth:"600px"}}>
                <tr>
                    <td align="center" valign="top"
                        style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"15px 20px 0px 20px"}}>
                        <a
                            href="https://www.denvercenter.org/tickets-events/camp-christmas/?utm_source=yesmail&utm_medium=email&utm_campaign=camp-christmas-`__MMID__`"><img
                                src="https://storage.googleapis.com/dcpa-email-images/OC/19.20/CAMP/CAMP-Showtile-200x200_Stamp-version.jpg"
                                alt="Camp Christmas" class="img-scale" /></a>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top"
                        style={{fontSize:"20px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"30px 10px 0px 10px"}}>
                        <span style={{fontStyle:"italic"}}><span style={{fontWeight:"bold"}}>Camp
                                Christmas</span></span><br />
                        <span style={{fontWeight:"bold"}}>DISCOUNT:</span> 4-Pack for $40*<br />
                        <span style={{fontWeight:"bold"}}>VALID FOR:</span> Tuesdays - Fridays, Dec 10 - Jan 3
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" style={{padding:"30px 20px 25px 20px"}}>
            <table cellpadding="0" cellspacing="0" border="0" id="full">
                <tr>
                    <td style={{backgroundColor:"#005775", color:"#FFFFFF", textAlign:"center", fontSize:"16px", lineHeight:"1.2em", fontWeight:700, cursor:"pointer", fontFamily:" Arial, sans-serif, 'Montserrat'", padding:"20px 40px 20px 40px", textTransform: "uppercase", width: "230px"}}
                        align="center">
                        <a style={{color:"#FFFFFF", textDecoration:"none", cursor:"pointer"}}
                            href="https://www.denvercenter.org/tickets-events/camp-christmas/?utm_source=yesmail&utm_medium=email&utm_campaign=camp-christmas-`__MMID__`">GET
                            TICKETS</a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
  </table>
  
  
  <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF">
    <tr>
        <td align="center" valign="top" style={{fontSize:0, padding:"10px 0px 10px 0px"}}>
            <table align=" center" border="0" cellpadding="0" cellspacing="0" width="100%" style={{maxWidth:"600px"}}>
    <tr>
        <td align="center" valign="top"
            style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"15px 20px 0px 20px"}}>
            <a
                href="https://www.denvercenter.org/tickets-events/latin-history-for-morons/?utm_source=yesmail&utm_medium=email&utm_campaign=latin-history-for-morons-`__MMID__`">
                <img src="https://storage.googleapis.com/dcpa-email-images/BROADWAY/19.20Season/LATI/Latin-History_Showtile-200x200.jpg"
                    alt="John Leguizamo - Latin History for Morons" style={{border:"1px solid #747474"}}
                    class="img-scale" /></a>
        </td>
    </tr>
    <tr>
        <td align="center" valign="top"
            style={{fontSize:"20px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"30px 10px 0px 10px"}}>
            <span style={{fontStyle:"italic", fontWeight:"bold"}}>Latin History for
                    Morons</span><br />
            <span style={{fontWeight:"bold"}}>DISCOUNT:</span> $10 off*<br />
            <span style={{fontWeight:"bold"}}>VALID FOR:</span> PL2 balcony seats (limit 50) and Golden Circle
        </td>
    </tr>
  </table>
  </td>
  </tr>
  <tr>
    <td align="center" style={{padding:"30px 20px 25px 20px"}}>
        <table cellpadding="0" cellspacing="0" border="0" id="full">
            <tr>
                <td style={{backgroundColor:"#005775", color:"#FFFFFF", textAlign:"center", fontSize:"16px", lineHeight:"1.2em", fontWeight:700, cursor:"pointer", fontFamily:" Arial, sans-serif, 'Montserrat'", padding:"20px 40px 20px 40px", textTransform: "uppercase", width: "230px"}}
                    align="center">
                    <a style={{color:"#FFFFFF", textDecoration:"none", cursor:"pointer"}}
                        href="https://www.denvercenter.org/tickets-events/latin-history-for-morons/?utm_source=yesmail&utm_medium=email&utm_campaign=latin-history-for-morons-`__MMID__`">GET
                        TICKETS</a>
                </td>
            </tr>
        </table>
    </td>
  </tr>
  </table>
  
  
  
  <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF">
    <tr>
        <td align="center" valign="top" style={{fontSize:0, padding:"10px 0px 10px 0px"}}>
            <table align=" center" border="0" cellpadding="0" cellspacing="0" width="100%" style={{maxWidth:"600px"}}>
    <tr>
        <td align="center" valign="top"
            style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"15px 20px 0px 20px"}}>
            <a
                href="https://www.denvercenter.org/tickets-events/mannheim-steamroller-christmas/?utm_source=yesmail&utm_medium=email&utm_campaign=mannheim-steamroller-christmas-`__MMID__`">
                <img src="https://storage.googleapis.com/dcpa-email-images/BROADWAY/19.20Season/Mann/MANN_showtile_updated_200x200.jpg"
                    alt="Mannheim Steamroller Christmas" class="img-scale" /></a>
        </td>
    </tr>
    <tr>
        <td align="center" valign="top"
            style={{fontSize:"20px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"30px 10px 0px 10px"}}>
            <span style={{fontStyle:"italic"}}><span style={{fontWeight:"bold"}}>Mannheim Steamroller
                    Christmas</span></span><br />
            <span style={{fontWeight:"bold"}}>DISCOUNT:</span> $10 off*<br />
            <span style={{fontWeight:"bold"}}>VALID FOR:</span> PL2 balcony seats
        </td>
    </tr>
  </table>
  </td>
  </tr>
  <tr>
    <td align="center" style={{padding:"30px 20px 25px 20px"}}>
        <table cellpadding="0" cellspacing="0" border="0" id="full">
            <tr>
                <td style={{backgroundColor:"#005775", color:"#FFFFFF", textAlign:"center", fontSize:"16px", lineHeight:"1.2em", fontWeight:700, cursor:"pointer", fontFamily:" Arial, sans-serif, 'Montserrat'", padding:"20px 40px 20px 40px", textTransform: "uppercase", width: "230px"}}
                    align="center">
                    <a style={{color:"#FFFFFF", textDecoration:"none", cursor:"pointer"}}
                        href="https://www.denvercenter.org/tickets-events/mannheim-steamroller-christmas/?utm_source=yesmail&utm_medium=email&utm_campaign=mannheim-steamroller-christmas-`__MMID__`">GET
                        TICKETS</a>
                </td>
            </tr>
        </table>
    </td>
  </tr>
  </table>
  

            </td>
            </tr>
            </table>
                    </div>
                </OverlayTrigger>

            </>
        )
    }
}