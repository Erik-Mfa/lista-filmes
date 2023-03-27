import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

const filmes = [{
    "nome": "Vingadores",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2010,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
  },
  {
    "nome": "Vingadores 2",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2014,
    "assistido": true,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
  },
  {
    "nome": "Vingadores 3",
    "duracao": "2H30",
    "foto": "vingadores.png",
    "ano": 2015,
    "assistido": false,
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
  }
  ]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div className="container text-center">
            <Title
                title={"Detalhes"}
                text="" />               
            <p>Filme: {filme}</p>
            {(() => {
                if (filme == 'Vingadores') {
                    return (
                        <div>
                            <p>{filmes[0].nome}</p>
                            <p>{filmes[0].duracao}</p>
                            <p>{filmes[0].foto}</p>
                            <p>{filmes[0].ano}</p>
                            <p>{filmes[0].assistido}</p>
                            <p>{filmes[0].genero}</p>
                            <p>{filmes[0].descricao}</p>
                            <p>{filmes[0].nota}</p>
                        </div>
                    )
                } else if (filme == 'Vingadores 2') {
                    return (
                        <div>
                            <p>{filmes[1].nome}</p>
                            <p>{filmes[1].duracao}</p>
                            <p>{filmes[1].foto}</p>
                            <p>{filmes[1].ano}</p>
                            <p>{filmes[1].assistido}</p>
                            <p>{filmes[1].genero}</p>
                            <p>{filmes[1].descricao}</p>
                            <p>{filmes[1].nota}</p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>{filmes[2].nome}</p>
                            <p>{filmes[2].duracao}</p>
                            <p>{filmes[2].foto}</p>
                            <p>{filmes[2].ano}</p>
                            <p>{filmes[2].assistido}</p>
                            <p>{filmes[2].genero}</p>
                            <p>{filmes[2].descricao}</p>
                            <p>{filmes[2].nota}</p>
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default Detalhes;