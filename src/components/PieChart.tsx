import Chart from "react-apexcharts";

export function PieChartBox() {
     var options = {
          series: [44, 55, 41, 17, 15],
          chart: {
          type: 'donut',
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
        }]
        };

    return (
        <div className="my-4 w-auto h-64 px-8 py-4 shadow-xl rounded-2xl bg-white flex flex-row">
           <div className="flex flex-col">
                <h4 className="font-bold text-slate-800">Conta Corrente</h4>
           </div>

           <div className="">
  {/* <Chart

              options={options}
              series={options.series}
              type="bar"
              width="500"
            /> */}
           </div>
        </div>
    );
}