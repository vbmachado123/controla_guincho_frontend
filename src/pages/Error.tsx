import errorGif from '../assets/error_animation.gif';
import { Header } from '../components/Header';
export function Error() {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header currentPage={'dashboard'}/>
            <div className='items-center flex flex-col mt-20'>
                <img src={errorGif} className='w-1/4'/>
                <h4 className='text-green-500 font-bold'>Página não encontrada</h4>
            </div>
        </div>
        
        
    );
}