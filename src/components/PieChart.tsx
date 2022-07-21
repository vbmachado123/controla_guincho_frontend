import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface IPieChartBoxProps {
  earnings : number;
  spending : number;
  total : number;
}

export function PieChartBox({ earnings, spending, total }: IPieChartBoxProps) {
   const options: ApexOptions = {
     chart: {
        // type: 'donut',
        },
      responsive: [{
        breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
        legend: {
          position: 'bottom'
        }
      }
    }],
    labels: ['Receita', 'Despesa'],
    colors: ['#00BFA5', '#EF5350'],
    // subtitle: {
    //   // text: 'Total: R$ ' + total.toFixed(2),
    // },
    // series: [earnings, spending],
  };

    const series = [earnings, spending];

    return (
        <div className="my-4 w-full mr-8 h-[250px] px-8 py-4 shadow-xl rounded-2xl bg-white flex flex-row mb-8">
           <div className="flex flex-col">
                <h4 className="font-bold text-slate-800">Conta Corrente</h4>
           </div>

           <div className="mt-8">
              <ReactApexChart 
                options={options} 
                series={series} 
                type="donut" 
              />
           </div>
        </div>
    );
}