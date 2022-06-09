// import logo from '../../assets/logo_mentore.svg';
import { GiTowTruck } from 'react-icons/gi';
import { HeaderItem } from './Header_item';

interface HeaderProps {
    currentPage: string;
}
export function Header({currentPage}: HeaderProps) {
    var homeSelected = false, atendimentoSelected = false, 
    despesasSelected = false, profissionaisSelected = false, 
    veiculosSelected = false, conta_correnteSelected = false;
    switch(currentPage) {
        case 'home':
            homeSelected = true;
            break;
        case 'atendimento':
            atendimentoSelected = true;
            break;
        case 'despesas':
            despesasSelected = true;
            break;
        case 'profissionais':
            profissionaisSelected = true;
            break;
        case 'veiculos':
            veiculosSelected = true;
            break;
        case 'conta-corrente':
            conta_correnteSelected = true;
            break;
        default:
            homeSelected = true;
            break;
     }

    return(
        <nav
            className="fixed top-0 left-0 flex justify-between items-center px-24 py-6
            bg-slate-200 w-screen	space-x-4 text-white shadow-2xl">

        <a href="/">   
          {/* <img src={logo} alt="Logo Mentore Tech" className='y-1 x-1'/> */}
          <div className='text-green-500 flex flex-row items-center font-bold hover:text-green-600 transition-all transition'>
              <GiTowTruck size={26}/>
              <p className='pl-4'>Controla Guincho</p>
          </div>
        </a> 
      
        <div className="flex flex-row space-between mx-2 items-center">
            <HeaderItem title={'Dashboard'} 
           href={'/'} active={homeSelected}/>
{/* 
                  <HeaderItem title={'Quem Somos?'} 
            href={'/#about'} icon={'group'} active={aboutSelected}/> */}

                  <HeaderItem title={'Atendimentos'} 
           href={'/list'} active={atendimentoSelected}/>

                  <HeaderItem title={'Despesas'} 
            href={'/list'} active={despesasSelected}/>

                  <HeaderItem title={'Profissionais'} 
            href={'/list'} active={profissionaisSelected}/>

                  <HeaderItem title={'Veículos'} 
            href={'/list'} active={veiculosSelected}/>

                  <HeaderItem title={'Conta Corrente'} 
            href={'/list'} active={conta_correnteSelected}/>
            </div>
            <p className='text-slate-800'>Olá, <span className='text-green-600 font-semibold'>admin</span></p>
        </nav>
    );
}