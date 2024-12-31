// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { useState } from "react";
import { IPivotStyles, Pivot, PivotItem } from "@fluentui/react";
import { ITag } from "@fluentui/react/lib/Pickers";
import { FilePicker } from "../../components/filepicker/file-picker";
import { FileStatus } from "../../components/FileStatus/FileStatus";
import { TagPickerInline } from "../../components/TagPicker/TagPicker";
import { FolderPicker } from "../../components/FolderPicker/FolderPicker";
import { SparkleFilled, DocumentPdfFilled, DocumentDataFilled, GlobePersonFilled, MailFilled, StoreMicrosoftFilled } from "@fluentui/react-icons";
import styles from "./Content.module.css";
import ConnectDatabase from "../../components/ConnectDataBase/ConnectDatabase";
import { Typewriter } from "react-simple-typewriter";

const pivotItemStyles: Partial<IPivotStyles> = {
    link: {
        color: "navy", // Normal state color
        fontSize: "14px",
        borderRadius: "10px",
        fontWeight: "bold"
    },
    linkIsSelected: {
        color: "darkblue", // Selected state color
        fontWeight: "bolder"
    }
};


const supportedFilesWithOutIcons: string[] = ["Data", "Productivity Software", "PDF", "Web", "Email"];

const supportedFileTypes = [
    {
        icon: <DocumentDataFilled fontSize="40px" primaryFill="rgba(115, 118, 225, 1)" aria-hidden="true" aria-label="Data" />,
        title: "Data",
        description: "xml, json, csv, tsv, txt"
    },
    {
        icon: <StoreMicrosoftFilled fontSize="40px" primaryFill="rgba(115, 118, 225, 1)" aria-hidden="true" aria-label="Microsoft 365" />,
        title: "Productivity Software",
        description: "pptx, docx & xlsx"
    },
    {
        icon: <DocumentPdfFilled fontSize="40px" primaryFill="rgba(115, 118, 225, 1)" aria-hidden="true" aria-label="PDF" />,
        title: "PDF",
        description: (
            <>
                For page count maximum check documentation{" "}
                <a href="https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept-layout?view=doc-intel-4.0.0#input-requirements">
                    here
                </a>
            </>
        )
    },
    {
        icon: <GlobePersonFilled fontSize="40px" primaryFill="rgba(115, 118, 225, 1)" aria-hidden="true" aria-label="Web" />,
        title: "Web",
        description: "htm & html"
    },
    {
        icon: <MailFilled fontSize="40px" primaryFill="rgba(115, 118, 225, 1)" aria-hidden="true" aria-label="Email" />,
        title: "Email",
        description: "eml & msg"
    }
];

export interface IButtonExampleProps {
    disabled?: boolean;
    checked?: boolean;
}

const Content = () => {
    const [selectedKey, setSelectedKey] = useState<string | undefined>(undefined);
    const [selectedTags, setSelectedTags] = useState<string[] | undefined>(undefined);
    const [selectedApproach, setSelectedApproach] = useState<number | undefined>(undefined);

    const onSelectedKeyChanged = (selectedFolder: string[]) => {
        setSelectedKey(selectedFolder[0]);
    };

    const onSelectedTagsChanged = (selectedTags: ITag[]) => {
        setSelectedTags(selectedTags.map(tag => tag.name));
    };

    const onSelectedApproach = (approach: number) => {
        setSelectedApproach(approach);
        alert(approach);
    };

    const handleLinkClick = (item?: PivotItem) => {
        setSelectedKey(undefined);
    };

    return (
        <div className={styles.contentArea}>
            <Pivot aria-label="Upload Files Section" styles={pivotItemStyles} className={styles.topPivot} onLinkClick={handleLinkClick}>
                <PivotItem headerText="Upload Files" aria-label="Upload Files Tab">
                    <div className={styles.App}>
                        {/* document supported section  */}
                        <div>
                            <SparkleFilled fontSize="40px" primaryFill="navy" aria-hidden="true" aria-label="Supported File Types" />
                            <h1 className={styles.EmptyStateTitle}>Supported file types</h1>
                            <span className={styles.EmptyObjectives}>
                                The Information Assistant agent template currently supports the following file types:
                            </span>
                            <div className={styles.supportedFilesTypewriter}>
                                <Typewriter
                                    words={supportedFilesWithOutIcons}
                                    loop
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={30}
                                    delaySpeed={1000}
                                />
                            </div>

                            {/* <span className={styles.supportedFilesList}> */}

                            {/* Previous version of the supported files with cards */}
                            {/* {supportedFileTypes.map((item, index) => (
                                    <span key={index} className={styles.supportedFiles}>
                                        {item.icon}
                                        <span className={styles.EmptyObjectivesListItemText}>
                                            <b>{item.title}</b>
                                            <br />
                                            {item.description}
                                        </span>
                                    </span>
                                ))} */}
                            {/* </span> */}
                        </div>

                        <div className={styles.EmptyObjectivesListItem}>
                            <div className={styles.FolderAndFilePicker}>
                                <FolderPicker allowFolderCreation={true} onSelectedKeyChange={onSelectedKeyChanged} />

                                <TagPickerInline allowNewTags={true} onSelectedTagsChange={onSelectedTagsChanged} />
                            </div>

                            <FilePicker folderPath={selectedKey || ""} tags={selectedTags || []} />
                        </div>

                        {/* document supported section 
                        <div style={{ marginBottom: "20px"}}>
                            <SparkleFilled fontSize="60px" primaryFill="rgba(115, 118, 225, 1)" aria-hidden="true" aria-label="Supported File Types" />
                            <h1 className={styles.EmptyStateTitle}>Supported file types</h1>
                            <span className={styles.EmptyObjectives}>
                                The Information Assistant agent template currently supports the following file types:
                            </span>
                            <span className={styles.supportedFilesList}>
                                {supportedFileTypes.map((item, index) => (
                                    <span key={index} className={styles.supportedFiles}>
                                        {item.icon}
                                        <span className={styles.EmptyObjectivesListItemText}>
                                            <b>{item.title}</b>
                                            <br />
                                            {item.description}
                                        </span>
                                    </span>
                                ))}
                            </span>
                        </div> */}
                    </div>
                </PivotItem>
                {/* database connection pivot item */}
                <PivotItem headerText="Database Connection" aria-label="Database Connection Tab">
                    <ConnectDatabase />
                </PivotItem>

                {/* upload status pivot item */}
                <PivotItem headerText="Upload Status" aria-label="Upload Status Tab">
                    <FileStatus className="" />
                </PivotItem>
            </Pivot>
        </div>
    );
};

export default Content;
