import http from '../https-commons';
import { AttendanceData } from '../model/AttendanceData';

const findOne = (id: number) => {
    return http.get<AttendanceData>(`/attendance/find_one/${id}`);
};

const finAll = () => {
    return http.get<AttendanceData[]>('/attendance/find_all');
};

const exportData = () => {
    return http.get<void>('/attendance/export');
};

const AttendanceService = {
    findOne,
    finAll,
    exportData,
};

export default AttendanceService;