import fileDownload from 'js-file-download'
import { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Feedback } from '../components/Feedback'
import { Header } from '../components/Header'
import { ListItem } from '../components/ListItem'
import { AttendanceData, IAttendance } from '../model/AttendanceData'
import { AttendanceItem } from '../model/AttendanceItem'
import { AttendanceService } from '../service/AttendanceService'
import { VehicleService } from '../service/VehicleService'
import { ProfessionalService } from '../service/ProfessionalService'
import { CheckingAccountService } from '../service/CheckingAccountService'
import { ExpenseService } from '../service/ExpenseService'
import { CalledService } from '../service/CalledService'
import autoAnimate, { useAutoAnimate } from '@formkit/auto-animate/react'
import { usePagination } from '../hooks/usePagination'
import { Pagination } from '../components/Pagination'

export function List() {

  const { type } = useParams();
  const [items, setItems] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [parent] = useAutoAnimate(/* optional config */)

 
  useEffect(() => {

    let response;
    async function load() {
      console.log("executando a função load")
      setItems([]); // Limpa a lista antes de carregar os dados
      switch (type) {
        case 'attendance':
          setItems([]); // Limpa a lista antes de carregar os dados
          response = await AttendanceService.findAll()
          setItems(response.data)
          console.log(response.data);
          break;
        case 'vehicle':
          setItems([]); // Limpa a lista antes de carregar os dados
          console.log('aaa Veiculo Selecionado');
          response = await VehicleService.findAll()
          setItems(response.data)
          console.log(response.data);
          break;
        case 'professional':
          setItems([]); // Limpa a lista antes de carregar os dados
          console.log('aaa Profissional Selecionado');
          response = await ProfessionalService.findAll()
          setItems(response.data)
          console.log(response.data);
          break;

        case 'checking_account':
          setItems([]);
          response = await CheckingAccountService.findAll();
          setItems(response.data);
          console.log('> Response from Checking Account: ');
          console.log(response.data);
          break;
        case 'called':
          setItems([]);
          response = await CalledService.findAll();
          setItems(response.data);
          console.log('> Response from Checking Account: ');
          console.log(response.data);
          break;
      }
      setIsLoading(false)
    }
    
    if (isLoading) load();
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
      listType = 'conta_corrente'
      break
    case 'called':
      listType = 'chamado'
      break
    // return 'conta-corrente';
    default:
      listType = 'atendimento'
      break
    // return 'atendimento';
  }

  const renderList = (filter?: string) => {

    if (items.length > 0) {
      switch (type) {
        case 'attendance':
          return items.map((item, index) => (
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

        case 'vehicle':
          return items.map((item, index) => (
            <ListItem
              id={item.id}
              key={index}
              title={`${item.id} | ${item.license_plate}`}
              label1={item.brand}
              label2={item.model}
              type={1}
              rightSide={`Disponível`}
            />
          ))
        case 'professional':
          return items.map((item, index) => (
            <ListItem
              id={item.id}
              key={index}
              title={`${item.id} | ${item.userSystemDto.nome}`}
              label1={item.userSystemDto.telefone}
              label2={item.userSystemDto.email}
              type={3}
              rightSide={`Disponível`}
            />
          ))
        case 'checking_account':
          console.log('> Checking Account');
          return items.map((item, index) => (
           <ListItem
              id={item.id}
              key={index}
              title={`Despesa | ${item.expense.description}`}
              label2={`${item.expense.photo.latitude} | ${item.expense.photo.longitude}`}
              label1={item.expense.expense_type.description}
              type={4}
              rightSide={
               item.expense.value
              }
            />
          ))
        case 'called':
          console.log('> Called');
          if (filter === "Entrada") {
            
            const filtered = items.filter((item) => item.type.description === "Entrada");

            return filtered.filter((item, index) => index < (currentPage * 10) && index >= (currentPage * 10 - 10)).map((item, index) => (
              <ListItem
                id={item.id}
                key={index}
                title={`${item.type.description} | ${item.description ?? ''}`}
                label2={`${item.datehour}`}
                label1={item.origin.description}
                type={5}
                rightSide={
                item.value ?? 0
                }
              />
            ))
          } else if (filter === "Saída") {
            const filtered = items.filter((item) => item.type.description === "Saída");

            return filtered.filter((item, index) => index < (currentPage * 10) && index >= (currentPage * 10 - 10)).map((item, index) => (
              <ListItem
                id={item.id}
                key={index}
                title={`${item.type.description} | ${item.description ?? ''}`}
                label2={`${item.datehour}`}
                label1={item.origin.description}
                type={5}
                rightSide={
                item.value ?? 0
                }
              />
            ))
          } else {
            return items.filter((item, index) => index < (currentPage * 10) && (index >= currentPage * 10 - 10)).map((item, index) => (
              <ListItem
                 id={item.id}
                 key={index}
                 title={`${item.type.description} | ${item.description ?? ''}`}
                 label2={`${item.datehour}`}
                 label1={item.origin.description}
                 type={5}
                 rightSide={
                  item.value ?? 0
                 }
               />
             ))
          }
      }
    } else {
      if(!isLoading) {
        return (
          <h4>Nenhum Item Encontrado</h4>
        ) 
      } else {
        return <></>
      }
      
    }
    setIsLoading(false);
  }
  /**
   * <ListItem
              id={item.id}
              key={index}
              title={`Despesa | ${item.expense.description}`}
              label1={`${item.photo.latitude} | ${item.photo.longitude}`}
              label2={item.expense.expense_type.description}
              type={4}
              rightSide={item.expense.value ?? 0}
            />
   * [
    {
        "label": "Teste Despesa (Peças)",
        "type": 0,
        "expense": {
            "id": null,
            "description": "Teste Despesa (Peças)",
            "value": 0,
            "user": {
                "id": 3,
                "phone": null,
                "path_img": "",
                "userSystemDto": null
            },
            "photo": {
                "id": 1,
                "latitude": -23.6927579,
                "longitude": -46.6738231,
                "path": "ZGF0YTppbWFnZS9wbmc7YmFzZTY0LFtCQDI0Njk0MDQx",
                "dateHour": "2022-09-06T15:21:42.263884300",
                "description": null
            },
            "expense_type": {
                "id": 1,
                "description": "Peças"
            }
        },
        "attendance": null,
        "dateHour": "2022-09-06T15:21:42.263884300"
    }
]
   */

  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState<any[]>([]);

  const numberOfPages = filter === 'TODOS' || filter === '' ? Math.ceil(items.length / 10) : Math.ceil(filterList.length / 10);
  const { currentPage, setCurrentPage, pages } = usePagination(numberOfPages);

  const handleFilter = (e) => {

    setFilterList(items.filter(item => item.type.description === e.target.value));

    setFilter(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto bg-slate-100">
      <div className="col-span-6 items-center justify-center w-full h-screen mt-24">
        
        <div className="relative flex flex-row justify-end  px-24">
         <Link to={'/create'}>
          <Button
            onClick={() => { }}
            label={'Importar Dados'}
            style={'bg-green-500 text-white'}
          />
         </Link>
         
          <Button
            onClick={() => downloadFile()}
            label={'Exportar'}
            style={'bg-green-500 text-white'}
          />
          {
            type === "called" &&
              <select  onChange={handleFilter} defaultValue={"DEFAULT"} className={"btn w-32 mr-3 bg-green-500 text-white rounded-2xl px-6 py-3 font-normal drop-shadow-lg hover:bg-green-600 hover:shadow-2xl focus:border-transparent transition-all translate-x-0 animate-none border-none"}>
                <option value={"DEFAULT"} disabled>FILTRAR</option>
                <option value={"TODOS"} >TODOS</option>
                <option value={"Entrada"} >ENTRADA</option>
                <option value={"Saída"} >SAÍDA</option>
              </select>
          }
        </div>

        <div className="mt-8 overflow-y-scroll px-24 w-full ">
          {
            isLoading ?
            <>
                 <div className="relative p-6 flex-auto flex flex-row items-center">
                  <div role="status">
                      <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-slate-200 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                     
                  </div>
                  <p>Buscando Informações...</p>

                </div>
            </> : renderList(filter)
          }
        </div>
        <Pagination
          currentPage={currentPage}
          pages={pages}
          onPageChange={page => setCurrentPage(page)}
        />
      </div>
      <Header currentPage={listType} />
      <Feedback />
    </div>
  )
}
