import axios from "axios";
import { useEffect, useState } from "react";
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
    const handleCart = ()=> {

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
            <button type="button" onClick={handleCart}>Add To Cart</button>
            <button type="button" onClick={handleBuy}>Buy Now</button> 
        </div>
            )
        })}
        
    </div>
    </>
    )
    
};
export default Items