import React, {useEffect, useRef} from "react";

import { Editor, EditorState, RichUtils} from 'draft-js'

import { BlockStyleControls } from "./BlockStyleControls/BlockStyleControls";
import { InlineStyleControls } from "./InlineStyleControls/InlineStyleControls";

import './TextFieldEditor.css'

interface TextFieldEditorProps {
    text: any;
    placeHolder: string;
    onChageText: (e:any)=> void;
    maxLength: number;
    saveTime: string
}

export const TextFieldEditor: React.FC<TextFieldEditorProps> = ({
    text,
    placeHolder,
    onChageText,
    maxLength,
    saveTime
}) => {

    const editor = React.useRef(null);

    const toggleBlockType = (blockType:any) => {
        onChageText(RichUtils.toggleBlockType(text, blockType));
    };
    
    const toggleInlineStyle = (inlineStyle:any) => {
        onChageText(RichUtils.toggleInlineStyle(text, inlineStyle));
    };
    
    const focusEditor= (ref:any) => {
        ref.current.focus();
    }

    const onChangeEditState = (e:any) => {
        const length = getNumCharacters();
        
        if(length<=maxLength) {
            onChageText(e);
        } else {
            console.log("supero maximo");
        }
    }

    const getNumCharacters = () => {
        return text.getCurrentContent().getPlainText('').length
    }
  

     return (
        <div className="textFieldEditor-container">
            <div className="textFieldEditor-blockquote" onClick={()=>focusEditor(editor)}>
                <Editor
                    editorState={text}
                    onChange={(e)=>onChangeEditState(e)}
                    placeholder={placeHolder}
                    ref={editor}
                    spellCheck={true}
                />
            </div>
            <div className="textFieldEditor-controls">
                <InlineStyleControls 
                    editorState={text}
                    onToggle={toggleInlineStyle}
                />
                <BlockStyleControls
                    editorState={text}
                    onToggle={toggleBlockType}
                />
                <div className="textFieldEditor-time">
                    <div className="smalltext">Guardado a las {saveTime}</div>
                    <div className="smalltext">{getNumCharacters()} / {maxLength}</div>
                </div>
            </div>
            
        </div>
    )
}