import {createEl} from './createEl';
import axios from 'axios'

export const fetchData = async(hash) => {
    let data;
    if(hash){
        const pull = (await axios.get('/api/fy')).data;
        const dataArr = pull.fundingDetail
        data = dataArr.filter(d => d.fundingYear === hash)
    } else {
        data = []

    }
    return data;
}

