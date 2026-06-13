import stycuerpo from '@/components/cuerpo.module.css'

const Cuerpo = ({tit,cue}:{tit:string,cue:string}) => {
  return (
    <div className={stycuerpo.cont}>
      <div className={stycuerpo.tit}>{tit}</div>
      <div className={stycuerpo.cue}>{cue}</div>
    </div>
  )
}

export default Cuerpo