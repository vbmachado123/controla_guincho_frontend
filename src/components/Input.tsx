interface InputProps {
    label: string;
    id: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    textarea?: boolean;
    style? : string;
    description? : string;
    defaultValue? : string;
}

export function Input({ label, id, placeholder, type, textarea, description, style, defaultValue, ...rest }: InputProps) {
    return (
         <div className='flex flex-col py-1'>
            <label className='text-blue-900 text-sm' htmlFor={id}>{label}</label>
            { textarea ? <textarea defaultValue={defaultValue} aria-placeholder={placeholder} className={`${style} w-full bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y`} 
               placeholder={placeholder} id={id}/> : <input {...rest} defaultValue={defaultValue} className="w-full bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y" 
                type={type} placeholder={placeholder} id={id}/>}   
                <small className="text-green-700">{description}</small>     
        </div>
    );
}