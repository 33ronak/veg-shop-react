import React, { useRef, useState } from "react";

const VegetableList = ({ items = [], onBuyItem, onRemoveItem }) => {

    console.log(items)

    const [initialQty, setQty] = useState(0);
    const ref = useRef();

    if (items === undefined && items === null) {
        return null;
    }


    return <>
        {
            items.map((item, idx) => {
                const { vegetable, price, quantity, id } = item;

                return (
                    <div key={idx}>
                        <p>
                            {vegetable} {price} {quantity}

                            <span>
                                <input type="number" ref={(r) => {
                                    ref.current = r
                                }}></input>
                                <button onClick={() => onBuyItem(id, ref.current.value)}> Buy </button>
                                <button onClick={() => onRemoveItem(id)}> Delete </button>

                            </span>
                        </p>


                    </div>
                )
            })
        }
    </>

}

export default VegetableList;