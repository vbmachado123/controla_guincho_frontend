import { ItemSelect } from "../model/ItemSelect";

interface IDropdownProps {
    items: ItemSelect[];
    id : string;
    name : string;
    label? : string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    value: string;
    isDisabled? : boolean;
}
export function Dropdown({items, id, name, label, onChange, value, isDisabled, ...rest} : IDropdownProps) {
    return(
        <div className="flex flex-col pb-2">
            <label className='text-blue-900 text-sm' htmlFor={id}>{label}</label>
            <select disabled={isDisabled} value={value} key={Math.random()} onChange={onChange} className={`${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} w-full h-10 bg-white px-4 py-2 rounded-lg border-none text-green-700 appearance-none drop-shadow-lg resize-y`} name={name} id={id}>
                {
                  items.map((e, index) => 
                      <option key={index} value={e.id}>{e.description}</option>
                  ) 
                }
            </select>
        </div>
    );
}