import { useState } from "react";

import SvgTemplate from "@/templates/SvgTemplate";

import Energy from "./assets/Energy";
import Logo from "./assets/Logo";
import Notify from "./assets/Notify";
import People from "./assets/People";
import Settings from "./assets/Settings";
import Transport from "./assets/Transport";
import Water from "./assets/Water";

import cl from "./Navigation.module.css";
import { ListOfItem } from '@/types';
import InnerMenu from './InnerMenu/InnerMenu';
import Profile from '../Profile/Profile';

const listOfNavigation: ListOfItem[] = [
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

const listOfSettings: ListOfItem[] = [
    {
        id: 0,
        title: "Общее",
        svg: Logo,
    },
    {
        id: 1,
        title: "Безопасность",
        svg: Logo,
    },
    {
        id: 2,
        title: "Приватность",
        svg: Logo,
    },
    {
        id: 3,
        title: "Уведомления",
        svg: Logo,
    },
    {
        id: 4,
        title: "Управление доступом",
        svg: Logo,
    },
];

const Navigation = () => {
    const [isOpened, setIsOpened] = useState(false);
    function handleClick() {
        setIsOpened((prev) => !prev);
    }
    return (
        <nav className={cl.nav}>
            <header className={cl.header}>
                <div className={cl.logo}>
                    <SvgTemplate key="Logo" svg={Logo} /> <span>pegasus</span>
                </div>
                <div className={cl.accountInfo}>
                    <SvgTemplate svg={Notify} key="Notification" />
                    <SvgTemplate
                        handleClick={handleClick}
                        svg={Settings}
                        key="Settings"
                    />
                </div>
            </header>
            <div className={`${cl.settings} ${isOpened ? `${cl.active}` : ""}`}>
                <InnerMenu title="Профиль" list={listOfSettings} />
            </div>
            <ul className={cl.list}>
                {listOfNavigation.map((name) => (
                    <li className={cl.item} key={name.id}>
                        <SvgTemplate key={name.id} svg={name.svg} />
                        <p>{name.title}</p>
                    </li>
                ))}
            </ul>
            <Profile name="ivan ivanov" workplace="marketing" />
        </nav>
    );
};

export default Navigation;
