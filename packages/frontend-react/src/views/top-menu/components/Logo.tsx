
import LogoLeft from '@/assets/imgs/logo-top.png'

export default function Logo() {
  return (
    <div className="p-5px flex items-center">
      <img className="w-40px h-40px mr-15px" src={LogoLeft} alt="" />
      <div className="font-14 p-10px">Gradual Community</div>
    </div>
  )
}
