import { XMLTypes } from 'util/types/xml';

export function renderListVacacy(
  htmlElem: HTMLDivElement,
  vacancyArr: XMLTypes[]
): void {
  htmlElem.innerHTML = '';
  htmlElem.insertAdjacentHTML(
    'afterbegin',
    `${vacancyArr.slice(0, 5).reduce(
      (acum, item) =>
        (acum += `
    <article class="item">
      <h3 class="title">${item['job-name']}</h3>
        <div class="description">${item.description}</div>
        <p>Зарплата</p>
        <p class="salary">${item.salary} ${item.currency}</p>
        <p>Зарплата</p>
        <p>${item.schedule}</p>
        <p>Регион</p>
        <p class="region">${item.region}</p>
        <p>Опубликованно</p>
        <p class="date">${item['publish-date']}</p>
        <p>График</p>
        <p>${item.schedule}</p>
     </article>
    `),
      ''
    )}`
  );
}
