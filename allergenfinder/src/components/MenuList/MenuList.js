import React, { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
//comment
function MenuList({selectedMenu, selectedAllergens}) {
    //console.log('menulist: ' + selectedAllergens)
    return (
        <div className="menuCardClass" style = {{display:"flex",flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
            {selectedMenu.map((card, index) => (
                <MenuCard  key={card.id} index={index} card={card} selectedAllergens={selectedAllergens}/>
            ))}
        </div>
    );
}
export default MenuList;