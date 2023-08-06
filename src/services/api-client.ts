import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b51f8e45c9bc4514bced0f90b505a1fc'
    }
})