import classnames from 'classnames';

type Props = {
    text: string,
    Icon: any,
    active?: boolean,
};

export default function SidebarMenuItem({ text, Icon, active }: Props) {
    const textClasses = classnames("hidden xl:inline", {
        "font-bold": active
    })
    
    return (
        <div className="hoverEffect flex items-center p-4 text-gray-800 justify-center xl:justify-start text-lg space-x-3" style={{ fontSize: '21px' }}>
            <Icon className="h-7" />
            <span className={textClasses} >{text}</span>
        </div>
    );
}