import React, {useState} from "react";
import passagens from "../data/passagens";
import "./CardPassagens.css"
import formatDate from "../functions/date";

export default function CardPassagens (props) {
    let [passagens_disponiveis, setDisponiveis] = useState(props.quantidade_passagens - props.quantidade_reservada);

    let endereco = props.id - 1;
    function ReservaPassagem () {
        if(passagens[endereco].quantidadeReservada === passagens[endereco].quantidadePassagens) {
            alert('O voo já está 100% ocupado');
        }
        else {
            passagens[endereco].quantidadeReservada++;
            console.log(passagens);

            setDisponiveis(passagens[endereco].quantidadePassagens - passagens[endereco].quantidadeReservada)
      }
    }

    function CancelarPassagem () {
        if(passagens[endereco].quantidadeReservada === 0) {
            alert('Não há reservas para esse voo');
        }
        else {
            passagens[endereco].quantidadeReservada--;
            console.log(passagens);

            setDisponiveis(passagens[endereco].quantidadePassagens - passagens[endereco].quantidadeReservada)
      }
    }

    function Botao() {
        let dataAtual = new Date()
        let diaAtual = dataAtual.getDate()
        let mesAtual = dataAtual.getMonth()
        let anoAtual = dataAtual.getFullYear()
        let diaPassagem = passagens[endereco].saida.getDate()
        let mesPassagem = passagens[endereco].saida.getMonth()
        let anoPassagem = passagens[endereco].saida.getFullYear()
        if ((diaAtual > diaPassagem && mesAtual === mesPassagem && anoAtual === anoPassagem) || (mesAtual > mesPassagem && anoAtual === anoPassagem) || (anoAtual > anoPassagem)) {
            return (
                <div className="Botoes">
                <button className="Decolou" type="button">Já decolou!</button>
            </div>
            
            )
        }

        else {
            return     ( 
                 <div className="Botoes">
                    <button className="Cancelar" type="button" onClick={CancelarPassagem}>Cancelar</button>
                    <button className="Reservar" type="button" onClick={ReservaPassagem}> Reservar</button>
                </div>
            )
        }
    }

    return (
                <div className="Passagem">
                    <div className="Titulo">&#x2708; {props.destino} </div>
                    <p className="Origem">{props.id} - Saindo de {props.origem}</p>
             
                    <div className="Totais">
                        <p className="pTotais">Passagens Totais</p>
                        <p className="qTotais">{props.quantidade_passagens}</p>
                    </div>

                    <div className="Disponiveis">
                        <p className="pDisponiveis">Passagens Disponíveis</p>
                        <p className="qDisponiveis">{passagens_disponiveis}</p>
                    </div>

                    <div className="Saida">
                        <p className="pSaida">Data Saída</p>
                        <p className="hSaida">{formatDate(props.saida)}</p>
                    </div>
                    <div className="Chegada">
                        <p className="pChegada">Data Chegada</p>
                        <p className="hChegada">{formatDate(props.chegada)}</p>
                    </div>
                    {Botao()}
                </div>

        )
}

