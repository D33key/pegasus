import SvgTemplate from '@/templates/SvgTemplate';
import Document from './assets/Document';

const Welcome = () => {
    return (
        <div className="page-wrapper">
            <div className="top-content-page flex">
                <p>Добро пожаловать</p>
            </div>
            <div className="main">
                <div className="block">
                    <div>
                        <SvgTemplate svg={Document} />
                    </div>
                    <p>
                        Выберите категорию в левом меню, чтобы увидеть
                        подробности
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
