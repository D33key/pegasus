import cl from "./Profile.module.css";
import avatar from "./assets/avatar.png";
import Image from "next/image";

interface Props {
    name: string;
    workplace: string;
}

const Profile = ({ name, workplace }: Props) => {
    return (
        <div className={cl.profile}>
            <div className={cl.avatar}>
                <Image src={avatar} alt="Avatar" width={42} />
            </div>
            <div className={cl.info}>
                <p>{name}</p>
                <p>{workplace}</p>
            </div>
        </div>
    );
};

export default Profile;
