import { IAttendance } from './../model/AttendanceData'
import http from '../https-commons'
import { AttendanceData } from '../model/AttendanceData'

const findOne = (id: number) => {
  return http.get<IAttendance>(`/attendance/find_one/${id}`)
}

const finAll = () => {
  return http.get<IAttendance[]>('/attendance/find_all')
}

const exportData = () => {
  return http.get<void>('/attendance/export')
}

export const AttendanceService = {
  findOne,
  finAll,
  exportData
}
