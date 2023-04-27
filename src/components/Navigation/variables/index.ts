import { ListOfItem, Menu, MenuName } from '@/types';

import Transport from "../assets/menuSVGs/Transport";
import Water from "../assets/menuSVGs/Water";
import People from "../assets/menuSVGs/People";
import Energy from "../assets/menuSVGs/Energy";
import Common from '../assets/settingsSVGs/Common';
import Security from '../assets/settingsSVGs/Security';
import Privaty from '../assets/settingsSVGs/Privaty';
import Notify from '../assets/Notify';
import Manage from '../assets/settingsSVGs/Manage';

// Menus
export const SETTINGS: Menu = MenuName.SETTINGS;
export const listOfSettings: ListOfItem[] = [
    {
        id: 0,
        title: "Общее",
        svg: Common,
    },
    {
        id: 1,
        title: "Безопасность",
        svg: Security,
    },
    {
        id: 2,
        title: "Приватность",
        svg: Privaty,
    },
    {
        id: 3,
        title: "Уведомления",
        svg: Notify,
    },
    {
        id: 4,
        title: "Управление доступом",
        svg: Manage,
    },
];

export const TRANSPORT: Menu = MenuName.TRANSPORT;


export const PEOPLE: Menu = MenuName.PEOPLE;
export const listOfPeople: ListOfItem[] = [
    {
        id: 0,
        title: "Сводная информация",
        svg: Common,
    },
    {
        id: 1,
        title: "Время пребывания",
        svg: Security,
    },
    {
        id: 2,
        title: "Соц.-дем. хар-ки",
        svg: Privaty,
    },
    {
        id: 3,
        title: "Откуда приехали",
        svg: Notify,
    },
    {
        id: 4,
        title: "Цель посещения",
        svg: Manage,
    },
    {
        id: 5,
        title: "Траты",
        svg: Manage,
    },
    {
        id: 6,
        title: "Сравнение территорий",
        svg: Manage,
    },
    {
        id: 7,
        title: "Сравнение периодов",
        svg: Manage,
    },
    {
        id: 8,
        title: "Тепловая карта",
        svg: Manage,
    },
];

export const ENERGY: Menu = MenuName.ENERGY;


export const WATER: Menu = MenuName.WATER;




export const listOfNavigation: ListOfItem[] = [
    {
        id: 0,
        title: "Транспорт",
        svg: Transport,
        category: MenuName.TRANSPORT,
    },
    {
        id: 1,
        title: "Население",
        svg: People,
        category: MenuName.PEOPLE,
    },
    {
        id: 2,
        title: "Электричество",
        svg: Energy,
        category: MenuName.ENERGY,
    },
    {
        id: 3,
        title: "Вода",
        svg: Water,
        category: MenuName.WATER,
    },
];


