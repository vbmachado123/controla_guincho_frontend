
import http from '../https-commons'

const findOne = (id: number) => {
  return http.get<any>(`/vehicle/find_one/${id}`)
}

const findAll = () => {
  return http.get<any[]>('/vehicle/findAll/true')
}

const exportData = () => {
  return http.get<any>('/vehicle/export', {
    responseType: 'blob',
  });
}

export const VehicleService = {
  findOne,
  findAll,
  exportData
}
