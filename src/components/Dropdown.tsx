import { ItemSelect } from "../model/ItemSelect";

interface IDropdownProps {
    items: ItemSelect[];
    id : string;
    name : string;
    label? : string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export function Dropdown({items, id, name, label, onChange, ...rest} : IDropdownProps) {
    return(
        <div className="flex flex-col pb-2">
            <label className='text-blue-900 text-sm' htmlFor={id}>{label}</label>
            <select key={Math.random()} onChange={onChange} className='w-full h-10 bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y' name={name} id={id}>
                {
                  items.map((e, index) => 
                      <option key={index} value={e.id}>{e.description}</option>
                  ) 
                }
            </select>
        </div>
    );
}