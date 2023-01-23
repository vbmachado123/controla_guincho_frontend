import { MdKeyboardBackspace } from 'react-icons/md'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Image } from '../components/Image'
import { TextMultipleStyle } from '../components/TextMultipleStyle'
import imageAsset from '../assets/images/login_background.png'
import { Feedback } from '../components/Feedback'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AttendanceService } from '../service/AttendanceService'
import { json } from 'stream/consumers'

export function ItemDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { type } = useParams()

  const [client, setClient] = useState(Object())
  // const [commission, setComission] = useState(0)
  const [origin, setOrigin] = useState(Object())

  const [exit, setExit] = useState(Object())
  const [withdrawal, setWithdrawal] = useState(Object())
  const [delivery, setDelivery] = useState(Object())

  const [res, setResponse] = useState(Object())
  console.log(id)
  
  useEffect(() => {
    async function load() {
      const response = await AttendanceService.findOne(Number(id))

      // const {
      //   client,

      // } = response.data;
      setClient(response.data.client);
      setOrigin(response.data.origin);

      setExit(response.data.exit);
      setWithdrawal(response.data.withdrawal);
      setDelivery(response.data.delivery);
      // setName(name)
      // setBrand(brand)
      // setComission(commission)
      setResponse(response.data)
      console.log(response.data)
    }
    load()
  }, [])

  return (
    <div className="flex flex-col w-screen h-screen scroll-smooth relative overflow-y-auto overflow-x-hidden bg-slate-100 ">
      <div className="col-span-6 items-center justify-center w-full h-screen mt-24">
        <div className="relative flex flex-row justify-between  px-24">
          <div className="flex flex-row items-center text-green-500 hover:text-green-600 transition-all ease-linear">
            <MdKeyboardBackspace size={22} />

            <a
              onClick={() => navigate(-1)}
              className="item-center font-medium text-lg ml-2"
              style={{ cursor: 'pointer' }}
            >
              Voltar
            </a>
          </div>
          {/* <Button
            onClick={() => {}}
            label={'Exportar'}
            style={'bg-green-500 text-white'}
          /> */}
        </div>

        <div className="mt-8 mx-24 overflow-y-scroll px-8 py-8 bg-white shadow-xl rounded-3xl flex flex-col mb-16">
          <div className="flex flex-row justify-between">
            <TextMultipleStyle title={'Cliente'} content={`${client.name ?? ''}`} />
            <TextMultipleStyle title={'Veículo'} content={`${client.brand ?? ''} - ${client.model ?? ''} | ${client.license_plate ?? ''}`} />
            <TextMultipleStyle title={'Valor'} content={`R$ ${res.value ??''}`} />
          </div>
          <div className="py-8">
            <TextMultipleStyle
              title={'Origem'}
              content={`${origin.description ?? ''}`} 
            />
          </div>

          <div className="flex flex-col">
            <hr />

            <h4 className="text-green-500 font-bold text-lg pt-8 pb-4">
              Endereços
            </h4>

            <div className="flex flex-row justify-between">
              <TextMultipleStyle title={'Saída'} content={`${exit.address ?? ''}`} />
              <TextMultipleStyle
                title={'Retirada'}
                content={`${withdrawal.address ?? ''}`}
              />
              <TextMultipleStyle
                title={'Entrega'}
                content={`${delivery.address ?? ''}`}
              />
            </div>
          </div>

          <hr className="mt-8" />

          <h4 className="text-green-500 font-bold text-lg pt-8 pb-4">Fotos</h4>

          <div className="flex flex-row overflow-x-scroll scroll-smooth w-full">
            { 
              exit.photo ? 
                <Image 
                  title={'Retirada'} 
                  path={`http://localhost:8081/api/v1/attendance/download/${exit.photo.path}`} 
                  footer={exit.photo.dateHour}  
                /> : 
                <p className='mr-4 text-black text-lg font-normal'>Sem imagem</p> 
            }
            { 
              delivery.photo ? 
                <Image 
                  title={'Entrega'} 
                  path={`http://localhost:8081/api/v1/attendance/download/${delivery.photo.path}`} 
                  footer={delivery.photo.dateHour}
                /> : 
                <p className='mr-4 text-black text-lg font-normal'>Sem imagem</p>
            }
            { 
              withdrawal.photo ? 
                <Image 
                  title={'Entrega'} 
                  path={`http://localhost:8081/api/v1/attendance/download/${withdrawal.photo.path}`} 
                  footer={withdrawal.photo.dateHour}
                /> : 
                <p className='mr-4 text-black text-lg font-normal'>Sem imagem</p> 
            }
          </div>
        </div>
      </div>
      <Header currentPage={'atendimento'} />
      <Feedback />
    </div>
  )
}
