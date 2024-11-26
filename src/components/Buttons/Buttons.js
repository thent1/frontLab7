import {useState} from "react";
import Image from "../Image/Image";

function Buttons({addImage, increaseSize, decreaseSize, deleteImage}) {

    const handleClick = (action) => {
        switch (action) {
            case "add":
                addImage();
                console.log("add button")
                break;
            case "enlarge":
                increaseSize();
                console.log("enlarge button")
                break;
            case "reduce":
                decreaseSize();
                console.log("reduce button")
                break;
            case "delete":
                deleteImage();
                console.log("delete button")
                break;
        }
    }


    return <div>
        <button type="button" id="buttonAdd" onClick={() => handleClick("add")}>Додати</button>
        <button type="button" id="buttonEnlarge" onClick={() => handleClick("enlarge")}>Збільшити</button>
        <button type="button" id="buttonReduce" onClick={() => handleClick("reduce")}>Зменшити</button>
        <button type="button" id="buttonDelete" onClick={() => handleClick("delete")}>Видалити</button>
    </div>;
}

export default Buttons