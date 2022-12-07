import axios from 'axios';

export default axios.create({
    baseURL: 'http://dindin-env.eba-mb9bequv.sa-east-1.elasticbeanstalk.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})