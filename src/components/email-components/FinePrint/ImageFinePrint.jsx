import React from "react";
import { Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";


export default class ImgFinePrint extends React.Component {

    state = {
        highlightOn: this.props.highlightsOn,
        description1: "This is fine print for an image resource. It can be placed under the header image of the email or any subsequent images within the email."
    }

  

    render(){
        return(
            <>
                            <table style={{padding: 0}} cellPadding="0" cellSpacing="0" border="0" bgcolor="#FFFFFF">
                        <tbody>
                        <tr>
                            <td>
                                <img className="img-scale" src="https://storage.googleapis.com/dcpa-email-images/600x225-fpo.jpg" alt="" style={{border:"0px"}} />
                            </td>
                        </tr>
                        <tr>
                            <OverlayTrigger 
                            key="top" 
                            placement="top" 
                            overlay={
                                <Tooltip id="fineprint-tooltip"> 
                                {this.state.description1}
                                </Tooltip>
                                }
                                >
                            <td 
                                className={this.props.highlightsOn ? "highlighted" : null}
                                style={{fontSize:"10px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"5px 0px 0px 20px", textAlign:"left"}}>
                                Jane Doe as 'So-and-So'. John Doe as 'So-and-So'. Photo: John Q
                            </td>
                            </OverlayTrigger> 
                            </tr>
                        <tr>
                            <td style={{padding:"30px 20px 0px 20px", textAlign:"left"}}>
                                <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                                    <tbody>
                                    <tr>
                                        <td style={{fontSize:"24px", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#005775", fontWeight:"bold", textAlign:"center"}}>Headline Here</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontSize:"20px", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#47B9C7", fontWeight:"bold", textAlign:"center"}}>
                                            Sub-headline Here
            <br /><br /><hr style={{height:"2px", borderWidth:0, color:"#F6F6F6", backgroundColor:"#F6F6F6", width:"100%", padding:"0px", margin:"0px"}} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"10px 0px 0px 0px", textAlign:"center"}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio impedit maiores voluptates aut ducimus nam modi itaque libero illo laudantium, quisquam quibusdam, commodi alias id! Debitis non illum delectus id!
          </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style={{padding:"30px 20px 25px 20px"}}>
                                            <table cellPadding="0" cellSpacing="0" border="0" id="full">
                                                <tbody> 
                                                <tr>
                                                    {this.props.cta}
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
            </>
        )
    }
}