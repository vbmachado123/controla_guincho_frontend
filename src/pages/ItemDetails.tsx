import { MdKeyboardBackspace } from 'react-icons/md'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Image } from '../components/Image'
import { TextMultipleStyle } from '../components/TextMultipleStyle'
import imageAsset from '../assets/images/login_background.png'
import { Feedback } from '../components/Feedback'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { AttendanceService } from '../service/AttendanceService'
import { json } from 'stream/consumers'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import ImageViewer from 'react-simple-image-viewer';

export function ItemDetails() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { type } = useParams()

  const [client, setClient] = useState(Object());
  // const [commission, setComission] = useState(0)
  const [origin, setOrigin] = useState(Object());

  const [exit, setExit] = useState(Object());
  const [withdrawal, setWithdrawal] = useState(Object());
  const [delivery, setDelivery] = useState(Object());
  const [driverName, setDriverName] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [value, setValue] = useState(0);
  const [dateHour, setDateHour] = useState('');
  const [observation, setObservation] = useState('');

  const [currentPicture, setCurrentPicture] = useState(0);
  const [picture, setPicture] = useState<{ title: string, content: any } | undefined>({ title: "", content: {} });
  const [currentItem, setCurrentItem] = useState(0);

  const [dateHourInit, setDateHourInit] = useState('');
  const [dateHourEnd, setDateHourEnd] = useState('');
  const [totalTime, setTotalTime] = useState('');

  const [kmInit, setKmInit] = useState(0);
  const [kmEnd, setKmEnd] = useState(0);
  const [kmDif, setKmDif] = useState('');

  const [patins, setPatins] = useState<number>(0);

  const [attendanceId, setAttendanceId] = useState('');

  useEffect(() => {
    setTotalTime(calcTotalTime());
  }, [dateHourInit, dateHourEnd]);

  useEffect(() => {
    setPicture(getPicture())
  }, [currentPicture]);

  function changeItem(position: "next" | "previous") {
    let newCurrentItem = currentItem;

    if (position === "next") {
      if (currentItem === res.length - 1) {
        return;
      }

      newCurrentItem = currentItem + 1;
      setCurrentPicture(0);
    } else {
      if (currentItem === 0) {
        return;
      }

      newCurrentItem = currentItem - 1;
      setCurrentPicture(0);
    }

    setCurrentItem(newCurrentItem);

    setClient(res[newCurrentItem].client);
    setOrigin(res[newCurrentItem].origin);

    setExit(res[newCurrentItem].exit);
    setWithdrawal(res[newCurrentItem].withdrawal);
    setDelivery(res[newCurrentItem].delivery);
    setValue(res[newCurrentItem].value);
    setDateHour(res[newCurrentItem].dateHour);
    setObservation(res[newCurrentItem].observation);
    setDateHourInit(res[newCurrentItem].dateHour);
    setDateHourEnd(res[newCurrentItem].withdrawal.photo.dateHour);
    setKmInit(res[newCurrentItem].exit.km);
    setKmEnd(res[newCurrentItem].withdrawal.km);
    setPatins(res[newCurrentItem].patins);
    setAttendanceId(res[newCurrentItem].id);
    setPicture({
      title: "Saida",
      content: res[newCurrentItem].exit
    })

    setDriverName(res[newCurrentItem].journey.user.userSystemDto.nome);
    setVehicle(`${res[newCurrentItem].journey.vehicle.brand} | ${res[newCurrentItem].journey.vehicle.license_plate}`);
  }

  function getPicture() {
    console.log(currentPicture)
    if (currentPicture === 0) {
      return {
        title: "Saida",
        content: exit
      }
    } else if (currentPicture === 1) {
      return {
        title: "Retirada",
        content: withdrawal
      }
    } else if (currentPicture === 2) {
      return {
        title: "Entrega",
        content: delivery
      }
    }
  }

  const [res, setResponse] = useState(Object())
  console.log(id)

  useEffect(() => {
    async function load() {
      const response = await AttendanceService.findAll();

      const current = response.data.find((item: any) => item.id === Number(id));

      // const {
      //   client,

      // } = response.data;
      setClient(current.client);
      setOrigin(current.origin);

      setExit(current.exit);
      setWithdrawal(current.withdrawal);
      setDelivery(current.delivery);
      setValue(current.value);
      setDateHour(current.dateHour);
      setObservation(current.observation);
      setDateHourInit(current.dateHour);
      setDateHourEnd(current.withdrawal.photo.dateHour);
      setKmInit(current.exit.km);
      setKmEnd(current.withdrawal.km);
      setPatins(current.patins);
      setAttendanceId(current.id);
      setPicture({
        title: "Saida",
        content: current.exit
      })

      setDriverName(current.journey.user.userSystemDto.nome);
      setVehicle(`${current.journey.vehicle.brand} | ${current.journey.vehicle.license_plate}`);
      // setName(name)
      // setBrand(brand)
      // setComission(commission)
      setResponse(response.data)

      setCurrentItem(response.data.indexOf(current));
      console.log(response.data)
    }
    load()
  }, [])

  function parse(dateHour: string | null) {

    if (!dateHour || dateHour.length === 0) {
      return 0;
    }

    console.log("dateHour", dateHour)

    // recebe o formato "20/02/2023 - 22:20" mas pode receber tambem "22:20:00"
    // em ambos os casos, o resultado deve ser a quantidade de minutos
    // ex: 20/02/2023 - 22:20 => 22 * 60 + 20 = 1340
    // ex: 22:20:00 => 22 * 60 + 20 = 1340

    const splitedDate = dateHour.split(" - ");
    let hours: string, minutes;
    
    if (splitedDate.length === 1) {
      const splitedHour = dateHour.split(":");
      hours = splitedHour[0];
      minutes = splitedHour[1];
    } else {
      const splitedHour = splitedDate[1].split(":");
      hours = splitedHour[0];
      minutes = splitedHour[1];
    }

    return Number(hours) * 60 + Number(minutes);
  }

  function calcTotalTime() {

    let initDateParsed = parse(dateHourInit);
    let endDateParsed = parse(dateHourEnd);

    let result = endDateParsed - initDateParsed;

    let formatted = '00:00:00';

    if (result <= 60) {
      const formattedResult = result < 10 ? `0${result}` : result;

      formatted = `00:${formattedResult}:00`;
    }

    if (result > 60) {
      const hours = Math.floor(result / 60);
      const minutes = result % 60;

      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      formatted = `${formattedHours}:${formattedMinutes}:00`;
    } else if (initDateParsed > endDateParsed) {
      const hours = Math.floor(initDateParsed / 60);
      const minutes = initDateParsed % 60;

      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      formatted = `${formattedHours}:${formattedMinutes}:00`;
    }

    return formatted;

  }

  useEffect(() => {
    calcKmDif();
  }, [kmEnd, kmInit])

  function calcKmDif() {

    const kmDif = Math.abs(kmEnd - kmInit);

    setKmDif((value / kmDif).toFixed(2));
  }

  function getTotalTimeValue() {
    if (dateHourInit == '' || dateHourEnd == '' || value == 0 || totalTime === "Sem dados") return '0';

    const totalTimeInSec = parse(totalTime);

    return (value / totalTimeInSec).toFixed(2).toString().replace('.', ',');
  }

  const [currentImage, setCurrentImage] = useState('');
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const openImageViewer = useCallback((image) => {
    setCurrentImage(image);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage('');
    setIsViewerOpen(false);
  };

  useEffect(() => {
    getTotalTimeValue();
  }, [totalTime]);

  const calcValue = () => {
    let value = 0;

    if (Number(kmDif) <= 40) {
      value = 120;
    }

    if (Number(kmDif) >= 41) {
      value = (Number(kmDif) - 40) * 1.76 + 120;
    }

    if (getTotalTimeValue() !== '0') {
      value += Number.parseInt(getTotalTimeValue()) * 32;
    }

    if (patins) {
      value += 32 * patins;
    }

    return value.toFixed(2).toString().replace('.', ',');
  }

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

          <div className="flex flex-row items-center gap-10">

            <p className='font-bold' >{`${currentItem + 1} - ${res.length}`}</p>

            <button
              className='text-green-500 hover:text-green-600 transition-all ease-linear'
              onClick={() => changeItem("previous")}
            >
              <AiOutlineArrowLeft size={22} />
            </button>

            <button
              className='text-green-500 hover:text-green-600 transition-all ease-linear'
              onClick={() => changeItem("next")}
            >
              <AiOutlineArrowRight size={22} />
            </button>

          </div>
          {/* <Button
            onClick={() => {}}
            label={'Exportar'}
            style={'bg-green-500 text-white'}
          /> */}
        </div>

        <div className="mt-8 mx-24 overflow-y-scroll px-8 py-8 bg-white shadow-xl rounded-3xl flex flex-col mb-16">
          <div className="flex flex-row justify-between">
            <h4 className="text-black text-lg font-normal">
              {`${dateHour} | ${attendanceId}`}
            </h4>
            <TextMultipleStyle title={'Veículo'} content={`${client.brand ?? ''} - ${client.model ?? ''} | ${client.license_plate ?? ''}`} />
            <TextMultipleStyle title={'Valor'} content={`R$ ${value ?? '0'}`} />
          </div>

          <div className='flex flex-row justify-between py-8'>
            <TextMultipleStyle title={"Motorista"} content={driverName} />
            <TextMultipleStyle
              title={"Caminhão"}
              content={vehicle}
            />

            <TextMultipleStyle title={'Cliente'} content={`${client.name ?? ''} | ${client.phone ?? ""}`} />
          </div>

          <div className="py-8">
            <TextMultipleStyle
              title={'Origem'}
              content={`${origin.description ?? ''}`}
            />
          </div>

          <div className="py-8">
            <TextMultipleStyle
              title={'Observação'}
              content={`${observation ?? 'Esse texto será digitado pelo profissional em campo'}`}
            />
          </div>

          <div className="flex flex-col">
            <hr />

            <h4 className="text-green-500 font-bold text-lg pt-8 pb-4">
              Cálculos
            </h4>

            <div className="flex flex-row justify-between">
              <TextMultipleStyle title={'Tempo total de atendimento'} content={`${totalTime ?? ''}`} />
              <TextMultipleStyle
                title={'Valor por KM rodado'}
                content={`R$ ${kmDif.toString().replace('.', ',')}`}
              />
              <TextMultipleStyle
                title={'Valor por hora parado'}
                content={`R$ ${getTotalTimeValue().toString().replace('.', ',')}`}
              />

              <TextMultipleStyle
                title={'Valor Calculado'}
                content={`R$ ${calcValue().toString().replace('.', ',')}`}
              />
            </div>
          </div>

          <hr className="mt-8" />

          <h4 className="text-green-500 font-bold text-lg pt-8 pb-4">Fotos</h4>

          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center w-full gap-4 pt-8">
              <h4 className="text-green-500 font-bold text-lg">{picture?.title}</h4>
              <TextMultipleStyle title={"KM"} content={picture?.content.km} />
            </div>

            <div className='pt-8 flex flex-row gap-4'>
              <div className='text-center'>
                {
                  picture?.content.photo?.path ? (
                    <>
                      <img
                        src={`http://188.34.166.175:8081/api/v1/attendance/download/${picture?.content.photo?.path}`}
                        alt={`Foto de ${exit.address}`}
                        onClick={() => openImageViewer(`http://188.34.166.175:8081/api/v1/attendance/download/${picture?.content.photo?.path}`)}
                        className="w-96 border-4 border-green-500 rounded-2xl"
                      />
                      <p className='py-4'>{picture?.content.dateHour}</p>
                    </>
                  ) : (
                    <p className='text-lg w-64 font-bold'>Sem foto</p>
                  )
                }
              </div>

              <div className='flex flex-col'>
                <TextMultipleStyle title={"Endereço"} content={picture?.content.address} />
                <TextMultipleStyle
                  title={"Lat/Lng"}
                  content={`${picture?.content.photo?.latitude}/${picture?.content.photo?.longitude}`}
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-10">

              <p className='font-bold' >{`${currentPicture + 1} - 3`}</p>

              <button
                className='text-green-500 hover:text-green-600 transition-all ease-linear'
                onClick={() => {
                  if (currentPicture === 0) {
                    setCurrentPicture(2)
                    return;
                  }

                  setCurrentPicture(currentPicture - 1)
                }}
              >
                <AiOutlineArrowLeft size={22} />
              </button>

              <button
                className='text-green-500 hover:text-green-600 transition-all ease-linear'
                onClick={() => {
                  if (currentPicture === 2) {
                    setCurrentPicture(0)
                    return;
                  }

                  setCurrentPicture(currentPicture + 1)
                }}
              >
                <AiOutlineArrowRight size={22} />
              </button>

              {isViewerOpen && (
        <ImageViewer
          src={ [...currentImage] }
          currentIndex={ 0 }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      )}

            </div>
          </div>
        </div>
      </div>
      <Header currentPage={'atendimento'} />
      <Feedback />
    </div>
  )
}
