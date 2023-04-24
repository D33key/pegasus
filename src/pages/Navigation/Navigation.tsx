import React from "react";
import Logo from "./assets/Logo";
import cl from "./Navigation.module.css";

const listOfNavigation = ["Транспорт", "Население", "Электричество", "Вода"];

const Navigation = () => {
    return (
        <nav className={cl.nav}>
            <header className={cl.header}>
                <div className={cl.logo}>
                    <Logo /> <span>pegasus</span>
                </div>
                <div>Dops</div>
            </header>
            <ul className={cl.list}>
                {listOfNavigation.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <div className={cl.profile}>Profile</div>
        </nav>
    );
};

export default Navigation;
