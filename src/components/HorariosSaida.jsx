import React from "react";
import passagens from "../data/passagens";
import "./HorariosSaida.css"

export default function HorarioSaida () {
    let listaPassagens = [];
    let dataAtual = new Date();
    function verificaPassagens() {
        for (let i = 0; i < passagens.length; i++) {
          if(passagens[i].saida.getDate() === dataAtual.getDate() && passagens[i].saida.getMonth() === dataAtual.getMonth() && passagens[i].saida.getFullYear() === dataAtual.getFullYear()) {
              listaPassagens.push(passagens[i]);
          }
        }
    }

    function zeroFill(n) {
        return n < 9 ? `0${n}` : `${n}`;
    }
    
    function horarioEmbarque (date) {
        const h = zeroFill(date.getHours());
        const mi = zeroFill(date.getMinutes());
    
        return `${h}:${mi}h`;
    }
    

    verificaPassagens();
  
    let embarquesHoje = listaPassagens.map((p, i) => (
      <tr className={i % 2 === 0 ? "par" : "impar"}>
            <td>{p.id}</td>
            <td>{p.destino}</td>
            <td>{p.origem}</td>
            <td>{horarioEmbarque(p.saida)}</td>
      </tr>

    ))


    return (
        
        <div className="HorariosSaida">
            <h1>Voos com embarque hoje</h1>
            <table>
                <thead>
                    <th>Voo</th>
                    <th>Destino</th>
                    <th>Origem</th>
                    <th>Embarque</th>
                </thead>
  
                <tbody>
                    {embarquesHoje}
                </tbody>
            </table>
        </div>
    )
}