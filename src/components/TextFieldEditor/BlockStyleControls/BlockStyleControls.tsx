import React, { useState } from "react";

import { StyleButton } from "../StyleButton/StyleButton";
import { StyleDropdown } from "../StyleDropdown/StyleDropdown";
import { StyleDot } from "../StyleDots/StyleDot";

import { BLOCK_TYPES } from "../../../@types/TextFieldEditBlockTypes";

interface BlockStyleControlsProps {
    editorState: any;
    onToggle: (e:any) => void;
}

export const BlockStyleControls: React.FC<BlockStyleControlsProps> = ({
    editorState,
    onToggle
}) => {
    const [valueSize, setValueSize] = useState('Normal')
    const [activeDrop, setActiveDrop] = useState('');

    const selection = editorState.getSelection();
    const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

    return (
        <div className="textFieldEditor-block">
            <StyleDropdown
                title="Tamaño de texto" 
                value={valueSize}
                setValue={setValueSize}
                content={BLOCK_TYPES.textSize}
                onToggle={onToggle}
                active={blockType}
            />
            <StyleDot 
                onToggle={onToggle}
                style={BLOCK_TYPES.bullet[1].style}
            />
      </div>
    )
}