import axios from 'axios';

export default axios.create({
    baseURL: 'http://188.34.166.175:8081/api/v1',
    headers: {
        "Content-type": "application/json",
    },
});