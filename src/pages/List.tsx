import fileDownload from 'js-file-download'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Feedback } from '../components/Feedback'
import { Header } from '../components/Header'
import { ListItem } from '../components/ListItem'
import { AttendanceData, IAttendance } from '../model/AttendanceData'
import { AttendanceItem } from '../model/AttendanceItem'
import { AttendanceService } from '../service/AttendanceService'
import { VehicleService } from '../service/VehicleService'

export function List() {
  
  const { type } = useParams()
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    let response;
    async function load() {
      switch(type) {
        case 'attendance' :
          response = await AttendanceService.findAll()
          setItems(response.data)
          console.log(response.data);
          break;
      case 'vehicle':
        console.log('aaa Veiculo Selecionado');
         response = await VehicleService.findAll()
         setItems(response.data)
         console.log(response.data);
         break;
      }
      
    }
    load()
  }, []);

 const downloadFile = async () => { 
  AttendanceService.exportData().then(res => {
    fileDownload(res.data, `${type}_${Date.now()}.xlsx`);
  })
 }

  let listType = ''
  switch (type) {
    case 'attendance':
      listType = 'atendimento'
      break
    // return 'atendimento';
    case 'professional':
      listType = 'profissionais'
      // return 'profissionais';
      break
    case 'vehicle':
      listType = 'veiculos'
      break
    // return 'veiculos';
    case 'checking_account':
      listType = 'conta-corrente'
      break
    // return 'conta-corrente';
    default:
      listType = 'atendimento'
      break
    // return 'atendimento';
  }

  return (
    <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto bg-slate-100">
      <div className="col-span-6 items-center justify-center w-full h-screen mt-24">
        <div className="relative flex flex-row justify-end  px-24">
          <Button
            onClick={() => downloadFile()}
            label={'Exportar'}
            style={'bg-green-500 text-white'}
          />
          <Button
            onClick={() => {}}
            label={'Filtrar'}
            style={'bg-green-500 text-white'}
          />
        </div>

        <div className="mt-8 overflow-y-scroll  px-24 w-full ">
         
          {
            items.map((item, index) => (
              <ListItem
                id={item.id}
                key={index}
                title={`${item.id} | ${item.client.name} ${item.client.license_plate}`}
                label1={item.journey.user.phone}
                label2={item.journey.vehicle.license_plate}
                type={0}
                rightSide={`R$${item.value}`}
              />
            ))
          }
        </div>
      </div>
      <Header currentPage={listType} />
      <Feedback />
    </div>
  )
}
