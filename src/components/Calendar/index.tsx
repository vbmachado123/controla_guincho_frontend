import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { CalendarModal } from './CalendarModal';

interface CalendarProps {
    date: Date;
    setDate: (date: Date) => void;
}

export const Calendar = ({ date, setDate }: CalendarProps) => {
    const [modal, setModal] = useState<boolean>(false);
    const formatDate = () => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className='flex flex-col pb-2'>
            <label htmlFor='calendar' className='text-blue-900 text-sm'>Data do atendimento</label>
            <div id='calendar' className='flex flex-row w-full h-10 bg-white text-center px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y'>
                <div>
                    {formatDate()}
                </div>

                <div className='h-full text-center flex items-center justify-center px-4'>
                    <button onClick={(e) => { e.preventDefault(); setModal(!modal) }} className='text-blue-900'>
                        <AiOutlineCalendar />
                    </button>
                </div>
            </div>

            <CalendarModal modal={modal} setModal={setModal} date={date} setDate={setDate} />
        </div>
    );
}