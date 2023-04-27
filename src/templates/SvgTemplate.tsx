import { useRef } from 'react';

type SvgTemplate = {
    svg: React.ReactNode;
    cl?: string;
    handleClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const SvgTemplate = ({ svg, cl, handleClick }: SvgTemplate) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className={cl && cl}
            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                if (handleClick) {
                    handleClick(e);
                }
            }}
        >
            {svg}
        </div>
    );
};

export default SvgTemplate;
