import http from '../https-commons'

const findAll = () => {
    return http.get<any[]>('/expense/find_all')
}

const findOne = (id: number) => {
    return http.get<any>(`/expense/find_one/${id}`)
}

export const ExpenseService = {
    findAll,
    findOne
}