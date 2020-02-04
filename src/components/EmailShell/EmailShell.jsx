import React from "react";
import "EmailShell.css";

export default class EmailShell extends React.Component {

    state = {

    }

    render() {
        return (
            <div style="padding:0; margin:0; background-color:#F5F5F5;">

                <div style="max-width:600px;margin:0 auto; background-color:#F5F5F5;">
                    <table cellspacing="0" padding="0" border="0" width="600" role="presentation" bgcolor="#FFFFFF">
                        <tr>
                            <td align="center">
                                <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td align="center" bgcolor="#FFFFFF" class="inner-padding" style="padding: 0px 0px 0px 0px; text-align: center;  line-height: 1.4em;">
                                            <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="text-align: center;  font-family:  Montserrat, sans-serif; display: inline-table;" width="100%">
                                                <tr>
                                                    <td style="text-align:left; line-height:1.2em; font-size:10px; vertical-align:top; color:#FFFFFF; text-align:center;">`pv` </td>
                                                </tr>
                                            </table>
                                            <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td>
                                                        <div style="display:inline-block; vertical-align:top; width:100%;">
                                                            <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" align="left" style="max-width:100px;">
                                                                <tr>
                                                                    <td style="padding:0px 0px 0px 20px; font-size:30px;">

                                                                        <a href="https://www.denvercenter.org/tickets-events/?utm_source=yesmail&utm_medium=email&utm_campaign=primary-logo"><img src="https://storage.googleapis.com/dcpa-email-images/200x64-DCPA-logo-primary.png" alt="DENVER CENTER FOR THE PERFORMING ARTS" style="color:#000000; font-size:14px; line-height:1.2em; text-align:left; font-family: 'Open Sans', sans-serif; border:0px;" /></a>

                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <tr>
                        <td>


                            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                                <tr>
                                    <td align="center" style="padding:0px 0px 10px 0px; border-bottom:7px solid `headerColor`;">
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>


                    <table cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF">
                        <tr>
                            <td>
                                <img class="img-scale" src="https://storage.googleapis.com/dcpa-email-images/600x225-fpo.jpg" alt="" style="border:0px;" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px 20px 0px 20px; text-align:left;">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF">
                                    <tr>
                                        <td style="font-size:24px; line-height:1.2em; font-family:Arial, Helvetica, sans-serif; color:#005775; font-weight:bold; text-align:center;">Headline Here</td>
                                    </tr>
                                    <tr>
                                        <td style="font-size:20px; line-height:1.2em; font-family:Arial, Helvetica, sans-serif; color:#47B9C7; font-weight:bold; text-align:center;">
                                            Sub-headline Here
            <br /><br /><hr style="height:2px; border-width:0; color:#F6F6F6; background-color:#F6F6F6; width:100%; padding:0px; margin:0px;" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="font-size:16px; font-weight:normal; line-height:1.2em; font-family:Arial, Helvetica, sans-serif; color:#747474; padding:10px 0px 0px 0px; text-align:center;">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio impedit maiores voluptates aut ducimus nam modi itaque libero illo laudantium, quisquam quibusdam, commodi alias id! Debitis non illum delectus id!
          </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding:30px 20px 25px 20px;">
                                            <table cellpadding="0" cellspacing="0" border="0" id="full">
                                                <tr>
                                                    {this.props.cta}
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                </table>
                            </td>
                        </tr>
                    </table>

                    <div style="background-color:#005776;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF" style="background: #005776;">
                            <tr>
                                <td>
                                    <div style="display:inline-block; vertical-align:top; width:100%;">
                                        <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" align="left" style=" max-width: 300px; background: #005776;">
                                            <tr>
                                                <td style="font-size:16px; font-weight:900; text-transform: uppercase; text-align: left; line-height:1.2em; color:#ffffff; font-family: Montserrat, sans-serif; padding:28px 20px 0px 20px;">
                                                    BOX OFFICE: <a style="text-decoration: none; color: #ffffff;" href="tel:3038934100">303.893.4100</a>
                                                </td>
                                            </tr>
                                        </table>
                                        <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" align="right" style="background: #005776;" id="hideonmobile">
                                            <tr>
                                                <td style="padding:16px 20px 0px 20px; font-size:16px; text-align: right; display: inline-flex;">
                                                    <a href="https://www.facebook.com/DenverCenter/"><img src="https://storage.googleapis.com/dcpa-email-images/SM-facebook-white-email.png" alt="Facebook" style="color:#ffffff; font-size:14px; line-height:1.2em; text-align:center; font-family: 'Open Sans', sans-serif; border:0px; padding: 0px 5px 5px 5px;" /></a>
                                                    <br id="showonmobile" /> <a href="https://twitter.com/denvercenter"><img src="https://storage.googleapis.com/dcpa-email-images/SM-twitter-white-email.png" alt="Twitter" style="color:#ffffff; font-size:14px; line-height:1.2em; text-align:center; font-family: 'Open Sans', sans-serif; border:0px; padding: 0px 5px 5px 5px;" /></a>

                                                    <br id="showonmobile" /> <a href="https://www.instagram.com/denvercenter/"><img src="https://storage.googleapis.com/dcpa-email-images/SM-instagram-white-email.png" alt="Instagram" style="color:#ffffff; font-size:14px; line-height:1.2em; text-align:center; font-family: 'Open Sans', sans-serif; border:0px; padding: 0px 5px 5px 5px;" /></a>

                                                    <br id="showonmobile" /> <a href="https://www.youtube.com/denvercenter"><img src="https://storage.googleapis.com/dcpa-email-images/SM-youtube-white-email.png" alt="Youtube" style="color:#ffffff; font-size:14px; line-height:1.2em; text-align:center; font-family: 'Open Sans', sans-serif; border:0px; padding: 0px 5px 5px 5px;" /></a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td style="padding:15px 20px 10px 20px; text-align: center; width: 100%">
                                    <div style="height: 1px; width: 100%; margin: 0px auto; background: #7ac79b;"></div>
                                </td>
                            </tr>
                            <tr>
                                <td style="font-size:16px; line-height:1.2em; color:#ffffff; font-family: Montserrat, sans-serif; font-style: italic; padding: 30px 20px 10px 20px; text-align: center;">
                                    We engage and inspire through the transformative <br /> power of live theatre.
    </td>
                            </tr>
                        </table>
                    </div>
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#005776;">
                        <tr>
                            <td style="height:0px; font-size:12px; line-height:1.2em; padding:20px 0px 20px 0px; text-align:center; color:#FFFFFF;">
                                <span style="font-size:10px; line-height:1.2em; font-family:Arial, Helvetica, sans-serif;">Broadway Season Sponsors</span><br />
                                <br />
                                <img style="display:inline-block; vertical-align:middle;" src="https://storage.googleapis.com/dcpa-email-images/uc-health-logo-white-web.png" alt="uchealth" />&nbsp;&nbsp;<img style="display:inline-block; vertical-align:middle;" alt="United" src="https://storage.googleapis.com/dcpa-email-images/united-logo-white-web.png" />&nbsp;&nbsp;<img style="display:inline-block; vertical-align:middle;" src="https://storage.googleapis.com/dcpa-email-images/SPONSORS/Wht_BMWSkylineLogo%20copy-100x40.png" alt="BMW of Denver Downtown" />
                                <br /> <br />
                                <span style="font-size:10px; line-height:1.2em; font-family:Arial, Helvetica, sans-serif;">Theatre Company Sponsors</span><br />
                                <br />
                                <img style="display:inline-block;" alt="University of Colorado" src="https://storage.googleapis.com/dcpa-email-images/cu-all-campuses-logo-white-web.png" />&nbsp;&nbsp; --><img style="display:inline-block;" alt="Danial L. Ritchie" src="https://storage.googleapis.com/dcpa-email-images/dan-ritchie-logo-white-web.png" />&nbsp;&nbsp;<img style="display:inline-block;" alt="The Shubert Foundation" src="https://storage.googleapis.com/dcpa-email-images/shubert-foundation-logo-white-web.png" />
                                <div style="padding: 20px 0px 0px 0px"></div> <br />
                                <span style="font-size:10px; line-height:1.2em; font-family:Arial, Helvetica, sans-serif;">Additional Sponsors</span><br /><br />
                                <img style="display:inline-block;" alt="SCFD" src="https://storage.googleapis.com/dcpa-email-images/SPONSORS/SCFD/SCFD_new_logo_100x44.png" width="100px" style="width: 100px;" />&nbsp;&nbsp;<img style="display:inline-block;" alt="Denver Post Community" src="https://storage.googleapis.com/dcpa-email-images/denver-post-community-logo-white.png" />&nbsp;&nbsp;<img style="display:inline-block;" alt="CBS4" src="https://storage.googleapis.com/dcpa-email-images/cbs4-logo-white.png" /><br />
                            </td>
                        </tr>
                    </table>
                    <div style="background-color:#005776;">


                        <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#FFFFFF" style="background: #005776;">
                            <tr>
                                <td style="padding:0px 20px 40px 20px; text-align: center; width: 100%">

                                    <a style="color:#ffffff; font-size:10px; line-height: 1.2em; font-family: Arial, sans-serif; text-decoration: none;" href="https://dcpa.formstack.com/forms/marketing_email_unsubscribe?email=`email`&id=`email`&autosubmit=1">Unsubscribe</a>
                                    <p style="color:#ffffff; font-size:10px; line-height: 1.2em; font-family: Arial, sans-serif;">
                                        <a style="color:#ffffff; text-decoration:none;" href="https://www.denvercenter.org/terms-and-conditions/#tab-id-7">Privacy Policy</a><br id="showonmobile" /> <span id="hide">|</span> <a style="color:#ffffff; text-decoration:none;" href="https://www.denvercenter.org/terms-and-conditions/">Terms &amp; Conditions</a><br id="showonmobile" /> <span id="hide">|</span> <a style="color:#ffffff; text-decoration:none;" href="@HTML_PREVIEW_LINK">View Online</a>
                                    </p>
                                    <p style="color:#ffffff; font-size:10px; line-height: 1.2em; font-family: Arial, sans-serif;">
                                        CN: 1234567
                                                                            </p>
                                    <p style="color:#ffffff; font-size:10px; line-height: 1.2em; font-family: Arial, sans-serif;">
                                        ©2019 Denver Center for the Performing Arts | 1101 13th St. Denver, CO 80204<br />
                                        A tax-exempt 501(c)(3) nonprofit organization EIN #<span style="color#CCCCCC;">84-0407760</span>
                                    </p>
                                </td>
                            </tr>
                        </table>

                    </div>


                </div>
            </div>
        )
    }
}