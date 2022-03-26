import React, {useEffect, useRef} from "react";

// import styles
import './Tabs.css';

interface TabsProps {
    active?: boolean;
    titles: string[];
    content: React.ReactNode;
    setActiveTab: (e: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
    active=false,
    titles,
    content,
    setActiveTab
}) => {
    const tabRef = useRef<HTMLSpanElement>(null);

    if (active) tabRef.current?.classList.add("subheader-clicked");
    else tabRef.current?.classList.remove("subheader-clicked");


    return (
      <div className='tabs-main'>
            <div className='tabs-header'>
                <span onClick={()=> {setActiveTab(1)}} className="subheader smalltext-header" ref={tabRef}>
                    {titles[0]}
                </span>
                <span onClick={()=> {setActiveTab(2)}} className="subheader smalltext-header" ref={tabRef}>
                    {titles[1]}
                </span>
            </div>
            <div className='tabs-container'>
                {content}
            </div>
      </div>
    );
}