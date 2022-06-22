import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";

export function List() {
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
                <Header currentPage={"atendimento"}/>
        </div>
    );
}