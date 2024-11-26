import "./Image.css";
function Image({dimensions}) {
    return <div>
        <a className="block" href="https://city-adm.lviv.ua/" className="image">
            <img className="block" style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px`}} src="https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/603fc39c503d9_03%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2.jpg" alt="Зображення міста">
            </img>
        </a>
    </div>;
}

export default Image