import {Pie, PieChart, Cell} from 'recharts';

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export function PieChartBox() {
    return (
        <div className="w-1/2 h-60 px-8 py-4 shadow-xl rounded-2xl bg-white flex flex-row">
           <div className="flex flex-col">
                <h4 className="font-bold text-slate-800">Conta Corrente</h4>
           </div>
           <PieChart width={100} height={200} >
                <Pie   data={data}
                        cx={120}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value">
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
           </PieChart>
        </div>
    );
}