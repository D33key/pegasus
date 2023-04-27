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
    // Main settings pages
    COMMON = "/common",
    SECURITY = "/security",
    PRIVATY = "/privaty",
    NOTIFY = "/notify",
    MANAGE = "/manage",

    // Transport Pages
    AUTO = "/auto",
    AIRPLANE = "/airplane",
    TRAIN = "/train",
    STEAMBOAT = "/steamboat",
    MOTO = "/moto",
    SCOOTER = "/scooter",

    // People pages
    SUMMARY = "/summary",
    ARRIVAL = "/arrival",
    STATISTICS = "/statistics",
    WHERE = "/where",
    GOAL = "/goal",
    SPENDING = "/spending",
    COMPARISON_TERRITORY = "/comparison-territory",
    COMPARISON_PERIODS = "/comparison-periods",
    HEAT_MAP = "/heat-map",

    // Electricity pages
    ELECTRIC_EQUIPMENT = "/electric-equipment",
    ELECTRIC_LIGHTNING = "/electric lighting",
    ELECTROSUPPLY = "/electrosupply",
    OUTDOOR_LIGHTNING = "/outdoor-lighting",

    // Water pages
    WATER_BY_TYPE = "/water-by-type",
    WATER_BY_COVERAGE = "/water-by-coverage",
    WATER_BY_NATURAL_SOURCES = "/water-by-natural-sources",
    WATER_BY_SUBMISSION_METHODS = "/water-by-submission-methods",
}

export type Menu =
    | MenuName.SETTINGS
    | MenuName.TRANSPORT
    | MenuName.PEOPLE
    | MenuName.ENERGY
    | MenuName.WATER;
