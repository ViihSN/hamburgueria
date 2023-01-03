import React, { Component } from 'react';
import 'animate.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Section1 from "./Components/Section1";


function App() {

    return(
        <>
           <Navbar/>
           <Home/>
           <Section1/>
        </>
    );
}

export default App;