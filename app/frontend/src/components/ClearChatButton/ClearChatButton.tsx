// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ITextStyles, Text } from "@fluentui/react";
import { Broom24Regular } from "@fluentui/react-icons";
const textStyles: Partial<ITextStyles> = { 
    root:{
        color:'navy'
    },
    
}    
import styles from "./ClearChatButton.module.css";

interface Props {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export const ClearChatButton = ({ className, disabled, onClick }: Props) => {
    return (
        <div className={`${styles.container} ${className ?? ""} ${disabled && styles.disabled}`} onClick={onClick}>
            <Broom24Regular />
            <Text styles={textStyles}>{"Clear chat"}</Text>
        </div>
    );
};
