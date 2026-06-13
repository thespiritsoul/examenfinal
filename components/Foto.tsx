import Image from "next/image"

const Foto = ({lin}:{lin:string}) => {
  return (
      <Image className="object-cover aspect-square" src={`/${lin}`} alt={lin} width={67} height={67}/>
  )
}

export default Foto;