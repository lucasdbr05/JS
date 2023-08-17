import React, {Fragment} from "react";


const DescriptionWithLink = (props)=>{
    if (props.link){
        return (
        <Fragment>
            <p>{props.description}</p>
            <a href={props.link}>{props.link}</a>
        </Fragment>
        )
    } else{
        return (
        <Fragment>
            <p>{props.description}</p>
        </Fragment>
        )

    }
}

export default DescriptionWithLink;