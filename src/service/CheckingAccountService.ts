import http from '../https-commons'

const findAll = () => {
    return http.get<any[]>('/checking_account/find_all')
}

export const CheckingAccountService = {
    findAll
}