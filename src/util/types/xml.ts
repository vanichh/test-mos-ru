export interface XMLTypes {
  'job-name': string;
  description: string;
  url: string;
  industry: string;
  salary: number | string;
  currency: Currency;
  schedule: Schedule;
  requirement: Requirement;
  region: Region;
  address: Address;
  creationDate: Date;
  'publish-date': Date;
  'real-publish-date': RealPublishDate;
  'update-date': Date;
  expires: Date;
  company: Company;
}

export interface Address {
  location: string;
  metro?: string[] | string;
  coordinates?: Coordinates;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface Company {
  name: string;
  description: string;
  inn: number;
  hrAgency: boolean;
}

export enum Currency {
  РубМес = 'руб./мес.',
}

export enum RealPublishDate {
  НетДанных = 'Нет данных',
}

export enum Region {
  МоскваИМосковскаяОбласть = 'Москва и Московская область',
}

export interface Requirement {
  education: Education;
  experience: Experience;
}

export enum Education {
  Высшее = 'высшее',
  ВысшееБакалавр = 'высшее (бакалавр)',
  Любое = 'любое',
  Среднее = 'среднее',
  СреднееПрофессиональное = 'среднее профессиональное',
}

export enum Experience {
  БезОпытаРаботы = 'без опыта работы',
  МенееГода = 'менее года',
  НеИмеетЗначения = 'не имеет значения',
  От1Года = 'от 1 года',
  От2Лет = 'от 2 лет',
  От3Лет = 'от 3 лет',
  От5Лет = 'от 5 лет',
  От6Лет = 'от 6 лет',
}

export enum Schedule {
  ПолныйРабочийДень = 'полный рабочий день',
  СменныйГрафик = 'сменный график',
  ЧастичнаяЗанятость = 'частичная занятость',
}
