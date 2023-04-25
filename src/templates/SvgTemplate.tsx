type SvgTemplate = {
    svg: React.ReactNode;
    cl?: string;
    handleClick?: () => void;
};

const SvgTemplate = ({ svg, cl, handleClick }: SvgTemplate) => (
    <div className={cl && cl} onClick={handleClick}>
        {svg}
    </div>
);

export default SvgTemplate;
