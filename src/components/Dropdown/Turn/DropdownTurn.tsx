import React, { useEffect, useRef, useState } from "react";

import { SelectTurn } from "./SelectTurn";
import { ListTurn } from "./ListTurn";

import './DropdownTurn.css';

interface DropdownTurnProps {
    content: any[];
    userActive: number;
    title: string;
    disabled?: boolean;
    setUSerActive:React.Dispatch<React.SetStateAction<boolean>>;
}


export const DropdownTurn: React.FC<DropdownTurnProps> = ({
    content,
    title,
    userActive = 0,
    setUSerActive,
    disabled = false,
    ...props
}) => {

    const [itemText, setItemText] = useState(title);
    const [idUser, setIdUser] = useState(userActive);
    const [itemImg, setImgItem] = useState();
    const [itemOwner, setOwner] = useState(false);

    const selectRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleDropdown = () => {
        setItemText(title);

        selectRef.current?.classList.toggle("dropdownTurn-select__click");
        listRef.current?.classList.toggle("dropdownTurn-show");
        imgRef.current?.classList.toggle('selectTurn-hidden');
    }

    const setItem = (item: string) => {
        setItemText(item);
        
        selectRef.current?.classList.remove("dropdownTurn-select__click");
        listRef.current?.classList.remove("dropdownTurn-show");
        imgRef.current?.classList.remove('selectTurn-hidden');
    }

    const searchUser = (id: number) => {
        let user = content.filter(u => u.id === id);
        return user[0];
    }

    useEffect(() => {
        let user = searchUser(userActive);
        setItemText(user.name);
        setImgItem(user.img);
    }, [])

    return (
        <div className="dropdownTurn" >
            <SelectTurn
                title={itemText}
                handleDropdown={!disabled ? handleDropdown : ()=>{}}
                selectRef={selectRef}
                imgRef={imgRef}
                img={itemImg}
                owner={itemOwner}
                
            />
            <ListTurn 
                elements={content}
                listRef={listRef}
                setItem={setItem}
                setImgItem={setImgItem}
                setOwner={setOwner}
                setUser = {setIdUser}
            />
        </div>
    )
}