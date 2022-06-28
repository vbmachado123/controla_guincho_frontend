import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export function PieChartBox() {
   const options: ApexOptions = {
  chart: {
    width: 600,
    height: 350,
    type: 'donut',
   
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    }
  },
};

  const series = [{
    name: 'All Tasks',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'My Tasks',
    data: [11, 32, 45, 32, 34, 52, 41]
  }];


    return (
        <div className="my-4 w-auto  px-8 py-4 shadow-xl rounded-2xl bg-white flex flex-row">
           <div className="flex flex-col">
                <h4 className="font-bold text-slate-800">Conta Corrente</h4>
           </div>

           <div className="">
              
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={350}
            />
           </div>
        </div>
    );
}