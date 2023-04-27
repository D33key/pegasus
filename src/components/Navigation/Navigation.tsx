import { useState } from "react";
import SvgTemplate from "@/templates/SvgTemplate";
import Logo from "./assets/Logo";
import Notify from "./assets/Notify";
import Settings from "./assets/Settings";
import cl from "./Navigation.module.css";
import InnerMenu from "./InnerMenu/InnerMenu";
import Profile from "../Profile/Profile";
import {
    ENERGY,
    listOfNavigation,
    listOfPeople,
    listOfSettings,
    PEOPLE,
    SETTINGS,
    TRANSPORT,
    WATER,
} from "./variables";
import { Category, Menu } from "@/types";

const Navigation = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [categoryState, setCategoryState] = useState<Category>({
        category: "",
        menuItems: [],
    });
    const [selectedCategory, setSelectedCategory] = useState<Menu | null>(null);

    const handleCategorySelect = (category: Menu) => {
        switch (category) {
            case SETTINGS:
                setCategoryState({
                    category: "Профиль",
                    menuItems: listOfSettings,
                });
                break;
            case TRANSPORT:
                setCategoryState({
                    category: "Транспорт",
                    menuItems: listOfSettings,
                });
                break;
            case PEOPLE:
                setCategoryState({
                    category: "Население",
                    menuItems: listOfPeople,
                });
                break;
            case ENERGY:
                setCategoryState({
                    category: "Электричество",
                    menuItems: listOfSettings,
                });
                break;
            case WATER:
                setCategoryState({
                    category: "Вода",
                    menuItems: listOfSettings,
                });
                break;
            default:
                setCategoryState({ category: "", menuItems: [] });
        }
    };

    function handleClickOnMainNavigation(
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        category: Menu
    ) {
        if (isOpened && selectedCategory !== category) {
            handleCategorySelect(category);
            setSelectedCategory(category);
        } else {
            setIsOpened((prev) => !prev);
            handleCategorySelect(category);
            setSelectedCategory(category);
        }
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
                        handleClick={(
                            e: React.MouseEvent<HTMLElement, MouseEvent>
                        ) => handleClickOnMainNavigation(e, SETTINGS)}
                        svg={Settings}
                        key="Settings"
                    />
                </div>
            </header>
            <div className={`${cl.settings} ${isOpened ? `${cl.active}` : ""}`}>
                <InnerMenu
                    title={categoryState.category}
                    list={categoryState.menuItems}
                />
            </div>
            <ul className={cl.list}>
                {listOfNavigation.map((name) => (
                    <li
                        className={cl.item}
                        key={name.id}
                        onClick={(
                            e: React.MouseEvent<HTMLElement, MouseEvent>
                        ) => {
                            if (name.category)
                                return handleClickOnMainNavigation(
                                    e,
                                    name.category
                                );
                            else
                                throw new Error("Category should be included!");
                        }}
                    >
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
