import React, { useRef, useState } from "react";
import TotalCount from "../CountVegetables/TotalCount";

const AddVegetables = () => {
    const nameRef = useRef(null)
    const quantityRef = useRef(null)
    const priceRef = useRef(null)

    // to maintain the items on the list
    const [items, setItems] = useState([]);


    const vegetableSubmitHandler = (event) => {
        event.preventDefault();
        const vegData = {
            id: Math.random() * 1000000,
            vegetable: nameRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value,
        }

        setItems([...items, vegData])
    }

    const onBuyItem = (id, qty) => {
        console.log(id, Number(qty));
        
        const itemToBeManipulated = items.filter((item) => item.id === id);
        

        const newItem = {
            ...itemToBeManipulated[0],
            quantity: itemToBeManipulated[0].quantity - Number(qty),
        }

        console.log(newItem);



        const newList = items.filter((item) => item.id !== id);
        setItems([...newList, newItem]);
    }

    const onDelete = (id) => {
        const newList = items.filter((item) => item.id !== id);
        setItems([...newList]);
    }

    
    return (
        <>
            <form>
                <div>
                    <label htmlFor="vegetable-name">Name: </label>
                    <input
                        id="vegetable-name"
                        type="text"
                        ref={r => nameRef.current = r}
                     />
                </div>

                <div>
                    <label htmlFor="vegetable-price">Price: </label>
                    <input
                        id="vegetable-price"
                        type="number"
                        ref={r => priceRef.current = r}
                    />
                </div>


                <div>
                    <label htmlFor="vegetable-qty" >Quantity: </label>
                    <input
                        id="vegetable-qty"
                        type="number"
                        ref={r => quantityRef.current = r}

                    />
                </div>
                <button type="button" onClick={vegetableSubmitHandler}>ADD TO SHOP</button>
            </form>

            <TotalCount items={items} onBuy={onBuyItem} onDelete={onDelete} />
        </>
    )
}

export default AddVegetables;