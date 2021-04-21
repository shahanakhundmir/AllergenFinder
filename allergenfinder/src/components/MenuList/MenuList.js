import React, { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
//comment
function MenuList({selectedMenu, selectedAllergens, menuItemAllergens, allergens}) {
    //console.log('menulist: ' + selectedAllergens)
    return (
        <div className="menuCardClass" style = {{display:"flex",flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
            {selectedMenu.map((card, index) => (
                <MenuCard  key={card.item_id} index={index} card={card} selectedAllergens={selectedAllergens}  menuItemAllergens = {menuItemAllergens} allergens = {allergens}/>
            ))}
        </div>
    );
}
export default MenuList;