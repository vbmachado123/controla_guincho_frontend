import { GiTowTruck } from 'react-icons/gi'
import { MdHome, MdGroup, MdWork, MdMail, MdAccountBalanceWallet, MdDashboard, MdSupervisorAccount, MdAssignment } from 'react-icons/md'

interface HeaderItemProps {
  title: string
  href?: string
  icon?: string
  active: boolean
}

export function HeaderItem({ title, href, icon, active }: HeaderItemProps) {
  function getIcon() {
    switch (icon) {
      case 'dashboard' :
        return <MdDashboard className="h-5 w-5 " />
      case 'assignment' :
        return <MdAssignment className="h-5 w-5 ml-3" />
      case 'professional' :
        return <MdSupervisorAccount className="h-5 w-5 ml-3"/>
      case 'vehicle':
        return <GiTowTruck className="h-5 w-5 ml-3"/>
      case 'checking_account' :
        return <MdAccountBalanceWallet className="h-5 w-5 ml-3"/>
      case 'home':
        return <MdHome className="h-5 w-5 " />
      // case 'group':
      //   return <MdGroup className="h-5 w-5 ml-3" />
      // case 'work':
      //   return <MdWork className="h-5 w-5 ml-3" />
      // case 'contact':
      //   return <MdMail className="h-5 w-5 ml-3" />
      
      default:
        return <MdHome className="h-5 w-5 ml-3" />
    }
  }

  return (
    <div
      className={
        active === true
          ? 'flex flex-row transition duration-500 ease-in-out transform text-green-600 hover:underline-offset-4 hover:underline cursor-pointer '
          : 'flex flex-row transition duration-500 ease-in-out transform text-slate-800 hover:underline-offset-4 hover:underline cursor-pointer '
      }
    >
                         
      {
        getIcon()
      }

      <p className="mx-2 text-sm font-bold">{title}</p>
    </div>
  )
}
