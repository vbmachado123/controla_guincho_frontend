export class AttendanceData {
  id?: number
  dateHour: any
  value?: number
  number_of_tolls?: number
  commission?: number
}

export interface IAttendance {
  id: number
  client: IClient
  commission: number
  dateHour: number
  value: number
}

interface IClient {
  brand: string
  color: string
  license_plate: string
  name: string
  phone: string
}
