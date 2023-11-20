import { useEffect } from "react";
import { HomePage, AboutPage, DrivePage, CodePage, AssistPage } from "@/pages";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from "react-router-dom";
import classNames from "classnames";
import {
    HomeIcon,
    AboutIcon,
    DriveIcon,
    CodeIcon,
    AssistIcon,
} from "@/components/Icons";
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
            path: "/",
            icon: <HomeIcon />,
            element: <HomePage />,
        },
        {
            name: "about",
            label: "About",
            alt: "About me",
            icon: <AboutIcon />,
            element: <AboutPage />,
        },
        {
            name: "drive",
            label: "Drive",
            alt: "I will drive you",
            icon: <DriveIcon />,
            element: <DrivePage />,
        },
        {
            name: "code",
            label: "Code",
            alt: "I can code",
            icon: <CodeIcon />,
            element: <CodePage />,
            disabled: true,
        },
        {
            name: "assist",
            label: "Assist",
            alt: "Personal assistance",
            icon: <AssistIcon />,
            element: <AssistPage />,
            disabled: true,
        },
    ];
    return (
        <>
            <nav className={styles.navigation}>
                {nav.map(({ name, label, alt, icon, disabled }) => {
                    return (
                        <Link
                            key={name}
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
                {nav.map(({ name, path, element }) => (
                    <Route path={path || `/${name}`} element={element} />
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
