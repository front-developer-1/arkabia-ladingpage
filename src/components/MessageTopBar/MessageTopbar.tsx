import React from 'react';
 
/* import components */
import { SearchTextField } from '../SearchTextField/SearchTextField';
import { UserActive } from '..';
import { DropdownTurn } from '../Dropdown/Turn/DropdownTurn';


/** import style */
import './MessageTopbar.css';

/** variables de interface */
interface MessageTopbarProps {
    searchText: string; // texto de busqueda
    team: any[]; // array de equipo de trabajo
    typeChat: string; // tipo o nivel del chat
    setSearchText: React.Dispatch<React.SetStateAction<string>>; // metodo setter del texto a buscar
}

/**
 * componente MessageTopBar
 *  
 */
export const MessageTopbar: React.FC<MessageTopbarProps> = ({
    searchText,
    team,
    typeChat,
    setSearchText
}) => {
    return (
        <div className='messageTopBar-main'>
            <div className='messageTopBar-users'>
                <SearchTextField 
                    title={searchText}
                    setTextSearch={setSearchText}
                    isActive={false}
                />
                <div className='messageTopBar-user_main'>
                    <div className='smalltext-header messageTopBar-colorText'>Miembros</div>
                    {team.length>0 && team.map((t, idx) => {
                        return (
                            <UserActive 
                                key={idx}
                                isConnected={t.isConnected}
                                userImg={t.img}
                                username={t.name}
                            />
                        )
                    })}
                    <div className='messageTopBar-user_main--imageIcon'>
                        <img src='/images/imagen_icon.svg' alt='' />
                    </div>
                    <div className='messageTopBar-user_main-mobile'>
                        <img src='/images/multiUsers.svg' />
                    </div>         
                </div>
                <div className='messageTopBar-user--typeChat smalltext-header '>
                    {typeChat}
                </div>
            </div>
            <div className='messageTopBar-user-active'>
                <DropdownTurn
                    content={team}
                    setUSerActive={()=>{}}
                    userActive={1}
                    title="Elige un turno"
                    disabled={true}
                />
            </div>
        </div>
    )
}