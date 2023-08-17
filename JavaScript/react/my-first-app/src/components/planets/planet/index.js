import React, {useEffect, useState} from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";
import Form from "./form";

async function getSatellites(id){
    let satelities = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await satelities.json()
    return data;
}


const Planet=(props)=>{
    const [satellites, setSatellites] = useState([ ])

    useEffect(()=>{
        getSatellites(props.id).then(data=>{
         setSatellites(data["satellites"])
        }) 
     })

     const addSatellite =(new_satellite)=>{
        setSatellites([...satellites, new_satellite])
     }

     return(
         <div>
             <h4>{props.name}</h4>
            <br/>


             <DescriptionWithLink 
                 description={props.description} 
                 link={props.link}
             />
             <br></br>
             <GrayImg img_url={props.img_url}/>
             <h4>Satelites</h4>
            <Form addSatellite={addSatellite}/>
            <br/>
             <ul>
                 {satellites.map((satellite, index)=>
                     <li key= {index}>{satellite.name}</li>
                 )}
     
             </ul>
             <hr/>
         </div>
     )
}


    

    




export default Planet;