import React from "react";

import { ItemTurn } from "./ItemTurn";

interface ListTurnProps {
    elements: any[];
    listRef: React.RefObject<HTMLDivElement>;
    setItem: (item: string) => void;
    setImgItem: (e: any) => void;
    setOwner: (e: boolean) => void;
    setUser: (e: number) => void;
}

export const ListTurn: React.FC<ListTurnProps> = ( {
    elements,
    listRef,
    setItem,
    setImgItem,
    setOwner,
    setUser
}) => {
    return (
        <div className="dropdownTurn-list" ref={listRef}>
            {elements.length>0 && elements.map((e, idx) => {
                return (
                    <ItemTurn
                        key={idx}
                        id={e.id}
                        item={e.name}
                        img={e.img}
                        owner={e.owner}
                        setItem={setItem}
                        setImg={setImgItem}
                        setOwner={setOwner}
                        setUser={setUser}
                    />
                )
            })}
        </div>
    )
}