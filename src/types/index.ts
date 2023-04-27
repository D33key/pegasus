export interface ListOfItem {
    id: number;
    title: string;
    svg: JSX.Element;
    category?: Menu;
    link?: string;
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

export const enum PageName {
    COMMON = "/common",
    SECURITY = "/security",
    PRIVATY = "/privaty",
    NOTIFY = "/notify",
    MANAGE = "/manage",

    AUTO = "/auto",
    AIRPLANE = "/airplane",
    TRAIN = "/train",
    STEAMBOAT = "/steamboat",
    MOTO = "/moto",
    SCOOTER = "/scooter",

    SUMMARY = "/summary",
    ARRIVAL = "/arrival",
    STATISTICS = "/statistics",
    WHERE = "/where",
    GOAL = "/goal",
    SPENDING = "/spending",
    COMPARISON_TERRITORY = "/comparison-territory",
    COMPARISON_PERIODS = "/comparison-periods",
    HEAT_MAP = "/heat-map",
}

export type Menu =
    | MenuName.SETTINGS
    | MenuName.TRANSPORT
    | MenuName.PEOPLE
    | MenuName.ENERGY
    | MenuName.WATER;
