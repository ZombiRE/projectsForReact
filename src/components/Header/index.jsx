import React, { useState } from "react";
import { GrBasket } from "react-icons/gr";
import styles from "./Header.module.scss";



export default function Header(){
    let [cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div>
                <span className={styles.logo}>Магазин IP-телефонов</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <GrBasket onClick={()=>setCartOpen(cartOpen= !cartOpen)} className={`${styles.shopCartButtom} ${cartOpen ? styles.active : ''}`}/>
                {cartOpen && (
                    <div className={styles.shopCart}>

                    </div>

                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
    );
}