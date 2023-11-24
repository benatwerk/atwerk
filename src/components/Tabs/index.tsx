import React, { FC, useState, ReactElement } from "react";
import classNames from "classnames";
import styles from "./Tabs.module.scss";

interface TabProps {
    label?: string;
    children: React.ReactNode;
}

interface TabsProps {
    children: ReactElement<TabProps>[];
}

// So I like traditional function syntax but linters are just more fogiving of arrow functions
// but seriously, try doing this with something like
// `function Tab(props: TabProps): React.ReactElement | null { ... }`
// go ahead!
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
        <>
            <ul className={styles.tabs}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={classNames(styles.tab, {
                            [styles.active]: activeTab === index,
                        })}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className={styles.tabContent}>{tabs[activeTab].content}</div>
        </>
    );
};
