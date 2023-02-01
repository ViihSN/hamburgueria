import React, { Component } from 'react';
import 'animate.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Galery from "./Components/Galery";

function App() {

    return(
        <>
           <Navbar/>
           <Home/>
           <Section1/>
           <Section2/>
           <Galery/>
        </>
    );
}

export default App;