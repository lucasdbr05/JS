import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PlanetScreen from "./screens/planets";

const Screen =()=>{
    <BrowserRouter>
        <Routes>
            <Route exact path="/" component={PlanetScreen}/>
        </Routes>
    </BrowserRouter>
}
export default Screen;