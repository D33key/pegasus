import SvgTemplate from "@/templates/SvgTemplate";
import React from "react";
import Energy from "./assets/Energy";
import Logo from "./assets/Logo";
import Notify from "./assets/Notify";
import People from "./assets/People";
import Settings from "./assets/Settings";
import Transport from "./assets/Transport";
import Water from "./assets/Water";

import cl from "./Navigation.module.css";

const listOfNavigation = [
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

const Navigation = () => {
    return (
        <nav className={cl.nav}>
            <header className={cl.header}>
                <div className={cl.logo}>
                    <SvgTemplate key="Logo" svg={Logo} /> <span>pegasus</span>
                </div>
                <div className={cl.accountInfo}>
                    <SvgTemplate svg={Notify} key="Notification" />
                    <SvgTemplate svg={Settings} key="Settings" />
                </div>
            </header>
            <ul className={cl.list}>
                {listOfNavigation.map((name) => (
                    <li className={cl.item} key={name.id}>
                        <SvgTemplate key={name.id} svg={name.svg} />
                        {name.title}
                    </li>
                ))}
            </ul>
            <div className={cl.profile}>Profile</div>
        </nav>
    );
};

export default Navigation;
