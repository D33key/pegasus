import { ListOfItem, Menu, MenuName, PageName } from "@/types";

import Transport from "../assets/menuSVGs/Transport";
import Water from "../assets/menuSVGs/Water";
import People from "../assets/menuSVGs/People";
import Energy from "../assets/menuSVGs/Energy";
import Common from "../assets/settingsSVGs/Common";
import Security from "../assets/settingsSVGs/Security";
import Privaty from "../assets/settingsSVGs/Privaty";
import Notify from "../assets/Notify";
import Manage from "../assets/settingsSVGs/Manage";
import Summary from "../assets/peopleSVGs/Summary";
import Arrival from "../assets/peopleSVGs/Arrival";
import Statistics from "../assets/peopleSVGs/Statistics";

// Menus
export const SETTINGS: Menu = MenuName.SETTINGS;
export const listOfSettings: ListOfItem[] = [
    {
        id: 0,
        title: "Общее",
        svg: Common,
        link: PageName.COMMON,
    },
    {
        id: 1,
        title: "Безопасность",
        svg: Security,
        link: PageName.SECURITY,
    },
    {
        id: 2,
        title: "Приватность",
        svg: Privaty,
        link: PageName.PRIVATY,
    },
    {
        id: 3,
        title: "Уведомления",
        svg: Notify,
        link: PageName.NOTIFY,
    },
    {
        id: 4,
        title: "Управление доступом",
        svg: Manage,
        link: PageName.MANAGE,
    },
];

export const TRANSPORT: Menu = MenuName.TRANSPORT;
export const listOfTransport: ListOfItem[] = [
    {
        id: 0,
        title: "Автомобиль",
        svg: Summary,
        link: PageName.AUTO,
    },
    {
        id: 1,
        title: "Самолет",
        svg: Arrival,
        link: PageName.AIRPLANE,
    },
    {
        id: 2,
        title: "Поезд",
        svg: Statistics,
        link: PageName.TRAIN,
    },
    {
        id: 3,
        title: "Пароход",
        svg: Notify,
        link: PageName.STEAMBOAT,
    },
    {
        id: 4,
        title: "Мотоцикл",
        svg: Manage,
        link: PageName.MOTO,
    },
    {
        id: 5,
        title: "Самокат",
        svg: Manage,
        link: PageName.SCOOTER,
    },
];

export const PEOPLE: Menu = MenuName.PEOPLE;
export const listOfPeople: ListOfItem[] = [
    {
        id: 0,
        title: "Сводная информация",
        svg: Summary,
        link: PageName.SUMMARY,
    },
    {
        id: 1,
        title: "Время пребывания",
        svg: Arrival,
        link: PageName.ARRIVAL,
    },
    {
        id: 2,
        title: "Соц.-дем. хар-ки",
        svg: Statistics,
        link: PageName.STATISTICS,
    },
    {
        id: 3,
        title: "Откуда приехали",
        svg: Notify,
        link: PageName.WHERE,
    },
    {
        id: 4,
        title: "Цель посещения",
        svg: Manage,
        link: PageName.GOAL,
    },
    {
        id: 5,
        title: "Траты",
        svg: Manage,
        link: PageName.SPENDING,
    },
    {
        id: 6,
        title: "Сравнение территорий",
        svg: Manage,
        link: PageName.COMPARISON_TERRITORY,
    },
    {
        id: 7,
        title: "Сравнение периодов",
        svg: Manage,
        link: PageName.COMPARISON_TERRITORY,
    },
    {
        id: 8,
        title: "Тепловая карта",
        svg: Manage,
        link: PageName.HEAT_MAP,
    },
];

export const ENERGY: Menu = MenuName.ENERGY;
export const listOfEnegry: ListOfItem[] = [
    {
        id: 0,
        title: "Электрооборудование",
        svg: Summary,
        link: PageName.ELECTRIC_EQUIPMENT,
    },
    {
        id: 1,
        title: "Электроосвещение",
        svg: Arrival,
        link: PageName.ELECTRIC_LIGHTNING,
    },
    {
        id: 2,
        title: "Электроснабжение",
        svg: Statistics,
        link: PageName.ELECTROSUPPLY,
    },
    {
        id: 3,
        title: "Наружное освещение",
        svg: Notify,
        link: PageName.OUTDOOR_LIGHTNING,
    },
];

export const WATER: Menu = MenuName.WATER;
export const listOfWater: ListOfItem[] = [
    {
        id: 0,
        title: "По видам",
        svg: Summary,
        link: PageName.WATER_BY_TYPE,
    },
    {
        id: 1,
        title: "По охвату",
        svg: Arrival,
        link: PageName.WATER_BY_COVERAGE,
    },
    {
        id: 2,
        title: "По природным источникам",
        svg: Statistics,
        link: PageName.WATER_BY_NATURAL_SOURCES,
    },
    {
        id: 3,
        title: "По способам подачи",
        svg: Notify,
        link: PageName.WATER_BY_SUBMISSION_METHODS,
    },
];

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
