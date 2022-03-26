import React, { useState } from "react";

import { StyleButton } from "../StyleButton/StyleButton";

import {INLINE_STYLES} from '../../../@types/TextFieldEditInlineStyle';

interface InlineStyleControlsProps {
    editorState: any;
    onToggle: (e:any) => void;
}

export const InlineStyleControls: React.FC<InlineStyleControlsProps> = ({
    editorState,
    onToggle
}) => {

    const currentStyle = editorState.getCurrentInlineStyle();
   
    return (
        <div className="textFieldEditor-controls__style ">
            {INLINE_STYLES.map((type) => {
                return (
                    <StyleButton 
                        key={type.label}
                        active={currentStyle.has(type.style)}
                        label={type.simbol}
                        onToggle={onToggle}
                        style={type.style}
                        className="textFieldEditor-controls__style-block"
                    />
                )
            })}
        </div>
    )
}