import React, {useRef, useState} from "react";
import { Dropdown } from "../..";

import {StyleSelect} from './StyleSelect';
import {StyleList} from './styleList';

interface StyleDropDownProps {
    title: string;
    content: any[];
    active: any;
    value: string;
    onToggle: (e:string) => void;
    setValue: (e: string) => void;
}

export const StyleDropdown: React.FC<StyleDropDownProps> = ({
    title,
    content,
    active,
    // style,
    value,
    onToggle,
    setValue
}) => {


    const [itemText, setItemText] = useState('Normal');

    const selectRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLSpanElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const __onToggle = (e:any, style: string, label: string) => {
        e.preventDefault();
        onToggle(style);

        label===value ? setValue('Normal') : setValue(label);

    }

    const onClickDown = () =>{
        selectRef.current?.classList.contains('styleDropdown-options-show') ? 
        selectRef.current?.classList.remove('styleDropdown-options-show'): 
        selectRef.current?.classList.toggle('styleDropdown-options-show');
    }


    const handleDropdown = () => {
        // setItemText(title);
        selectRef.current?.classList.toggle("style-select__click");
        listRef.current?.classList.toggle("styleDropdown-show");

        itemRef.current?.classList.toggle('style-dropdown-no-transform');
    };

    const setItem = (e: any, item: string, style: string) => {
        e.preventDefault();
        onToggle(style);

        item===value ? setValue('Normal') : setValue(item);
       
        listRef.current?.classList.remove("styleDropdown-show");
        selectRef.current?.classList.remove("style-select__click");
        itemRef.current?.classList.remove('style-dropdown-no-transform');

    };

    return (
        <div className="styleDropdown-container">
            <StyleSelect 
                title={title}
                itemText={value}
                itemRef={itemRef}
                selectRef={selectRef}
                handleDropdown={handleDropdown}
            />
            <StyleList
                elements={content}
                listRef={listRef}
                setItem={setItem}
                active={active}
            />


            {/* <div className="styleDropdown-header" onClick={onClickDown}>
                <div className="styleDropdown-header-text">
                    <div className="tinytext">{title}</div>
                    <div className="tinytext-header">{value}</div>
                </div>
                <img  src="/images/dropdown-arrow.png" alt={title} />
           </div>
            <div className="styleDropdown-options" ref={selectRef}>
                {
                    content.map(c => 
                        <div 
                            key={c.label} 
                            className={"tinytext-header"+(active === c.style ? ' textFieldEditor__active': '')}
                            onClick={(e) =>__onToggle(e, c.style, c.label)}
                        >
                            {c.label}
                        </div>
                    )
                }
            </div> */}
        </div>
    )
}