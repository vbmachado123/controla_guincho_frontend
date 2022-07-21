import { useEffect, useState } from "react";
import { GiTowTruck } from "react-icons/gi";
import { MdOutlinePeopleOutline, MdAssignment } from "react-icons/md";
import { Button } from "../components/Button";
import { Chart } from "../components/Chart";
import { DescriptionCard } from "../components/DescriptionCard";
import { Feedback } from "../components/Feedback";
import { Header } from "../components/Header";
import { PieChartBox } from "../components/PieChart";
import { DashboardService } from "../service/DashboardService";

export function Widget() {
  let data = new Date();
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear() + ' - ' + data.getHours() + ':' + data.getUTCMinutes(); 

  const [res, setResponse] = useState(Object())


  useEffect(() => {
    async function load() {
      const response = await DashboardService.loadData();
      setResponse(response.data)
      console.log(response.data)
    }
    load()
  }, []);

    return(
       <div className="flex flex-col w-screen h-screen scroll-smooth relative bg-slate-100">
          
            <div className="col-span-6 items-center px-24 justify-center w-full h-full mt-24 overflow-y-scroll">
                        {/* <div className="relative flex flex-row justify-end"> 
                            <Button onClick={() => {}} label={"Exportar"} style={"bg-green-500 text-white"} /> 
                            
                        </div> */}

                       <div className="w-full flex flex-row content-between justify-between mt-16">
                           <DescriptionCard title={"Atendimentos"} value={Number(res.attendances ?? 0)} style={"bg-orange-600"} icon={ <MdAssignment size={120} color='white' opacity={.25} />} description={`Última atualização em: ${dataFormatada}`}/>
                           <DescriptionCard title={"Veículos"} value={Number(res.vehicles ?? 0)} style={"bg-green-600"} icon={ <GiTowTruck size={120} color='white' opacity={.25} />} description={"Todos os veículos estão em funcionamento"}/>
                           <DescriptionCard title={"Profissionais"} value={Number()} style={"bg-blue-900"} icon={<MdOutlinePeopleOutline size={120} color='white' opacity={.25}/>} description={"Todos os profissionais estão em atuação"}/>
                       </div>

                        <div className="mt-8 flex flex-row justify-between">
                            <PieChartBox earnings={Number((res.earnings % 100).toFixed(2))} spending={Number((res.spending % 100))} total={res.total}/>
                            <Chart/>
                        </div>

                        <Chart/>
            </div>
                <Header currentPage={"home"}/>
                <Feedback/>
        </div>
    );
}