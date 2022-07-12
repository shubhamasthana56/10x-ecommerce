import axios from "axios";
import { useEffect, useState } from "react";
import "./item.css";
const Items = ()=> {
    const [items, setItems] = useState([]);
    useEffect(()=> {
        axios({
            method: "GET",
            url: "http://localhost:3001/item"
        }).then((itemData)=> {
            setItems(itemData.data.item);
        }).catch((err)=> {
            console.log(err)
        })
    }, [])
    const handleBuy = ()=> {

    }
    const handleCart = (item)=> {
        console.log(item);
        const payload = {
            itemid: item.item_id
        }
        const authToken = localStorage.getItem("authorization");
        //fetch(url, "")
        fetch("http://localhost:3001/cart/add",{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                authorization: authToken,
                "Content-Type": "application/json"
            }
        }).then((data)=>data.json()).then((res)=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    }
    return(
        <>
    <div className="container">
        {items.map((item)=> {
            return (
                <div className="item-card">
            <div className="item-heading">
                {item.item_name}
            </div>
            <div className="item-price">
                {`Rs. ${item.discounted_price}`}
            </div>
            <button type="button" onClick={()=> {handleCart(item)}}>Add To Cart</button>
            <button type="button" onClick={handleBuy}>Buy Now</button> 
        </div>
            )
        })}
        
    </div>
    </>
    )
    
};
export default Items