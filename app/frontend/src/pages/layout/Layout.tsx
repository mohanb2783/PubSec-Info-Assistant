// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Outlet, NavLink, Link } from "react-router-dom";
import k7 from "../../assets/k7.png";
import k72 from "../../assets/k72.png";
import { WarningBanner } from "../../components/WarningBanner/WarningBanner";
import styles from "./Layout.module.css";
import { Title } from "../../components/Title/Title";
import { getFeatureFlags, GetFeatureFlagsResponse } from "../../api";
import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";

export const Layout = () => {
    const [featureFlags, setFeatureFlags] = useState<GetFeatureFlagsResponse | null>(null);

    async function fetchFeatureFlags() {
        try {
            const fetchedFeatureFlags = await getFeatureFlags();
            setFeatureFlags(fetchedFeatureFlags);
        } catch (error) {
            // Handle the error here
            console.log(error);
        }
    }

    const navLinks = [
        {
            title: "Home",
            link: "/", // Home
            enabled:true
        },
        {
            title: "Chat",
            link: "/chat", // Home
            enabled:true
        },
        {
            title: "Manage Content",
            link: "/content",
            enabled:true
        },
        {
            title: "Math Assistant",
            link: "/tutor",
            enabled: true,  // for testing purposes it will be toggled by featureflags
            // preview: "(preview)",
            // enabled: featureFlags?.ENABLE_MATH_ASSISTANT,
        },
        {
            title: "Tabular Data Assistant",
            link: "/tda",
            enabled: true, // for testing purposes it will be toggled by featureflags
            // preview: "(preview)",
            // enabled: featureFlags?.ENABLE_TABULAR_DATA_ASSISTANT,
        },
    ]

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    return (
        <div className={styles.layout}>
            {/* <Sidebar /> */}
            <header className={styles.header} role={"banner"}>
                <WarningBanner />
                {/* <div className={styles.headerContainer}> */} 
                {/* <div className={styles.headerTitleContainer}>
                        <img src={k7} alt="Azure OpenAI" className={styles.headerLogo} />
                        <h3 className={styles.headerTitle}><Title /></h3>
                    </div>
                // <nav>
                //         <ul className={styles.headerNavList}>
                //             <li>
                //                 <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                //                     Chat
                //                 </NavLink>
                //             </li>
                //             <li className={styles.headerNavLeftMargin}>
                //                 <NavLink to="/content" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                //                     Manage Content
                //                 </NavLink>
                //             </li>
                //             {featureFlags?.ENABLE_MATH_ASSISTANT && (
                //                 <li className={styles.headerNavLeftMargin}>
                //                     <NavLink to="/tutor" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                //                         Math Assistant
                //                         <br />
                //                         <p className={styles.centered}>(preview)</p>
                //                     </NavLink>
                //                 </li>
                //             )}
                //             {featureFlags?.ENABLE_TABULAR_DATA_ASSISTANT && (
                //                 <li className={styles.headerNavLeftMargin}>
                //                     <NavLink to="/tda" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                //                         Tabular Data Assistant
                //                         <br />
                //                         <p className={styles.centered}>(preview)</p>
                //                     </NavLink>
                //                 </li>
                //             )}
                //         </ul>
                //     </nav>

                // {/* </div> */}

                {/* Side bar component */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarHeader}>
                        {/* <h2 className={styles.brand}>Brand</h2> */}
                        <img className={styles.brand} src={k7} alt="K7" />
                        <span className={styles.navbarTitleText}>
                        <Title/>
                        </span>
                    </div>
                    <nav style={{}}>
                        <div className={styles.navList}>
                        {navLinks.map((navLink,index) => {
                        if (navLink.enabled) {
                            return (
                                <span key={index} className={styles.navItem}>
                                    <NavLink  className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)} to={navLink.link}>{navLink.title}</NavLink>
                                    {/* <p className={styles.centered}>{navLink.preview}</p> */}
                                </span>
                            );
                        }
                    })}
                        </div>
                    </nav>
                  
                                        {/* <ul className={styles.navList}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul> */}
                </div>
            </header>
            <div className={styles.childComponentContainer}>
                <Outlet />
            </div>
            <footer>
                <WarningBanner />
            </footer>
        </div>
    );
};
