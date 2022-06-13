interface DescriptionCardProps {
    title: string;
    value: string;
    style: string;
    icon: any;
    description: string;

}

export function DescriptionCard({ title, value, style, icon, description }: DescriptionCardProps) {
  
    return(
        <div className={`w-3/4 mx-2 relative overflow-hidden rounded-3xl shadow-2xl ${style} px-8 py-4 flex flex-row hover:shadow-inherit transition transition-all`}>
            <div className="flex flex-col">
                <h4 className="text-white font-bold text-lg">{title}</h4>
                <h2 className="text-white font-bold text-4xl mt-4">{value}</h2>

                <small className='text-white mt-4'>{description}</small>
            </div>

            <div className='absolute bottom-[-15px] right-[-12px] pl-8'>
               {icon}
            </div>

        </div>
    );
}