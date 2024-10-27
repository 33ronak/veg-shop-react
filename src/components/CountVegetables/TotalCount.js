import React, { useState } from "react";
import VegetableList from "../VegetableList/VegetableList";

const TotalCount = ({ items = [], onBuy, onDelete }) =>

(
    <>

        <VegetableList items={items} onBuyItem={onBuy} onRemoveItem={onDelete}/>
        <h1>Total: {items.length}</h1>
    </>
)


export default TotalCount;