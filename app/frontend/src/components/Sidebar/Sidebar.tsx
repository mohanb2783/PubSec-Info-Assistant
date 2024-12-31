import { useState } from "react";
import { FaComments, FaCalculator, FaTable } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { ChatMode, GetFeatureFlagsResponse } from "../../api";
import { BuildingMultipleFilled, ChatSparkleFilled, GlobeFilled } from "@fluentui/react-icons";

interface NavLinkItem {
    name: string;
    icon: JSX.Element;
    path: string;
    value: ChatMode;
}

interface SidebarProps {
    featureFlags?: GetFeatureFlagsResponse;
    onChatModeChange: (_ev: any) => void;
    defaultValue?: ChatMode;
}

const Sidebar: React.FC<SidebarProps> = ({ featureFlags, onChatModeChange, defaultValue }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedTab, setSelectedTab] = useState<ChatMode | undefined>(defaultValue);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleTabClick = (value: ChatMode) => {
        setSelectedTab(value);
        onChatModeChange({ target: { value } });
    };

    const navLinks: NavLinkItem[] = [
        {
            name: "Work Only",
            icon: <BuildingMultipleFilled className={styles.pageIcons} />,
            path: "/chat",
            value: ChatMode.WorkOnly
        },
        {
            name: "Work + Web",
            icon: <GlobeFilled  aria-hidden="true" className={styles.pageIcons} />,
            path: "/tutor",
            value: ChatMode.WorkPlusWeb
        },
        {
            name: "Talk to GenAI",
            icon: <ChatSparkleFilled aria-hidden="true" className={styles.pageIcons} />,
            path: "/tda",
            value: ChatMode.Ungrounded
        }
    ];

    const filteredNavLinks = navLinks.filter(link => {
      // have to made featureflags false as !featureflag for final code to handle api logic
        if (link.value === ChatMode.WorkPlusWeb && !featureFlags?.ENABLE_WEB_CHAT) return false;
        if (link.value === ChatMode.Ungrounded && !featureFlags?.ENABLE_UNGROUNDED_CHAT) return false;
        return true;
    });

    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
            <div className={styles.brand}>
                <div onClick={toggleSidebar} className={styles.menu}>
                    {isCollapsed ? <TbLayoutSidebarLeftExpand className={styles.menuIcon} /> : <TbLayoutSidebarLeftCollapse className={styles.menuIcon} />}
                </div>
            </div>
            <div className={styles.navList}>
                {filteredNavLinks.map(link => (
                    <span key={link.name}>
                        <span className={`${styles.navLink} ${selectedTab === link.value ? styles.selected : ""}`} onClick={() => handleTabClick(link.value)}>
                            {link.icon}
                            {!isCollapsed && <span>{link.name}</span>}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
