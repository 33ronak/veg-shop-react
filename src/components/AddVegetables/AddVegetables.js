import React, { useRef, useState } from "react";
import TotalCount from "../CountVegetables/TotalCount";
import "./AddVegetables.css";

const AddVegetables = () => {
    const nameRef = useRef()
    const quantityRef = useRef()
    const priceRef = useRef()

    const [items, setItems] = useState([]);

    const vegetableSubmitHandler = (event) => {
        event.preventDefault();
        const vegData = {
            id: Math.random(),
            vegetable: nameRef.current.value,
            price: +priceRef.current.value,
            quantity: +quantityRef.current.value,
        }

        setItems([...items, vegData])
    }

    const onBuyItem = (id, qty) => {

        const itemToBeManipulated = items.filter((item) => item.id === id);


        const newItem = {
            ...itemToBeManipulated[0],
            quantity: itemToBeManipulated[0].quantity - Number(qty),
        }

        console.log(newItem);



        const newList = items.filter((item) => item.id !== id);
        setItems([...newList, newItem]);
    }

    const onDeleteItem = (id) => {
        const newList = items.filter((item) => item.id !== id);
        setItems([...newList]);
    }


    return (
        <>
            <form>
                <div className="form">
                    <label htmlFor="vegetable-name">Name: </label>
                    <input
                        id="vegetable-name"
                        type="text"
                        ref={r => nameRef.current = r}
                    />



                    <label htmlFor="vegetable-price">Price: </label>
                    <input
                        id="vegetable-price"
                        type="number"
                        ref={r => priceRef.current = r}
                    />



                    <label htmlFor="vegetable-qty" >Quantity: </label>
                    <input
                        id="vegetable-qty"
                        type="number"
                        ref={r => quantityRef.current = r}

                    />

                    <button type="button" onClick={vegetableSubmitHandler}>ADD TO SHOP</button>
                </div>
            </form>
            <TotalCount items={items} onBuy={onBuyItem} onDelete={onDeleteItem} />
        </>
    )
}
export default AddVegetables;