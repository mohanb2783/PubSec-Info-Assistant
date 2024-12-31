// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ITextStyles, Text } from "@fluentui/react";
import { Options24Filled } from "@fluentui/react-icons";
const textStyles: Partial<ITextStyles> = { 
    root:{
        color:'navy'
    },
    
}    

import styles from "./SettingsButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
}

export const SettingsButton = ({ className, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
            <Options24Filled />
            <Text styles={textStyles}>{"Adjust"}</Text>
        </div>
    );
};
