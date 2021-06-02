import { createEl } from './createEl';


export const fiscalNav = (fiscalYears, data, hash) => {
    const nav = createEl('nav', [], {});

    const yearContainer = createEl('ul', ['yearContainer'], {});

    fiscalYears.forEach(y => {
        const item = createEl('li', ['year'], {});
        const link = createEl('a', [], {href: `#${y}`, innerText: y});
        item.appendChild(link);
        yearContainer.appendChild(item)
        if(hash === y) {
            data.forEach(d => {
                const frnContainer = createEl('ul', ['frnContainer'], {});
                const totalContainer = createEl('ul', ['totalContainer'], {});
                for(let key in d) {
                    if(key === 'inventory') {
                        let counter = 0;
                        d[key].forEach(el => {
                            counter += (el.total_eligible)*1
                            });
                        const total = createEl('li', ['total'], {innerText: `Total Funding: ${counter.toFixed(2)}`})
                        totalContainer.appendChild(total)
                        yearContainer.appendChild(totalContainer)
                    } else {
                    let detail = createEl('li', ['frn'], {innerText: `${key}: ${d[key]}`})
                    frnContainer.appendChild(detail)
                    yearContainer.appendChild(frnContainer)
                    }
                }
            })
        }
    })

    nav.appendChild(yearContainer)

    return nav;
}
