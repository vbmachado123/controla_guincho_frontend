import http from '../https-commons';

const loadData = () => {
    return http.get<any>('/dashboard/load_data');
}

export const DashboardService = {
    loadData
}
