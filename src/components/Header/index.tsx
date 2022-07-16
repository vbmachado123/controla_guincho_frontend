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
            bg-slate-200 w-screen space-x-4 text-white shadow-2xl"
    >
      <a href="/">
        {/* <img src={logo} alt="Logo Mentore Tech" className='y-1 x-1'/> */}
        <div className="text-green-500 flex flex-row items-center font-bold hover:text-blue-900 transition-all transition cursor-pointer ease-in">
          <GiTowTruck size={26} className="hover:to-blue-900" />
          <p className="pl-4">Controla Guincho</p>
        </div>
      </a>

      <div className="flex flex-row justify-between w-content origin-center items-center">
        <Link to={'/'}>
          <HeaderItem title={'Dashboard'} active={homeSelected} />
        </Link>
        {/* 
                  <HeaderItem title={'Quem Somos?'} 
            href={'/#about'} icon={'group'} active={aboutSelected}/> */}
        <Link to={'/list/attendance'}>
          <HeaderItem title={'Atendimentos'} active={atendimentoSelected} />
        </Link>

        {/* <HeaderItem title={'Despesas'} 
            href={'/list'} active={despesasSelected}/> */}
        <Link to={'/list/professional'}>
          <HeaderItem title={'Profissionais'} active={profissionaisSelected} />
        </Link>

        <Link to={'/list/vehicle'}>
          <HeaderItem title={'Veículos'} active={veiculosSelected} />
        </Link>

        <HeaderItem
          title={'Conta Corrente'}
          href={'/list/checking_account'}
          active={conta_correnteSelected}
        />
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
