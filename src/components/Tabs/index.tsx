import React, { FC, useState, ReactElement } from "react";
import styles from "./Tabs.module.scss";

interface TabProps {
    label?: string;
    children: React.ReactNode;
}

interface TabsProps {
    children: ReactElement<TabProps>[];
}

export const Tab: FC<TabProps> = () => {
    return null;
};

export const Tabs: FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = React.Children.map(children, (child, index) => ({
        label: child.props.label || `Tab ${index + 1}`,
        content: child.props.children,
    }));

    return (
        <div>
            <ul className={styles.tabTitles}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={
                            activeTab === index ? `${styles.active}` : ""
                        }
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className={styles.tabContent}>{tabs[activeTab].content}</div>
        </div>
    );
};
