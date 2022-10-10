import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { IAttendance } from '../model/AttendanceData'
import { ItemList } from '../model/ItemList'

interface ListItemProps {
  id: number
  title?: string
  type?: number
  itemList?: ItemList
  label1?: string
  label2?: string
  rightSide?: string
}

export function ListItem({
  id,
  title,
  type,
  itemList,
  label1,
  label2,
  rightSide
}: ListItemProps) {
  var titleLabel1 = '',
    titleLabel2 = ''

  switch (type) {
    case 0:
      titleLabel1 = 'Motorista'
      titleLabel2 = 'Veículo'
      break
    case 1:
      titleLabel1 = 'Tipo Despesa'
      titleLabel2 = 'Observação'
      break
    case 2:
      titleLabel1 = 'Modelo'
      titleLabel2 = 'Marca'
      break
    case 3:
      titleLabel1 = 'Telefone'
      titleLabel2 = 'E-mail'
      break
    case 4:
      titleLabel2 = 'Localização'
      titleLabel1 = 'Categoria'
      break 
    case 5:
      titleLabel2 = 'Data'
      titleLabel1 = 'Origem'
      break 
  }

  return (
    <Link to={`${type === 5 ?`create/${id}` : `item_details/${id}` }`}>
      <div className="w-auto h-auto rounded-2xl shadow-lg hover:shadow-2xl px-8 py-4 flex flex-row justify-between items-center m-4 bg-white cursor-pointer">
        <div className="w-full h-full flex flex-row justify-between content-between ">
          <div className="flex flex-col items-start">
            <h4 className="text-slate-900 font-bold">{title}</h4>
            <div className="flex flex-row items-start">
              <p className="font-bold text-slate-600">
                {titleLabel1}: <span className="font-normal">{label1}</span>
              </p>
              <p className="font-bold text-slate-600 ml-4">
                {titleLabel2}: <span className="font-normal">{label2}</span>
              </p>
            </div>
          </div>

          <div className="">
            <p className={`${title?.indexOf(/**'Despesa' || */'Saída') != -1 ? 'text-red-400':'text-green-400'} items-center justify-center font-bold`}>
              {title?.indexOf(/**'Despesa' ||*/ 'Saída') != -1 ? `-R$ ${rightSide}` : title?.indexOf('Entrada' || 'Ganhos') != -1 ? `R$ ${rightSide}` : `${rightSide}`}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
