const planos = [{
  "nome": "Plano 1",
  "valor": "25$"

},
{
  "nome": "Plano 2",
  "valor": "50$"
},
{
  "nome": "Plano 3",
  "valor": "100$",
}
]

export default function Planos() {
  return (
    
    <div className="container text-center">
      <div class="row">
        {planos.map((plano, i) => (
          <div className="col" key={i.toString()}>
            <div className="card">
            <h1 className="card-title m-2">{plano.nome}</h1>
              <div className="card-body">
                <hr className="mt-0"></hr>
                <h4 className="card-text">{plano.valor}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}