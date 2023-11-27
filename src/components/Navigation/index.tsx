import { useEffect } from "react";
import { HomePage, DrivePage, VideoPage, CodePage } from "@/pages";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from "react-router-dom";
import classNames from "classnames";
import { HomeIcon, DriveIcon, CodeIcon, VideoIcon } from "@/components/Icons";
import styles from "./Navigation.module.scss";

function NavigationInner() {
    const location = useLocation();
    const path =
        location.pathname
            .replace(/[^a-zA-Z0-9]/g, "")
            .replace(/\s+/g, "-")
            .toLowerCase() || "home";

    useEffect(() => {
        document.body.id = `page-${path}`;
    }, [path]);

    const nav = [
        {
            name: "home",
            label: "Home",
            icon: <HomeIcon />,
            element: <HomePage />,
        },
        {
            name: "drive",
            label: "Drive",
            alt: "I will drive you",
            icon: <DriveIcon />,
            element: <DrivePage />,
        },
        {
            name: "video",
            label: "Video",
            alt: "I edit, manage and produce video",
            icon: <VideoIcon />,
            element: <VideoPage />,
        },
        {
            name: "code",
            label: "Code",
            alt: "I can code",
            icon: <CodeIcon />,
            element: <CodePage />,
            disabled: false,
        },
    ];
    return (
        <>
            <nav className={styles.navigation}>
                {nav.map(({ name, label, alt, icon, disabled }) => {
                    return (
                        <Link
                            key={`link-${name}`}
                            to={`/${name}`}
                            className={classNames({
                                [styles.active]: name === path,
                                [styles.disabled]: disabled,
                            })}
                            title={alt || label || name}
                        >
                            {icon} {label || name}
                        </Link>
                    );
                })}
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {nav.map(({ name, element }) => (
                    <Route
                        key={`route-${name}`}
                        path={`/${name}`}
                        element={element}
                    />
                ))}
            </Routes>
        </>
    );
}
function Navigation() {
    return (
        <Router>
            <NavigationInner />
        </Router>
    );
}

export default Navigation;
