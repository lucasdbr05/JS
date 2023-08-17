import React, {Fragment, useState, useEffect} from "react";
import Planet from "./planet";
import Form from "./form";

const ClickOnPlanet = () =>{
    console.log("Um click no planeta!")
}

async function getPlanet(){
    let response = await fetch("http://localhost:3000/api/planets.json")
    let data = await response.json();
    return data;
}

const Planets=()=>{
    
    const [planets, setPlanets] = useState([])
    
    useEffect(()=>{
        getPlanet().then(data=> {
            setPlanets(data['planets'])
        }) 
    }, [])

    const addPlanet = (new_planet)=>{
        setPlanets([...planets, new_planet])
    }

    const removeLast = ()=>{
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(state=>({
            planets: new_planets
        }))
    }
    
    
        return (
        <Fragment>
            <h3>Planets</h3>
            
            <hr/>

            <Form addPlanet={addPlanet}/>
            <hr/>
            <button onClick={removeLast}>Remove Last</button>
            {planets.map((planet)=>
                <Planet
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    id={planet.id}
                />
                )
            }
        </Fragment>
        )
    
}
    



export default Planets;