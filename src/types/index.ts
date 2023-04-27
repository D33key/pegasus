export interface ListOfItem {
    id: number;
    title: string;
    svg: JSX.Element;
    category?: Menu;
}

export interface Category {
    category: string;
    menuItems: ListOfItem[];
}

export const enum MenuName {
    SETTINGS = "settings",
    TRANSPORT = "transport",
    PEOPLE = "people",
    ENERGY = "energy",
    WATER = "water",
}

export type Menu =
    | MenuName.SETTINGS
    | MenuName.TRANSPORT
    | MenuName.PEOPLE
    | MenuName.ENERGY
    | MenuName.WATER;
