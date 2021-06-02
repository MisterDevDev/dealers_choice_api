import axios from 'axios';
import { fiscalNav } from './mods/fiscalNav';
import { fetchData } from './mods/fiscalDetail'


const app = document.querySelector('#app');

const state = {
    fiscalYears: ['2018', '2019', '2020']
}


window.addEventListener('hashchange', () => {
    render()
})


const render = async () => {
    app.innerHTML = '';
    let hash = window.location.hash.slice(1)
    let data = await fetchData(hash)
    app.appendChild(fiscalNav(state.fiscalYears, data, hash));
    console.log(data)
}


render(); 