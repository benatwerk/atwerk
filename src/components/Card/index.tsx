import React, { ReactNode } from "react";
import { LinkIcon } from "@/components/Icons";
import styles from "./Card.module.scss";

interface CardProps {
    backgroundStyle?: React.CSSProperties;
    href?: string;
    children: ReactNode | ReactNode[];
}

interface CardHeaderProps {
    backgroundStyle: React.CSSProperties;
}

const CardHeader: React.FC<CardHeaderProps> = ({ backgroundStyle }) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header} style={backgroundStyle}></div>
        </div>
    );
};

interface CardTitleProps {
    children: ReactNode | ReactNode[];
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
    return <div className={styles.title}>{children}</div>;
};

interface CardContentProps {
    children: ReactNode | ReactNode[];
}
const CardContent: React.FC<CardContentProps> = ({ children }) => {
    return <div className={styles.content}>{children}</div>;
};

const Card: React.FC<CardProps> = ({ backgroundStyle, href, children }) => {
    const Tag = href ? "a" : "div";
    const tagProps = href ? { href, target: "_new", title: href } : {};
    return (
        <Tag className={styles.card} {...tagProps}>
            {backgroundStyle ? (
                <CardHeader backgroundStyle={backgroundStyle} />
            ) : null}
            <div className={styles.contentContainer}>{children}</div>
            {href ? (
                <div className={styles.linkOverlay}>
                    <LinkIcon />
                </div>
            ) : null}
        </Tag>
    );
};

export { Card, CardContent, CardTitle };
