import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class NumberedList extends React.Component {

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
                                                <br />
                                                <br />
                                            <div>
                                                <OverlayTrigger 
                                                    key="top" 
                                                    placement="top" 
                                                    overlay={
                                                    <Popover id="fineprint-tooltip"> 
                                                        <Popover.Title as="h3">Numbered List</Popover.Title>
                                                        <Popover.Content>
                                                        A stylized numbered list.
                                                        <br /> <br />
                                                        <strong className="safeChanges">Safe Changes:</strong> Font color, Font Size, number of listed items
                                                        <br />
                                                        <strong className="breakChanges">Breaking Changes:</strong> Text alignment, positioning (should not sit on a line with another element), alignment of numbers
                                                        </Popover.Content>
                                                    </Popover>
                                                }>
                                                <table className={this.props.highlightsOn ? "highlighted" : null}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{fontSize: "30px", fontWeight: "900", color: "#990000", verticalAlign: "top"}}>
                                                                1.
                                                            </td>
                                                            <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"5px 0px 10px 5px", textAlign:"left"}}>
                                                                <strong>Go all-in with a numbered list. </strong>
                                                                <br />
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{fontSize: "30px", fontWeight: "900", color: "#990000", verticalAlign: "top"}}>
                                                                2.
                                                            </td>
                                                            <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"5px 0px 10px 5px", textAlign:"left"}}>
                                                                <strong>How many numbers? All of them.</strong>
                                                                <br />
                                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </OverlayTrigger> 
                                            </div>
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