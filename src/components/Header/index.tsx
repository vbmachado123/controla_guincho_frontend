// import logo from '../../assets/logo_mentore.svg';
import { GiTowTruck } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { HeaderItem } from './Header_item'

interface HeaderProps {
  currentPage: string
}
export function Header({ currentPage }: HeaderProps) {
  var homeSelected = false,
    atendimentoSelected = false,
    despesasSelected = false,
    profissionaisSelected = false,
    veiculosSelected = false,
    conta_correnteSelected = false
  switch (currentPage) {
    case 'home':
      homeSelected = true
      break
    case 'atendimento':
      atendimentoSelected = true
      break
    case 'despesas':
      despesasSelected = true
      break
    case 'profissionais':
      profissionaisSelected = true
      break
    case 'veiculos':
      veiculosSelected = true
      break
    case 'conta-corrente':
      conta_correnteSelected = true
      break
    default:
      homeSelected = true
      break
  }

  return (
    <nav
      className="fixed top-0 left-0 flex justify-between content-between items-center px-24 py-6
            bg-slate-200 w-screen space-x-4 text-white shadow-2xl">
    
      <Link to="/" aria-invalid={true}>
        {/* <img src={logo} alt="Logo Mentore Tech" className='y-1 x-1'/> */}
        <div className="text-green-500 flex flex-row items-center font-bold hover:text-blue-900 transition-all transition cursor-pointer ease-in">
          <GiTowTruck size={26} className="hover:to-blue-900" />
          <p className="pl-4">Controla Guincho</p>
        </div>
      </Link>


      <div className="flex flex-row justify-between w-content origin-center items-center">
        <Link to={'/'} aria-invalid={true}>
          <HeaderItem title={'Dashboard'} icon={'dashboard'} active={homeSelected} />
        </Link>

        <Link to={'/list/attendance'} aria-invalid={true}>
          <HeaderItem title={'Atendimentos'} icon={'assignment'} active={atendimentoSelected} />
        </Link>

        <Link to={'/list/professional'} aria-invalid={true}>
          <HeaderItem title={'Profissionais'} icon={'professional'} active={profissionaisSelected} />
        </Link>

        <Link to={'/list/vehicle'} aria-invalid={true}>
          <HeaderItem title={'Veículos'} icon={'vehicle'} active={veiculosSelected} />
        </Link>

        <Link to={'/list/checking_account'} aria-invalid={true}>
          <HeaderItem title={'Conta Corrente'} icon={'checking_account'} active={conta_correnteSelected} />
        </Link>

      </div>

      <a href="/login">
        {' '}
        <p className="text-slate-800">
          Olá, <span className="text-green-600 font-semibold">admin</span>
        </p>
      </a>
    </nav>
  )
}
