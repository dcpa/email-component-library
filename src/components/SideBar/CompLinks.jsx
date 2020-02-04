import React from "react";


const CompLink = ( props ) => {
    return (
        <span onClick={ () => props.clickAction(props.componentName) } value={ props.componentName }>{ props.componentName }</span>
    )
}

export default CompLink;