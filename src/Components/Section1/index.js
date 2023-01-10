import "./section1.css";
import Bacon from "../../assets/images/img-lanches/foto1.png";
import Cogumelo from "../../assets/images/img-lanches/foto2.png";
import Malagueta from "../../assets/images/img-lanches/foto3.png";
import { BiFoodMenu } from 'react-icons/bi';


export default function Section1() {

    return(
        <section id="sessao1">
            <div className="text-center">
                <h1><BiFoodMenu color="red"/>Cardápio</h1>
            </div>
        
        <div className="row d-flex justify-content-center">
            <div className="card" onClick={() => this.classList.toggle('expanded')} alt="...">
               <img src={Bacon}/>
               <div className="text1">
                    <div className="text-content">
                     <h1 className="title">V-BACON</h1>
                    <div className="body-text">
                        Ingredientes: <br/>Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                        
                    </div>
                  </div>
               </div>
               <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
            </div>
            <div className="card" onClick={() => this.classList.toggle('expanded')} alt="...">
               <img src={Cogumelo}/>
               <div className="text1">
                    <div className="text-content">
                     <h1 className="title">V-COGUMELO</h1>
                    <div className="body-text">
                        Ingredientes: <br/>Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                        
                    </div>
                  </div>
               </div>
               <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
            </div>
            <div className="card" onClick={() => this.classList.toggle('expanded')} alt="...">
               <img src={Malagueta}/>
               <div className="text1">
                    <div className="text-content">
                     <h1 className="title">V-MALAGUETA</h1>
                    <div className="body-text">
                        Ingredientes: <br/>Pão-duas Carnes-Bacon-Queijo Cheddar-Picles.
                        
                    </div>
                  </div>
               </div>
               <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
            </div>
        </div>

        </section>
    )
}

