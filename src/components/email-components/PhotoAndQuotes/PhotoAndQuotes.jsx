import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class PhotoAndQuotes extends React.Component {

    state = {
        highlightOn: this.props.highlightsOn,
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
                            <td style={{padding:"30px 20px 0px 20px", textAlign:"left"}}>
                                <table cellPadding="0" cellSpacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                                    <tbody>
                                    <tr>
                                        <td style={{fontSize:"24px", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#005775", fontWeight:"bold", textAlign:"center"}}>Headline Here</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontSize:"20px", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#47B9C7", fontWeight:"bold", textAlign:"center"}}>
                                            Sub-headline Here
                                            <br />
                                            <br />
                                            <hr style={{height:"2px", borderWidth:0, color:"#F6F6F6", backgroundColor:"#F6F6F6", width:"100%", padding:"0px", margin:"0px"}} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"10px 0px 0px 0px", textAlign:"center"}}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio impedit maiores voluptates aut ducimus nam modi itaque libero illo laudantium, quisquam quibusdam, commodi alias id! Debitis non illum delectus id!
                                        </td>
                                    </tr>
                                    <OverlayTrigger 
                                        key="top" 
                                        placement="top" 
                                        overlay={
                                        <Popover id="fineprint-tooltip"> 
                                            <Popover.Title as="h3">Photos and Quotes Block</Popover.Title>
                                            <Popover.Content>
                                            This is a content block of centered photos between 400 - 500px wide with quotes in between.
                                            <br /> <br />
                                            <strong className="safeChanges">Safe Changes:</strong> Font color, Font Size, number of images, number of quotes
                                            <br />
                                            <strong className="breakChanges">Breaking Changes:</strong> Image Size, number of images on one line, adding a CTA between images and quotes
                                            </Popover.Content>
                                        </Popover>
                                    }>
                                        <div className={this.props.highlightsOn ? "highlighted" : null}>
                                            <tr>
                                                <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"40px 0px 0px 0px", textAlign:"center"}}>
                                                    <a href="https://www.denvercenter.org/tickets-events/"><img className="img-scale" src="https://via.placeholder.com/400" alt="A Gray Box with 400x400 printed on it" width="500px" style={{maxWidth:"500px", width: "100%"}} /></a>
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"40px 0px 0px 0px", textAlign:"center"}}>
                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit," &ndash; <i>A Roman</i>
                                                </td>
                                            </tr>     
                                            <tr>
                                                <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"40px 0px 0px 0px", textAlign:"center"}}>
                                                    <a href="https://www.denvercenter.org/tickets-events/"><img className="img-scale" src="https://via.placeholder.com/400" alt="A Gray Box with 400x400 printed on it" width="500px" style={{maxWidth:"500px", width: "100%"}} /></a>
                                                    <br />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"40px 0px 0px 0px", textAlign:"center"}}>
                                                    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." &ndash; <i>Some Monk Reading the Roman's Diary</i>
                                                </td>
                                            </tr>  
                                            <tr>
                                                <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"40px 0px 0px 0px", textAlign:"center"}}>
                                                    <a href="https://www.denvercenter.org/tickets-events/"><img className="img-scale" src="https://via.placeholder.com/400" alt="A Gray Box with 400x400 printed on it" width="500px" style={{maxWidth:"500px", width: "100%"}} /></a>
                                                    <br />
                                                </td>
                                                </tr>
                                            </div>
                                        </OverlayTrigger> 
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