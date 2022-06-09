
import { IconType } from 'react-icons';
import { MdHome, MdGroup, MdWork, MdMail } from 'react-icons/md';

interface HeaderItemProps {
    title: string;
    href: string;
    icon?: string;
    active: boolean;
}

export function HeaderItem({ title, href, icon, active, }: HeaderItemProps) {

 function getIcon() {
    switch(icon) {
        case 'home':
            return <MdHome className='h-5 w-5 ml-3'/>;
        case 'group':
            return <MdGroup className='h-5 w-5 ml-3'/>;
        case 'work':
            return <MdWork className='h-5 w-5 ml-3'/>;
        case 'contact':
            return <MdMail className='h-5 w-5 ml-3'/>;
        default:
            return <MdHome className='h-5 w-5 ml-3'/>;
    }
}

    return (
        <a href={href} className='pointer '>
            <div className={active  === true 
            ? 'flex flex-row transition duration-500 ease-in-out transform text-green-600 hover:underline-offset-4 hover:underline' 
            : 'flex flex-row transition duration-500 ease-in-out transform text-slate-800 hover:underline-offset-4 hover:underline'}>
{/*                    
                   {
                        getIcon()
                   } */}
                    
                    <p className='mx-2 text-sm font-bold'>{title}</p>
            </div>
        </a>
    );
}
