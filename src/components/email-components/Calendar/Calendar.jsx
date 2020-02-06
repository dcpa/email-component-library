import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";


export default class Calendar extends React.Component {

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
                                        </td>
                                    </tr>
                                    <tr>
                  <td
                      style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"30px 0px 0px 0px", textAlign:"center"}}>
                       <OverlayTrigger 
                                                    key="top" 
                                                    placement="top" 
                                                    overlay={
                                                    <Popover id="fineprint-tooltip"> 
                                                        <Popover.Title as="h3">Calendar</Popover.Title>
                                                        <Popover.Content>
                                                        A calendar to show patrons the upcoming dates of a show with the best availability to encourage sales.
                                                        <br /> <br />
                                                        <strong className="safeChanges">Safe Changes:</strong> Color of legend/items, dates, adding another week (for a maximum for four rows)
                                                        <br />
                                                        <strong className="breakChanges">Breaking Changes:</strong> Everything not listed above.
                                                        </Popover.Content>
                                                    </Popover>
                                                }>
                      <div className={this.props.highlightsOn ? "highlighted" : null}>
                      <table 
                      cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                          <tr>
                              <td
                                  style={{fontSize:"14px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 5px 8px 5px", textAlign:"center", width:"14%", border:"1px solid #bababa"}}>
                                  SUN</td>
                              <td
                                  style={{fontSize:"14px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 5px 8px 5px", textAlign:"center", width:"14%", border:"1px solid #bababa"}}>
                                  MON</td>
                              <td
                                  style={{fontSize:"14px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 5px 8px 5px", textAlign:"center", width:"14%", border:"1px solid #bababa"}}>
                                  TUE</td>
                              <td
                                  style={{fontSize:"14px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 5px 8px 5px", textAlign:"center", width:"14%", border:"1px solid #bababa"}}>
                                  WED</td>
                              <td
                                  style={{fontSize:"14px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 5px 8px 5px", textAlign:"center", width:"14%", border:"1px solid #bababa"}}>
                                  THU</td>
                              <td
                                  style={{fontSize:"14px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 5px 8px 5px", textAlign:"center", width:"14%", border:"1px solid #bababa"}}>
                                  FRI</td>
                              <td
                                  style={{fontSize:"14px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 5px 8px 5px", textAlign:"center", width:"14%", border:"1px solid #bababa"}}>
                                  SAT</td>
                          </tr>
                          <tr>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top"></td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top"></td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px"}}>Jan 28</span><br />
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor:"#e1bee7"}}>
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                    </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px"}}>Jan 29</span><br />
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor:"#bbdefb"}}>
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px"}}>Jan 30</span><br />
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor:"#ffffff"}}>
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px"}}>Jan 31</span><br /><a
                                      style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                      href="https://tickets.denvercenter.org/">7:30pm</a>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px"}}>Feb 1</span><br />
                                  <a
                                      style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                      href="https://tickets.denvercenter.org/">2:00pm</a>
                                      <br />
                                  <a
                                      style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                      href="https://tickets.denvercenter.org/">7:30pm</a>
                              </td>
                          </tr>
                          <tr>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px", padding:"0px 0px 0px 4px"}}>Feb 2</span><br />
                                  <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase", padding:"0px 0px 0px 4px"}}
                                      href="https://tickets.denvercenter.org/">2:00pm</a><br />
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor: "#ffffff", backgroundColor: "#bbdefb"}}>
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px", padding:"0px 0px 0px 4px"}}>Feb 3</span>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px", padding:"0px 0px 0px 4px"}}>Feb 4</span>
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor:"#bbdefb"}}>
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/Online/">7:30pm</a>
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px", padding:"0px 0px 0px 4px"}}>Feb 5</span><br />
                                  <div style={{padding:"3px 0px 3px 4px", backgroundColor: "#bbdefb", width:"94%"}}>
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px", padding:"0px 0px 0px 4px"}}>Feb 6</span><br />
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor:"#bbdefb"}}>
                                      
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px", padding:"0px 0px 0px 4px"}}>Feb 7</span><br />
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px"}}>
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px"}}>Feb 8</span><br /><a
                                      style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                      href="https://tickets.denvercenter.org/">2:00pm</a><br /><a
                                      style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                      href="https://tickets.denvercenter.org/">7:30pm</a>
                              </td>
                          </tr>
                          <tr>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                                  <span style={{fontWeight:"bold", fontSize:"14px", padding:"0px 0px 0px 4px"}}>Feb 9</span><br />
                                  <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor:"#e1bee7"}}>
                                  <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform: "uppercase", padding:"0px 0px 0px 4px"}}
                                      href="https://tickets.denvercenter.org/">2:00pm</a>
                                  </div>
                                      
                                      <div style={{width:"94%", padding:"3px 0px 3px 4px", backgroundColor:"#e1bee7"}}>
                                      
                                      <a style={{color:"#747474", textDecoration:"none", fontWeight:"normal", textTransform:"uppercase"}}
                                          href="https://tickets.denvercenter.org/">7:30pm</a>
                                      
                                  </div>
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 0px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top">
                              </td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top"></td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top"></td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top"></td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top"></td>
                              <td style={{fontSize:"16px", fontWeight:"normal", lineHeight:"1.2em", fontFamily:"Arial, Helvetica, sans-serif", color:"#747474", padding:"8px 0px 8px 4px", textAlign:"left", width:"14%", verticalAlign:"top", border:"1px solid #bababa"}}
                                  valign="top"></td>
                           
                          </tr>
                      </table>
                      <table style={{border:"0px solid #747474", padding:"10px"}} cellspacing="0" cellpadding="0"
                          border="0" width="100%">
                          <tr>
                              <td align="center">
                                  <table cellspacing="0" cellpadding="0" border="0">
                                      <tr>
                                          <td
                                              style={{display: "inline", width: "40%", padding:"0px 20px 0px 0px", color:"#747474"}}>
                                              <div
                                                  style={{width:"25px", height:"25px", backgroundColor: "#ffffff", border: "solid #bababa 1px", display: "inline-block", verticalAlign: "middle"}}>
                                              </div>&nbsp;Good Availability
                                          </td>
                                          <td
                                              style={{display: "inline", width: "40%", padding:"0px 20px 0px 0px", color:"#747474"}}>
                                            <div
                                                style={{width:"25px", height:"25px", backgroundColor: "#bbdefb", border: "solid #bbdefb 1px", display: "inline-block", verticalAlign: "middle"}}>
                                              </div>&nbsp;Great Availability
                                          </td>
                                          <td
                                              style={{display: "inline", width: "40%", padding:"0px 20px 0px 0px", color:"#747474"}}>
                                              <div
                                                     style={{width:"25px", height:"25px", backgroundColor: "#e1bee7", border: "solid #e1bee7 1px", display: "inline-block", verticalAlign: "middle"}}>
                                              </div>&nbsp;Best Availability
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
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