import React from "react";
import styles from "./Orders.module.scss"
import { MdOutlineDeleteForever } from "react-icons/md";


export default function Orders(props){
    return(
        <div className={styles.item}>
            <img src={"./phone/"+props.item.img} alt="Error" />
            <h2>{props.item.title}</h2>
            <b>{props.item.price} руб</b>
            <MdOutlineDeleteForever onClick={()=>props.onDelete(props.item.id)} className={styles.deleteIcon}/>
        </div>
    );
}