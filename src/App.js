import React, { Components } from 'react';
import 'animate.css';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cardapio from "./Components/Cardapio";
import QuemSomos from "./Components/QuemSomos";
import Galery from "./Components/Galery";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";

function App() {

    return (
        <>
            <Navbar />
            <Home />
            <Cardapio />
            <QuemSomos />
            <Galery />
            <Contato />
            <Footer/>
        </>
    );
}

export default App;