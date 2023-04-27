import SvgTemplate from "@/templates/SvgTemplate";
import { ListOfItem } from "@/types";
import Link from "next/link";
import cl from "./InnerMenu.module.css";

type InnerMenu = {
    title: string;
    list: ListOfItem[];
};

const InnerMenu = ({ title, list }: InnerMenu) => {
    return (
        <div className={cl.wrapper}>
            <h3 className={cl.title}>{title}</h3>
            <ul className={cl.list}>
                {list.map((item) => (
                    <li key={item.title}>
                        <Link
                            href={`${item.link}`}
                            className={cl.itemWrapper}
                        >
                            <SvgTemplate
                                key={item.title}
                                svg={item.svg}
                                cl={cl.svg}
                            />
                            <p key={item.id}>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InnerMenu;
