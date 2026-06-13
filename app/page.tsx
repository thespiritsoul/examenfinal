import Ficha from "@/components/Ficha";

export default function Home() {
  return (
    <div className="main">
      <div className="cabecera">
        <div className="titulo">
          Exercícios
        </div>
        <div className="num">
          4
        </div>
      </div>
      <Ficha lin="imagen1.jpg" tit="Puxada frontal" cue="3 séries x 12 repetições"></Ficha>      
      <Ficha lin="imagen2.png" tit="Remada curvada" cue="3 séries x 12 repetições"></Ficha>      
      <Ficha lin="imagen3.png" tit="Remada unilateral" cue="3 séries x 12 repetições"></Ficha>      
      <Ficha lin="imagen4.png" tit="Levantamento terra" cue="3 séries x 12 repetições"></Ficha>      
    </div>
  )
}