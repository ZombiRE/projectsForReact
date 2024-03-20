import React, {useContext} from "react";
import styles from "./Categories.module.scss";
import {useAppContext} from "../../useAppContext"

export default function Categories(){
    
    const {chooseCategory}=useAppContext();
    
    const categories =[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Cisco",
            name:"Cisco"
        },
        {
            key:"Linksys",
            name:"Linksys"
        },
        {
            key:"Fanvil",
            name:"Fanvil"
        },
        {
            key:"Grandstream",
            name:"Grandstream"
        },
        {
            key:"Yealink",
            name:"Yealink"
        },
        {
            key:"Gigaset",
            name:"Gigaset"
        }
        
    ];

        
    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
            ))}

        </div>
    )
}