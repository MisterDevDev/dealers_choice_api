import { createEl } from './createEl';

export const fiscalNav = (fiscalYears) => {
    const nav = createEl('nav', [], {});

    const yearContainer = createEl('ul', ['yearContainer'], {});

    fiscalYears.forEach(y => {
        const item = createEl('li', [], {});
        const link = createEl('a', [], {href: `#${y}`, innerText: y});
        item.appendChild(link);
        yearContainer.appendChild(item)
    })

    nav.appendChild(yearContainer)

    return nav;
}