import React, { useState } from "react";

import { Search } from "../../icons/outline/Search";

import './SearchTextField.css';

interface SearchTextFieldProps {
    title?: string;
    setTextSearch: React.Dispatch<React.SetStateAction<string>>;
    isActive?: boolean;
}

export const SearchTextField: React.FC<SearchTextFieldProps> = ({
    title='Buscar',
    isActive=true,
    setTextSearch
}) => {

    const [placeholder, setPlaceholder] = useState(title);

    const handleOnChange = (e:any) => {
        setTextSearch(e.target.value);
    } 

    const onClick = () => {
        if(placeholder.length === 0) {
            setPlaceholder('Buscar')
        } else if(placeholder === 'Buscar') {
            setPlaceholder('');
        }         
    }

    return (
        <div className={placeholder.length>0?'searchTextField-container':'searchTextField-min'} >
            <Search style={{display: 'flex'}} onClick={isActive ? onClick: ()=>{}}/>
            {placeholder.length>0 && <input onChange={(e) => handleOnChange(e)} className='searchTextField-input paragraph-header' type='text' placeholder={placeholder} />}
        </div>
    )
}