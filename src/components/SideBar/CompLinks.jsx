import React from "react";


const CompLink = ( props ) => {
    return (
        <div className="sideBarLink" onClick={ () => props.clickAction(props.componentName) } value={ props.componentName }>{ props.componentName }</div>
    )
}

export default CompLink;