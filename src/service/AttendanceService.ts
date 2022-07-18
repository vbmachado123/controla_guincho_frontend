import { IAttendance } from './../model/AttendanceData'
import http from '../https-commons'
import { AttendanceData } from '../model/AttendanceData'

const findOne = (id: number) => {
  return http.get<any>(`/attendance/find_one/${id}`)
}

const findAll = () => {
  return http.get<any[]>('/attendance/find_all')
}

const exportData = () => {
  return http.get<any>('/attendance/export', {
    responseType: 'blob',
  });
}

export const AttendanceService = {
  findOne,
  findAll,
  exportData
}
