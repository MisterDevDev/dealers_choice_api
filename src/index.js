import { fiscalNav } from './mods/fiscalNav';

const app = document.querySelector('#app');

const state = {
    fiscalYears: ['2018', '2019', '2020']
}

const render = () => {
    console.log(app)
    app.appendChild(fiscalNav(state.fiscalYears));
}

render(); 