import React from "react";


interface ItemTurnProps {
    id: number,
    item: string;
    img: string;
    owner: boolean;
    setItem: (e: string) => void;
    setImg: (e: string) => void;
    setOwner: (e: boolean) => void;
    setUser: (e: number) => void;
}

export const ItemTurn: React.FC<ItemTurnProps> = ({
    id,
    item,
    img,
    owner,
    setItem,
    setImg,
    setOwner,
    setUser
}) => {

    return (
        <div className="dropdownTurn-list__item"
            onClick={()=> {
                setItem(item);
                setImg(img);
                setOwner(owner);
                setUser(id);
        }}>
            <img className="itemTurn-img" src={img} alt='' />
            <div className="itemTurn-row smalltext-header"> {item} </div>
        </div>
    )
}