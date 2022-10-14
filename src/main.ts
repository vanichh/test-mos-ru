import './style.css';
import xmlFile from '../public/example_1.xml';
import { XMLTypes } from 'util/types/xml';
import { renderListVacacy } from './list';
import { paginationBtn } from './pagination';

const paginationHTML = document.getElementById('pagination') as HTMLDivElement;
const formHTML = document.getElementById('form') as HTMLFormElement;
const listHTML = document.getElementById('list') as HTMLDivElement;
const vacancyArr: XMLTypes[] = xmlFile.source.vacancies.vacancy;

let countBtn = Math.floor(vacancyArr.length / 5);
let page: number = 1;
let arrVacency = vacancyArr.slice(5, 10);

renderListVacacy(listHTML, arrVacency);
paginationBtn(paginationHTML, countBtn, page);

function togglePage({ target }: MouseEvent) {
  const btn = target as HTMLElement;
  if (btn.tagName !== 'BUTTON') return;
  page = Number(btn!.dataset.id);
  document.querySelector('.btn.active')!.classList.remove('active');
  btn.classList.add('active');
  arrVacency = vacancyArr.slice(5 * page, 5 * page + 5);
  renderListVacacy(listHTML, arrVacency);
}

function filterSerach(e: SubmitEvent) {
  e.preventDefault();
  const forma = new FormData(formHTML);
  let vacancy = vacancyArr;
  for (const [name, value] of forma) {
    switch (name) {
      case 'search': {
        if (value === '') break;
        vacancy = vacancy.filter((item) => item['job-name'].includes(value));
        break;
      }
      case 'salary': {
        if (value === '') break;
        vacancy = vacancy.filter(
          ({ salary }) => parseInt(salary) > Number(value)
        );
        break;
      }

      case 'isSalary': {
        vacancy = vacancy.filter(({ salary }) => salary);
        break;
      }
    }

    page = 1;
    if (vacancy.length >= 6) {
      vacancy = vacancy.slice(5 * page, 5 * page + 5);
    }
    renderListVacacy(listHTML, vacancy);
    countBtn = Math.floor(vacancy.length / 5);
    paginationBtn(paginationHTML, countBtn, page);
  }
}

paginationHTML.addEventListener('click', togglePage);
formHTML.addEventListener('submit', filterSerach);
