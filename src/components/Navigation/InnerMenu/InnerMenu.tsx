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
                {list.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
};

export default InnerMenu;
