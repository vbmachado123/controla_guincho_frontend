import { useState } from "react";
import { Button } from "../components/Button";
import { Feedback } from "../components/Feedback";
import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";
import { AttendanceItem } from "../model/AttendanceItem";

interface IRouteParams{
  type: string;
}

export function List({type} : IRouteParams) {
    
    const [items, setItems] = useState();
    
    let listType = '';
    switch (type) {
            case "attendance":
                listType = "atendimento";
                break;
                // return 'atendimento';
            case "professional":
                listType = "profissionais";
                // return 'profissionais';
                break;
            case "vehicle":
                listType = "veiculos";
                break;
                // return 'veiculos';
            case "checking_account":
                listType = "conta-corrente";
                break;
                // return 'conta-corrente';
            default:
                listType = "atendimento";
                break;
                // return 'atendimento';
        } 

    // const headerOption = useMemo(() => {
    // });
    
    return (
        <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto bg-slate-100">
          
            <div className="col-span-6 items-center justify-center w-full h-screen mt-24">
                        <div className="relative flex flex-row justify-end  px-24"> 
                            <Button onClick={() => {}} label={"Exportar"} style={"bg-green-500 text-white"} /> 
                            <Button onClick={() => {} } label={"Filtrar"} style={"bg-green-500 text-white"}/> 
                        </div>

                        <div className="mt-8 overflow-y-scroll  px-24 w-full ">
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={"R\$ 25,99"}/>
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={"R\$ 25,99"}/>
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={"R\$ 25,99"}/>
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={"R\$ 25,99"}/>
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={"R\$ 25,99"}/>
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={"R\$ 25,99"}/>
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={"R\$ 25,99"}/>
                            
                        </div>
                       
            </div>
                <Header currentPage={listType}/>
                <Feedback/>
        </div>
    );
}

function useMemo(_arg0: () => void) {
    throw new Error("Function not implemented.");
}
