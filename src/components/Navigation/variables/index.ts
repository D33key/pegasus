import { ListOfItem } from '@/types';

import Transport from "../assets/menuSVGs/Transport";
import Water from "../assets/menuSVGs/Water";
import People from "../assets/menuSVGs/People";
import Energy from "../assets/menuSVGs/Energy";
import Common from '../assets/settingsSVGs/Common';
import Security from '../assets/settingsSVGs/Security';
import Privaty from '../assets/settingsSVGs/Privaty';
import Notify from '../assets/Notify';
import Manage from '../assets/settingsSVGs/Manage';


export const listOfNavigation: ListOfItem[] = [
    {
        id: 0,
        title: "Транспорт",
        svg: Transport,
    },
    {
        id: 1,
        title: "Население",
        svg: People,
    },
    {
        id: 2,
        title: "Электричество",
        svg: Energy,
    },
    {
        id: 3,
        title: "Вода",
        svg: Water,
    },
];

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
