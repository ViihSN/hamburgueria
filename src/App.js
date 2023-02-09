import React, { Components } from 'react';
import 'animate.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cardapio from "./Components/Cardapio";
import QuemSomos from "./Components/QuemSomos";
import Galery from "./Components/Galery";


function App() {

    return (
        <>
            <Navbar />
            <Home />
            <Cardapio />
            <QuemSomos />
            <Galery />
        </>
    );
}

export default App;