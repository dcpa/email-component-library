import React from "react";

import { Jumbotron } from "reactstrap";

const HomeJumbo = (props) => {
    return (
        <Jumbotron style={{backgroundColor: "#2F4F4F"}}>
                        
                            <h1 className="display-3">The Library of Email Components</h1>
                            <p>
                                This library has been created as a resource for the Creative Services Team at the Denver Center for the Performing Arts and their Marketing Partners. 
                            </p>
                            <p>
                                We have broken down our many different types of emails into their "component" parts - the smallest, whole unit of an e-mail and catalogued them here. 
                            </p>
                            <p>
                                This way, designers, partners, and anyone hoping to utilize the emails here at the DCPA can easily look through tried-and-true email components they can use to best convey information/images. 
                                These components have been tested and render correctly across as many as 31 different email clients.
                            </p>
                            <p>
                                On this home page, we will post any updates - like new components! So check back in regularly.
                            </p>
                            <p>
                                Thanks! 
                                <br />
                                &mdash; Rachel Garn &amp; Jacq Glover
                            </p>
                    </Jumbotron>
    )
}

export default HomeJumbo;