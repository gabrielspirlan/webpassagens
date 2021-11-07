import React from 'react';
import passagens from '../data/passagens'
import CardPassagens from './CardPassagens';
import './TodasPassagens.css'

export default function TodasPassagens() {
  const passagem = passagens.map( 
      (p, i) => (
        <CardPassagens destino={p.destino} origem={p.origem} quantidade_passagens={p.quantidadePassagens} quantidade_reservada={p.quantidadeReservada} saida={p.saida} chegada={p.chegada} id={p.id}/>
    )  
  )
  return (
    <div className="TodasPassagens">
         
      {passagem}
    </div>
  );
}