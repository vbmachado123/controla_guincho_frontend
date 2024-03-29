import { Popover } from "@headlessui/react";
import { MdChatBubbleOutline } from "react-icons/md";
import { WidgetForm } from "./WidgetForm";

export function Feedback() {
    return(
        <Popover className='fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            <Popover.Panel><WidgetForm/></Popover.Panel>
            
            <Popover.Button  className='bg-green-500 rounded-full px-3 h-12 text-white flex items-center group'>
            <MdChatBubbleOutline className='w-6 h-6'/>
            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span className='pl-2'></span>
                Feedback
                </span>
        </Popover.Button>
        </Popover>
    );
}