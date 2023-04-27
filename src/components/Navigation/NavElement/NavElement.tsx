import SvgTemplate from "@/templates/SvgTemplate";
import { ListOfItem, Menu } from "@/types";
import React from "react";

import cl from "./NavElement.module.css";

interface NavElement {
    name: ListOfItem;
    selectedCategory: Menu | null;
    isOpened: boolean;
    handleClickOnMainNavigation(
        e: React.MouseEvent<HTMLElement, MouseEvent>,
        category: Menu
    ): void;
}

const NavElement = ({
    name,
    selectedCategory,
    isOpened,
    handleClickOnMainNavigation,
}: NavElement) => {
    return (
        <li
            className={`${cl.item} ${
                name.category === selectedCategory && isOpened ? cl.active : ""
            }`}
            key={name.id}
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                if (name.category)
                    return handleClickOnMainNavigation(e, name.category);
                else throw new Error("Category should be included!");
            }}
        >
            <SvgTemplate key={name.id} svg={name.svg} />
            <p>{name.title}</p>
        </li>
    );
};

export default NavElement;
