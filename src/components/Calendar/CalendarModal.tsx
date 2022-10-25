import { useState } from 'react';

interface CalendarModalProps {
    modal: boolean;
    setModal: (modal: boolean) => void;
    date: Date;
    setDate: (date: Date) => void;
}

export const CalendarModal = (props: CalendarModalProps) => {

    const { modal, setModal, date, setDate } = props;

    const [viewDate, setViewDate] = useState(new Date());
    const [isCurrentDay, setIsCurrentDay] = useState(false);

    const handleDateChange = (date: Date) => {
        setDate(date);
        setModal(false);
    };

    const handleModalClose = () => {
        setModal(false);
        setViewDate(date);
    }

    const getDays = () => {
        const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
        const days = Array<any>();
        const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

        for (let i = 0; i < firstDay; i++) {
            days.push('');
        }

        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    }

    const getMonthInText = () => {
        const month = viewDate.getMonth();
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Augosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return months[month];
    }

    return (
        <div className='z-10'>
            {
                modal && (
                    <div className='absolute bottom-0 top-full left-0 h-full flex items-center justify-center p-4'>

                        <div className='bg-white w-96 rounded-lg shadow-lg p-4'>
                            <div className='flex flex-row justify-between items-center mb-2'>
                                <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, viewDate.getDate()))} className='text-blue-900'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className='text-green-700'>
                                    {`${getMonthInText()} de ${viewDate.getFullYear()}`}
                                </div>

                                <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, viewDate.getDate()))} className='text-blue-900'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <button onClick={handleModalClose}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className='grid grid-cols-7 gap-1 text-center place-items-center'>
                                <div className='text-green-700'>DOM</div>
                                <div className='text-green-700'>SEG</div>
                                <div className='text-green-700'>TER</div>
                                <div className='text-green-700'>QUA</div>
                                <div className='text-green-700'>QUI</div>
                                <div className='text-green-700'>SEX</div>
                                <div className='text-green-700'>SAB</div>

                                {
                                    getDays().map((day) => {

                                        const isCurrentDay = () => day === date.getDate() && viewDate.getMonth() === date.getMonth() && viewDate.getFullYear() === date.getFullYear();
                                        
                                        if (day === '') {
                                            return <div className='text-gray-300' key={day}></div>
                                        }

                                        return (
                                            <button
                                                onClick={() => handleDateChange(new Date(viewDate.getFullYear(), viewDate.getMonth(), day as number))}
                                                className={`h-8 w-8 rounded-lg transition duration-300 ${isCurrentDay() ? 'bg-green-700 text-white' : 'text-green-700'} hover:bg-green-700 hover:text-white`}
                                            >
                                                {day.toString()}
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}