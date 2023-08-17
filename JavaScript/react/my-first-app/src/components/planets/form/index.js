import React, {Fragment, useState} from "react";

const initialState = {
    name:'',
    description:'',
    link:'',
    img_url:''
}


const Form = (props)=>{
    const [fields, setFields] = useState(initialState)

    const handleFieldsChange= (e)=>setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    })
    const handleSubmit= (event)=>{
        props.addPlanet(fields)
        event.preventDefault()
        setFields(initialState)
    }


    
    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={fields.name} onChange={handleFieldsChange}/>
                    <br/>
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" value={fields.description} onChange={handleFieldsChange}/>
                    <br/>
                    <label htmlFor="description">Link:</label>
                    <input type="text" name="link" id="link" value={fields.link} onChange={handleFieldsChange}/>
                    <br/>
                    <label htmlFor="img_url">Imagem: </label>
                    <input type="file" name="img_url" id="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                    <br/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}
export default Form;