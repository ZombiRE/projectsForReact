import React from "react";
import {useState, useEffect} from "react"
import Header from "./components/Header"
import Items from "./components/Items"
import Footer from "./components/Footer"
import "./index.scss"
import Orders from "./components/Orders"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem";

export default function App() {

  const [items,setItems]=useState([
    {
      id:1,
      title: 'Cisco 303',
      img: 'cisco303.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Cisco',
      price: '1500'

    },

    {
      id:2,
      title: 'Cisco 525g',
      img: 'cisco525g.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Cisco',
      price: '3000'

    },

    {
      id:3,
      title: 'Linksys 942',
      img: 'linksys942.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Linksys',
      price: '1300'

    },

    {
      id:4,
      title: 'Cisco 7962',
      img: 'cisco7962.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Cisco',
      price: '2000'

    },

    {
      id:5,
      title: 'Fanvil C62',
      img: 'fanvilC62.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Fanvil',
      price: '2100'

    },

    {
      id:6,
      title: 'Fanvil X3S',
      img: 'FanvilX3S.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Fanvil',
      price: '3100'

    },

    {
      id:7,
      title: 'Grandstream GRP2615',
      img: 'grandstreamgrp2615.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Grandstream',
      price: '3100'

    },

    {
      id:8,
      title: 'Grandstream GXV3480',
      img: 'grandstreamgxv3480.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Grandstream',
      price: '8600'
    
    },

    {
      id:9,
      title: 'Yealink SIP-T31G',
      img: 'yealinksipt31g.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Yealink',
      price: '7710'
      
    },

    {
      id:10,
      title: 'Gigaset C530',
      img: 'gigasetc530.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      category:'Gigaset',
      price: '8600'
        
    }

  ]);
  
  
  
  const [orders, setOrders] = useState([]);
  const [currentItems,setCurrentItems]=useState([]);
  const [showFullItem,setShowFullItem]=useState(false);
  const [fullItem,setFullItem]=useState({});

  
  useEffect(()=>{
    setCurrentItems(items);
  },[items]);




  const deleteOrder=(id)=>{
    setOrders(orders.filter((el)=>el.id!==id));
  }

  const addToOrder = (item) => {
    if (!orders.some((el) => el.id === item.id)) {
      setOrders([...orders, item]);
    }//добавление товара много раз оставлям только setOrders([...orders,item]), без проверки
  }
  
  const chooseCategory=(category)=>{
    if(category==="all"){
      setCurrentItems(items);
    }
    else{
      setCurrentItems(items.filter((el)=>el.category===category));
    }
  }
  
  const onShowItem=(item)=>{
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
    <Header orders={orders} onDelete={deleteOrder}/>
    <Categories chooseCategory={chooseCategory}/>
    <Items allItems={currentItems} onShowItem={onShowItem} onAdd={addToOrder}/>
    {showFullItem && <ShowFullItem onShowItem={onShowItem} onAdd={addToOrder} item={fullItem}/>}
    <Footer />
    </div>
  );
}


