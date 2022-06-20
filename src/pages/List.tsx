import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";

export function List() {
    return (
        <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto bg-slate-100">
          
            <div className="col-span-6 items-center px-24 justify-center w-screen h-screen mt-24">
                        <div className="relative flex flex-row justify-end"> 
                            <Button onClick={() => {}} label={"Exportar"} style={"bg-green-500 text-white"} /> 
                            <Button onClick={() => {} } label={"Filtrar"} style={"bg-green-500 text-white"}/> 
                        </div>

                        <div className="mt-8 overflow-y-scroll">
                            <ListItem title={"001 - Jorge Alves FIT-2213"} type={0} label1={""} label2={""} rightSide={""}/>
                            
                        </div>
                       
            </div>
                <Header currentPage={"atendimento"}/>
        </div>
    );
}