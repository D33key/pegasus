type SvgTemplate = {
    svg: React.ReactNode;
    cl?: string;
};

const SvgTemplate = ({ svg, cl }: SvgTemplate) => (
    <div className={cl ? `${cl}` : ""}>{svg}</div>
);

export default SvgTemplate;
