import { Popover } from "@headlessui/react";

interface ListItemProps {
    title: string;
    type: number;
    onCLick: () => void;
    label1: string;
    label2: string;
    rightSide: string;
 }
export function ListItem({ title, type, onCLick, label1, label2, rightSide }: ListItemProps) {
    var titleLabel1 = '', titleLabel2 = '';

    switch(type) {
        case 0:
            titleLabel1 = 'Motorista';
            titleLabel2 = 'Veículo';
            break;
        case 1:
            titleLabel1 = 'Tipo Despesa';
            titleLabel2 = 'Observação';
            break;

    }

    return (
        <Popover className="w-auto h-auto rounded-2xl shadow-lg hover:shadow-2xl px-8 py-4 flex flex-row justify-between items-center m-4 bg-white">
           <Popover.Panel> <div className="bg-red w-full h-full rounded-2xl shadow-2xl"> <h4>alsdlas</h4></div> </Popover.Panel>
           
            <Popover.Button>
                <div className="flex flex-col">
                    <h4 className="text-slate-900 font-bold">{title}</h4>
                    <div className="flex flex-row">
                        <p className="font-bold text-slate-600">{titleLabel1}: <span className="font-normal">{label1}</span></p>    
                        <p className="font-bold text-slate-600 ml-4">{titleLabel2}: <span className="font-normal">{label2}</span></p>    
                    </div>
                </div>

                <div className="">
                    <p className="text-green-400 items-center justify-center font-bold">{rightSide}</p>
                </div>
            </Popover.Button>
        </Popover>
    );
}