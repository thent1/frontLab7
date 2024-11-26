import Header from "../Header/Header";
import Content from "../Content/Content";
import Images from "../Images/Images";
import Buttons from "../Buttons/Buttons";
import Image from "../Image/Image";
import {useEffect, useState} from "react";

function FirstTask() {

    const [dimensions, setDimensions] = useState({ width: 701, height: 468 });
    const [images, setImages] = useState([<Image dimensions={dimensions} key={0}/>]);

    function generateImagesArray(value) {
        let array = [];
        for (let i = 0; i < value; i++) {
            array.push(<Image dimensions={dimensions} key={i} />)
        }
        return array;
    }

    const addImage = () => {
        setImages((prev) => generateImagesArray(prev.length+1));
    }

    const deleteImage = () => {
        setImages((prev) => generateImagesArray(prev.length-1));
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

    useEffect(() => {
        setImages((prev) => generateImagesArray(prev.length));
    }, [dimensions]);

    return <div>
        <Header/>
        <Content/>
        <Images images={images}/>
        <Buttons addImage={addImage} increaseSize={increaseSize} decreaseSize={decreaseSize} deleteImage={deleteImage}/>
    </div>;
}

export default FirstTask