import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class BannerList extends React.Component {

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
                                                        Banner List
                                                    </Popover.Title>
                                                    <Popover.Content>
                                                        This is a list that uses banners for image assets. It's highly versatile and looks great in mobile and desktop views. Be warned, the banners must be made custom by the design team to have a dimension of 600x100px.
                                                        <br />
                                                        <br />
                                                        <strong className="safeChanges">Safe Changes:</strong> Font colors, Font size
                                                        <br />
                                                        <strong className="breakChanges">Breaking Changes:</strong> Padding, margins, line heights, letter spacing
                                                    </Popover.Content>
                                                </Popover>
                                                }>
                                                    <div className={this.props.highlightsOn ? "highlighted" : null}>
                                                    {/* DIXIE */}

<table cellPadding="0" cellSpacing="0" border="0" bgcolor="#FFFFFF">
    <tbody>
  <tr>
    <td style={{padding:"30px 0px 0px 0px", textAlign:"left"}}>
      <a style={{color:"#79C79A", textDecoration:"none", fontWeight:"bold"}} href="https://www.denvercenter.org/tickets-events/dixies-never-wear-a-tube-top/?utm_source=yesmail&utm_medium=email&utm_campaign=dixies-never-wear-a-tube-top-`__MMID__`"><img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/BROADWAY/19.20Season/Dixi/BW_19-20_Email%20Header_600x100_DIXI.jpg" alt="Dixie’s Never Wear a Tube Top..." style={{border:"0px"}}/></a>
    </td>
  </tr>
  <tr>
    <td style={{padding:"30px 20px 10px 20px", textAlign:"left"}}>
      <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
          <tbody>
       <tr>
          <td valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", textAlign: "left", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"0px 20px 0px 20px"}}>
            <p style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474"}}>
            <a style={{color:"#79C79A", textDecoration:"none", fontWeight:"bold", fontStyle: "italic"}} href="https://www.denvercenter.org/tickets-events/dixies-never-wear-a-tube-top/?utm_source=yesmail&utm_medium=email&utm_campaign=dixies-never-wear-a-tube-top-`__MMID__`">Dixie’s Never Wear a Tube Top...</a> 
            <br />
            <span style={{fontWeight: "bold"}}>Apr 8 - May 3</span>
            <br /><br />
             What do a jeweled crown, a cardboard cutout of Julie Andrews and a box of moon pies have in common? Spend the night with Dixie and find out as she swaps her Tupperware bowls for a mechanical bull. 
            <br /><br />
            <b>PERFECT FOR:</b> Comedy lovers, people looking for a great date night
            </p>
          </td>
       </tr>
       </tbody>
      </table>
    </td>
  </tr>
  </tbody>
</table>

{/* CHOIR */}

<table cellPadding="0" cellSpacing="0" border="0" bgcolor="#FFFFFF">
    <tbody>
  <tr>
    <td style={{padding:"30px 0px 0px 0px", textAlign:"left"}}>
      <a style={{color:"#79C79A", textDecoration:"none", fontWeight:"bold"}} href="https://www.denvercenter.org/tickets-events/choir-boy/?utm_source=yesmail&utm_medium=email&utm_campaign=choir-boy-`__MMID__`"><img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/THEATRE%20COMPANY/19.20Season/ChoirBoy/ChoirBoy_600x100_email_1.jpg" alt="Choir Boy" style={{border:"0px"}}/></a>
    </td>
  </tr>
  <tr>
    <td style={{padding:"30px 20px 10px 20px", textAlign:"left"}}>
      <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
          <tbody>
       <tr>
          <td valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", textAlign: "left", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"0px 20px 0px 20px"}}>
            <p style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474"}}>
            <a style={{color:"#79C79A", textDecoration:"none", fontWeight:"bold", fontStyle: "italic"}} href="https://www.denvercenter.org/tickets-events/choir-boy/?utm_source=yesmail&utm_medium=email&utm_campaign=choir-boy-`__MMID__`">Choir Boy</a> 
            <br />
            <span style={{fontWeight: "bold"}}>Apr 10 - May 10</span>
            <br /><br />
             Featuring gorgeous gospel music, this stunning coming-of-age drama by Oscar winner Tarell Alvin McCraney (<i>Moonlight</i>) illuminates the chaos of growing up. 
            <br /><br />
            <b>PERFECT FOR:</b> <i>A cappella</i> and gospel music lovers, Oscar/Tony followers, people engaged in LGBTQ+ and teen issues.
            </p>
          </td>
       </tr>
       </tbody>
      </table>
    </td>
  </tr>
  </tbody>
</table>

{/* LION */}

<table cellPadding="0" cellSpacing="0" border="0" bgcolor="#FFFFFF">
    <tbody>
  <tr>
    <td style={{padding:"30px 0px 0px 0px", textAlign:"left"}}>
      <a style={{color:"#79C79A", textDecoration:"none", fontWeight:"bold"}} href="https://www.denvercenter.org/tickets-events/lion-king?utm_source=yesmail&utm_medium=email&utm_campaign=lion_king"><img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/BROADWAY/19.20Season/Lion/BW_19-20_Email%20Header_600x100_LION.jpg" alt="Disney's The Lion King" style={{border:"0px"}}/></a>
    </td>
  </tr>
  <tr>
    <td style={{padding:"30px 20px 10px 20px", textAlign:"left"}}>
      <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
          <tbody>
       <tr>
          <td valign="top" style={{fontFamily: "Open Sans, Helvetica, Arial, sans-serif", textAlign: "left", fontSize: "16px", fontWeight: 400, lineHeight: "24px", padding:"0px 20px 0px 20px"}}>
            <p style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474"}}>
            <a style={{color:"#79C79A", textDecoration:"none", fontWeight:"bold"}} href="https://www.denvercenter.org/tickets-events/lion-king?utm_source=yesmail&utm_medium=email&utm_campaign=lion_king">Disney's <i>The Lion King</i></a> 
            <br />
            <span style={{fontWeight: "bold"}}>May 13 - June 14</span>
            <br /><br />
             Giraffes strut.  Birds swoop.  Gazelles leap.  The entire Serengeti comes to life as never before. And as the music soars, Pride Rock slowly emerges from the mist. This is Disney’s The Lion King, making its triumphant return to the Buell Theatre! 
            <br /><br />
            <b>PERFECT FOR:</b> Disney fans, puppetry lovers, families of all ages
            </p>
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