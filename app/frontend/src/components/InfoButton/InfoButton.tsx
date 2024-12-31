// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Text } from "@fluentui/react";
import { Info24Regular } from "@fluentui/react-icons";
import styles from "./InfoButton.module.css";
import { ITextStyles } from "@fluentui/react";

const textStyles: Partial<ITextStyles> = { 
    root:{
        color:'navy'
    },
    
}     


interface Props {
    className?: string;
    onClick: () => void;
}

export const InfoButton = ({ className, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
            <Info24Regular />
            <Text styles={textStyles}>{"Info"}</Text>
        </div>
    );
};
