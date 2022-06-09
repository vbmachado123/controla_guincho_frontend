import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { PieChartBox } from "../components/PieChart";

export function Widget() {
    return(
       <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto">
          
            <div className="col-span-6 items-center px-24 justify-center w-full h-full mt-24">
                        <div className="relative flex flex-row justify-end"> 
                            <Button onClick={() => {}} label={"Exportar"} style={"bg-green-500 text-white"} /> 
                            {/* <Button onClick={() => {} } label={"Filtrar"} style={"bg-green-500 text-white"}/>  */}
                        </div>

                        <div className="mt-8 overflow-y-scroll grid grid-flow-col">
                            <PieChartBox/>
                           
                        </div>
                       
            </div>
                <Header currentPage={"home"}/>
        </div>
    );
}