interface InputProps {
    label: string;
    id: string;
    placeholder: string;
    type: string;
    textarea?: boolean;
}

export function Input({ label, id, placeholder, type, textarea }: InputProps) {
    return (
         <div className='flex flex-col py-1'>
            <label className='text-blue-900 text-sm' htmlFor={id}>{label}</label>
            { textarea ? <textarea aria-placeholder={placeholder} className="bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y" 
               placeholder={placeholder} id={id}/> : <input className="w-full bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y" 
                type={type} placeholder={placeholder} id={id}/>}
         
        </div>
    );
}