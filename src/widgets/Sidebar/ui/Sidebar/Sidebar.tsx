
import styles from './Sidebar.module.scss';
import {customClasses} from "../../../../shared/lib/customClasses/customClasses.ts";
import {useState} from "react";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={customClasses(styles.Sidebar, { [styles.collapsed]: collapsed }, [className!])}
        >
            <button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
            >
                {collapsed ? '>' : '<'}
            </button>
        </div>
    );
};
