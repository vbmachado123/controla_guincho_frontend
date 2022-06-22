import { GiTowTruck } from "react-icons/gi";
import { MdOutlinePeopleOutline, MdAssignment } from "react-icons/md";
import { Button } from "../components/Button";
import { DescriptionCard } from "../components/DescriptionCard";
import { Header } from "../components/Header";
import { PieChartBox } from "../components/PieChart";

export function Widget() {
  let data = new Date();
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear() + ' - ' + data.getHours() + ':' + data.getUTCMinutes(); 
  

    return(
       <div className="flex flex-col w-screen h-screen scroll-smooth relative bg-slate-100">
          
            <div className="col-span-6 items-center px-24 justify-center w-full h-full mt-24 overflow-y-scroll">
                        <div className="relative flex flex-row justify-end"> 
                            <Button onClick={() => {}} label={"Exportar"} style={"bg-green-500 text-white"} /> 
                            {/* <Button onClick={() => {} } label={"Filtrar"} style={"bg-green-500 text-white"}/>  */}
                        </div>

                        <p className="text-red-500">As informações estão estáticas por enquanto</p>

                       <div className="w-full flex flex-row content-between justify-between mt-16">
                           <DescriptionCard title={"Atendimentos"} value={"22"} style={"bg-orange-600"} icon={ <MdAssignment size={120} color='white' opacity={.25} />} description={`Última atualização em: ${dataFormatada}`}/>
                           <DescriptionCard title={"Veículos"} value={"4"} style={"bg-green-600"} icon={ <GiTowTruck size={120} color='white' opacity={.25} />} description={"Todos os veículos estão em funcionamento"}/>
                           <DescriptionCard title={"Profissionais"} value={"2"} style={"bg-blue-900"} icon={<MdOutlinePeopleOutline size={120} color='white' opacity={.25}/>} description={"Todos os profissionais estão em atuação"}/>
                       </div>

                        <div className="mt-8 grid grid-col-2">
                            <PieChartBox/>
                            <PieChartBox/>
                        </div>
            </div>
                <Header currentPage={"home"}/>
        </div>
    );
}