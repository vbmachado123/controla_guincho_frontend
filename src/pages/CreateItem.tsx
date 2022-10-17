import React, { useEffect, useState } from 'react'
import { MdImportExport, MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Feedback } from '../components/Feedback';
import { Header } from '../components/Header';
import { Input } from '../components/Input';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CSVReader from 'react-csv-reader';
import { CalledService } from '../service/CalledService';
import { Dropdown } from '../components/Dropdown';
import { ItemSelect } from '../model/ItemSelect';

export function CreateItem() {
  const navigate = useNavigate();
  const { id } = useParams();

  const notify = () => toast("Dados Salvos com Sucesso!");

  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState('');
  
  // inputs(text)
  const [description, setDescription] = useState<string>('');
  const [dateHourInit, setDateHourInit] = useState<string>('');
  const [dateHourEnd, setDateHourEnd] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [kmInit, setKmInit] = useState<string>('');
  const [kmEnd, setKmEnd] = useState<string>('');
  const [clientDetails, setClientDetails] = useState<string>('');
  const [licensePlate, setLicensePlate] = useState<string>('');

  // dropdown
  const [valueTypeSelected, setValueTypeSelected] = useState<string>('1');
  const [vehicleTypeSelected, setVehicleTypeSelected] = useState<string>('1');
  const [driverSelected, setDriverSelected] = useState<string>('1');
  const [vehicleSelected, setVehicleSelected] = useState<string>('1');
  const [originSelected, setOriginSelected] = useState<string>('1');

  const [valueType, setValueType] = useState<ItemSelect[]>([]);
  const [vehicles_types, setVehicleType] = useState<ItemSelect[]>([]);
  const [drivers, setDrivers] = useState<ItemSelect[]>([]);
  const [vehicles, setVehicles] = useState<ItemSelect[]>([]);
  const [types, setTypes] = useState<ItemSelect[]>([]);


useEffect(() => {
  async function load() {
    if(id !== "") {
    console.log('Id nao ta vazio');
      
    const response = await CalledService.findOne(Number(id));
    console.log(response.data);
    
    setDescription(response.data.description);
    setDateHourInit(response.data.dateHourInit ?? '--');
    setDateHourEnd(response.data.dateHourEnd ?? '--');

    setLicensePlate(response.data.license_plate ?? '');
    
    setKmEnd(response.data.kmEnd ?? '--');
    setKmInit(response.data.kmInit ?? '--');
    // let clientDetails = '';
    // if(response.data.vehicle != '' 
    // || response.data.license_plate != '') {
    //   clientDetails = `Veiculo: ${response.data.vehicle ?? ''} | ${response.data.license_plate ?? ''}`
    // }
    setClientDetails(response.data.vehicle ?? '')

    setOriginSelected(response.data.origin.id)
    setVehicleTypeSelected(response.data.category.id)
    setValueTypeSelected(response.data.type.id)
    setDriverSelected(response.data.driver.id)
    setVehicleSelected(response.data.tow_truck.id)

      //  "category" : {
      //       "id" : vehicleTypeSelected,
      //     },
      //     "origin" : {
      //       "id" : originSelected
      //     },
      //     "type" : {
      //       "id" : valueTypeSelected
      //     },
      //     "driver" : {"id" : driverSelected},
      //     "tow_truck" : {"id" : vehicleSelected}
    
    setValue(`R$ ${response.data.value}`)
    }
  } 

  if (id !== undefined) {
    load();
  }
}, [])

  useEffect(() => {
    let response;
    async function loadData() {

      response = await CalledService.findTypes();
      console.log("resposta da api aqui rapazzzz",response.data)

      // console.log(`Resposta API: ${response.data.call_types}`);
      
      let callTypes = new Array();
      response.data.call_types.map((e) => {
        callTypes.push(new ItemSelect(e.id, e.description))
        console.log(`ID: ${e.id} | Descricao: ${e.description}`);
      })

      setValueType(callTypes);

      // console.log(`Resposta API: ${response.data.call_types}`);
      let driversData = new Array();
      response.data.drivers.map((e) => {
        driversData.push(new ItemSelect(e.id, e.description))
        console.log(`ID: ${e.id} | Descricao: ${e.description}`);
      })
      setDrivers(driversData);
      
      let vehiclesData = new Array();
      response.data.vehicles.map((e) => {
        vehiclesData.push(new ItemSelect(e.id, e.description))
        console.log(`ID: ${e.id} | Descricao: ${e.description}`);
      })
      setVehicles(vehiclesData);
     
      let vehicleType = new Array();
      response.data.categories.map((e) => {
        vehicleType.push(new ItemSelect(e.id, e.description))
        console.log(`ID: ${e.id} | Descricao: ${e.description}`);
      })
      setVehicleType(vehicleType);
      
      let typeData = new Array();
      response.data.origins.map((e) => {
        typeData.push(new ItemSelect(e.id, e.description))
        console.log(`ID: ${e.id} | Descricao: ${e.description}`);
      })
      setTypes(typeData);
    }
   
   loadData();
  }, [])

  async function importFile(data, fileInfo) {
    // console.dir(data, fileInfo)
    console.log('aaaaaaaaaaaa')
    let req = Object();
    setIsLoading(true);
  await data.map(async (d, index) => {
      // console.dir(d)
      
      if(index === 0) console.dir(d)
      if (index === 2) {
      
      let category_id = 1;
      if(!d[15]) category_id = 1;
      else category_id = parseInt(d[15]);
      
        let obj = {
          "dateHour" : d[1] ?? '',
          "description" : d[3] ?? '',
          "dateHourInit" : d[5] ?? '',
          "dateHourEnd" : d[6] ?? '',
          "kmInit" : convertValueToNumber(d[7]),
          "kmEnd" :convertValueToNumber(d[8]),
          "value" : 0.0,
          "vehicle" : d[9] ?? '',
          "number_of_tolls" : 0,
          "waiting_time" : 0.0,
          "category" : {
            "id" : convertValueToNumber(d[15]),
          },
          "origin" : {
            "id" : convertValueToNumber(d[4])
          },
          "type" : {
            "id" : convertValueToNumber(d[2])
          },
          "driver" : {"id" : convertValueToNumber(d[13])},
          "tow_truck" : {"id" :convertValueToNumber(d[14])}
        };

        console.log(obj);
        let response = await CalledService.create_one(obj);
        console.log(response.status);
        setPercent((index * 100) / req.length + "%")
        
        req.push(obj)
      }
    });

    setIsLoading(false);
    // console.log(req.length);
    // req.map((i, index) => {

      
    // })

    // var response = await CalledService.create(req);
  }

  function convertValueToNumber(data) {
    
    let converted = 1;
    if(!data) converted = 1;
    else converted = parseInt(data)

    return converted;
  }

  async function afterSubmission(event) {
    event.preventDefault();

    console.log('=========================');
  
    const date = new Date();
    let valueFormated = value.replace('R$ ', '');
    
    let obj = {
          "dateHour" : `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
          "description" : description,
          "dateHourInit" : dateHourInit,
          "dateHourEnd" : dateHourEnd,
          "kmInit" : kmInit,
          "kmEnd" : kmEnd,
          "value" : valueFormated,
          "vehicle" : clientDetails,
          "license_plate" : licensePlate,
          "waiting_time" : 0.0,
          "category" : {
            "id" : vehicleTypeSelected,
          },
          "origin" : {
            "id" : originSelected
          },
          "type" : {
            "id" : valueTypeSelected
          },
          "driver" : {"id" : driverSelected},
          "tow_truck" : {"id" : vehicleSelected}
    };

    console.log("objeto antes de enviar",obj);

    const response = await CalledService.create_one(obj);
    console.log(response.status)
    
    await toast("Dados Salvos com Sucesso!");
    
    window.location.reload();

  }

    return (
      <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto overflow-x-hidden bg-slate-100 ">
      <div className="mb-16 col-span-6 items-center justify-center w-full h-screen mt-24">
        <div className="relative flex flex-row justify-between  px-24">
          <div className="flex flex-row items-center text-green-500 hover:text-green-600 transition-all ease-linear">
            <MdKeyboardBackspace  size={22} />
            <a
              onClick={() => navigate(-1)}
              className="item-center font-medium text-lg ml-2"
              style={{ cursor: 'pointer' }}
            >
              Voltar
            </a>
          </div>

          <div className='flex flex-row'>
            <label htmlFor="import-service" className='items-center flex-row flex w-content text-center rounded-2xl px-6 py-3 font-normal 
            cursor-pointer drop-shadow-lg hover:bg-green-600 hover:shadow-2xl 
            transition-all translate-x-0 animate-none bg-green-500 text-white'>
              <span><MdImportExport size={22} className='mr-1'/> </span> IMPORTAR DADOS</label>
          </div>
        </div>

        <div className="mt-8 mx-24 overflow-y-scroll px-8 py-8 bg-white shadow-xl rounded-3xl flex flex-col mb-16">
         
         <form onSubmit={afterSubmission}>
          <h4 className='text-lg text-green-500 font-bold'>Detalhes do Chamado</h4>
          <div className='flex mt-4 lg:flex-row md:flex-col sm:flex-col w-full justify-between items-start'>
            
            <Input defaultValue={description} onChange={e => setDescription(e.target.value)} style={'h-28 w-96'} label={'Descrição'} id={'description'} placeholder={'Descrição do Chamado'} textarea={true} type={'textarea'}/>
            
            <div className='flex flex-col w-full px-8 justify-between '>
              <Input defaultValue={dateHourInit} onChange={e => setDateHourInit(e.target.value)} label={'Data Hora Início'} id={'dateHour_init'} placeholder={'Data - Hora de Inicio'} type={'text'}/>
              <Input defaultValue={dateHourEnd} onChange={e => setDateHourEnd(e.target.value)} label={'Data Hora Fim'} id={'dateHour_end'} placeholder={'Data - Hora do Fim'} type={'text'}/>
            </div>

            <div className='flex flex-col w-full'>
              <Input defaultValue={kmInit} onChange={e => setKmInit(e.target.value)} label={'KM Início'} id={'dateHour_init'} placeholder={'00000'} type={'number'}/>
              <Input defaultValue={kmEnd} onChange={e => setKmEnd(e.target.value)} label={'KM Fim'} id={'dateHour_end'} placeholder={'00000'} type={'number'}/>       
              
            </div>
            
          </div>
            <hr className='my-4'/>

            <h4 className='text-lg text-green-500 font-bold'>Motorista e Veículo</h4>

            <div className='flex sm:flex-col items-center md:flex-col lg:flex-row justify-around'>
             <div className='flex flex-col w-full'>
                <Dropdown value={driverSelected} onChange={e => {console.log(`Motorista Alterado ${e.target.value}`); setDriverSelected(e.target.value)}} label='Motorista' items={[...drivers]} id={'drivers'} name={'driver'}/>
                <Dropdown value={vehicleSelected} onChange={e => setVehicleSelected(e.target.value)} label='Caminhão Utilizado' items={[...vehicles]} id={'vehicles'} name={'vehicle'}/>
              </div> 
              <div className='flex flex-col w-full px-8'>
                <Dropdown value={vehicleTypeSelected} onChange={e => setVehicleTypeSelected(e.target.value)} label='Categoria do Veículo' items={[...vehicles_types]} id={'vehicle_type'} name={'vehicle_types'}/>
                <Dropdown value={originSelected} onChange={e => setOriginSelected(e.target.value)} label='Origem do Chamado' items={[...types]} id={'types'} name={'type'}/>
              </div>
              <div className='flex flex-col w-full'>
                  <Input defaultValue={clientDetails} onChange={e => setClientDetails(e.target.value)} label={'Dados do Veículo'} id={'vehicle_client'} placeholder={'Veículo do Cliente'} type={'text'}/>
                  <Input defaultValue={licensePlate} onChange={e => setLicensePlate(e.target.value)} label={'Placa do Veículo'} id={'license_plate'} placeholder={'AAA-0000'} type={'text'}/>       
              </div>

            </div>

            <hr className='my-4'/>

            <h4 className='text-lg text-green-500 font-bold'>Valor</h4>
            
            <div className='flex flex-row justify-around'>
              <div className='w-full'>
                <Input defaultValue={value} description={'(*) O valor será formatado quando for salvo'} onChange={e => {setValue(e.target.value)}} label={'Valor'} id={'value_input'} placeholder={'000.00'} type={'text'}/>
              </div>
              <div className='w-full pl-8'>
                <Dropdown value={valueTypeSelected} onChange={e => setValueTypeSelected(e.target.value)} label='Tipo de Entrada' items={[...valueType]} id={'value_types'} name={'value_type'}/>
              </div>
            
            </div>

            <hr className='my-4'/>

            <div className='flex flex-row justify-end'>
              <Button onClick={() => {}} label={'Salvar Informações'} style={'bg-green-500 text-white'}/>
            </div>
         </form>
         <div className='invisible'>
            <CSVReader inputId="import-service" onFileLoaded={(data, fileInfo) => importFile(data, fileInfo)} />
          </div>
        </div>
      </div>

      {isLoading ? 
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-none border-slate-200 rounded-t">
                  <h3 className="text-xl text-blue-800 font-semibold">
                   Atenção
                  </h3>
                 
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto flex flex-row items-center">
                  <div role="status">
                      <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                     
                  </div>
                  <p>Enviando Informações, aguarde</p>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-none border-slate-200 rounded-b">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-slate-400">
                    <div className={`bg-green-600 h-2.5 rounded-full dark:bg-green-500 w-[${percent}]`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </> :
          <>
          </>
      }

      <Header currentPage={'atendimento'} />
      <Feedback />
    </div>
    );
}

/**
       * 
        "ID"
        1"Data"
        2"Tipo"
        3"DescriÁ„o"
        4"Origem"
        5"Hora_Inicial"
        6"Hora_final"
        7"KM inicial"
        8"KM Final"
        9"VeÌculo"
        10"Placa"
        11" Entrada "
        12"SaÌda "
        13"motorista"
        14"Caminh„o"
        15 "Categoria"
       */

// let obj = {
//   "dateHour" : "",
//   "description" : "",
//   "dateHourInit" : "",
//   "dateHourEnd" : "",
//   "kmInit" : 0,
//   "kmEnd" : 0,
//   "value" : 0.0,
//   "vehicle" : "",
//   "number_of_tolls" : 0,
//   "waiting_time" : 0.0,
//   "category" : {

//   },
//   "origin" : {

//   },
//   "type" : {

//   },
//   "driver" : {},
//   "tow_truck" : {}
// }