import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.patch['Access-Control-Allow-Origin'] = '*';

export default axios.create({
    baseURL: 'http://192.168.0.10:8081/api/v1',
    // baseURL: 'https://cors-anywhere.herokuapp.com/http://192.168.0.10:8081/api/v1',
    // baseURL: 'http://188.34.166.175:8081/api/v1',

    headers: {
        "Content-type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // 'X-Requested-With': 'XMLHttpRequest',
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    },
});