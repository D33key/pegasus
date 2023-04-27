import { useState } from "react";
import SvgTemplate from "@/templates/SvgTemplate";
import Logo from "./assets/Logo";
import Notify from "./assets/Notify";
import Settings from "./assets/Settings";
import cl from "./Navigation.module.css";
import InnerMenu from "./InnerMenu/InnerMenu";
import Profile from "../Profile/Profile";
import { listOfNavigation, listOfSettings } from './variables';

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
