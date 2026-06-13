import styFicha from '@/components/Ficha.module.css'
import Foto from '@/components/Foto'
import Cuerpo from '@/components/Cuerpo'
import Icono from '@/components/Icono'

const Ficha = ({tit,cue,lin}:{lin:string,tit:string,cue:string}) => {
  return (
    <div className={styFicha.cont}>
        <Foto lin={lin}></Foto>
        <Cuerpo tit={tit} cue={cue}></Cuerpo>
        <Icono></Icono>
    </div>
  )
}

export default Ficha