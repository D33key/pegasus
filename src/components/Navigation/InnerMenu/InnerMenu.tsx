import SvgTemplate from "@/templates/SvgTemplate";
import { ListOfItem } from "@/types";
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
                    <div key={item.title} className={cl.itemWrapper}>
                        <SvgTemplate key={item.id} svg={item.svg} cl={cl.svg}/>
                        <li key={item.id}>{item.title}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default InnerMenu;
