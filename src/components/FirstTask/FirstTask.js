import Header from "../Header/Header";
import Content from "../Content/Content";
import Images from "../Images/Images";
import Buttons from "../Buttons/Buttons";
import Image from "../Image/Image";
import {useState} from "react";

function FirstTask() {

    const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
    const [images, setImages] = useState([<Image dimensions={dimensions} key={0}/>]);

    const addImage = () => {
        setImages((prev) => [...prev, <Image dimensions={dimensions} key={prev.length}/>]);
    }

    const deleteImage = () => {
        setImages((prev) => [prev.slice(0, -1)]);
    }

    const increaseSize = () => {
        setDimensions((prev) => ({
            width: prev.width + 25,
            height: prev.height + 25
        }));
    };

    const decreaseSize = () => {
        setDimensions((prev) => ({
            width: prev.width - 25,
            height: prev.height - 25
        }));
    };

    return <div>
        <Header/>
        <Content/>
        <Images images={images}/>
        <Buttons addImage={addImage} increaseSize={increaseSize} decreaseSize={decreaseSize} deleteImage={deleteImage}/>
    </div>;
}

export default FirstTask