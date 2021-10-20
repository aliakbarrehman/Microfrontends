import React, { useState } from 'react';
import './ImageBrowser.scss';
import ListOfImages from '../ListOfImages';

const ImageBrowser = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = (event) => {
        const newImage = currentImage >= 4 ? 4 : currentImage + 1;
        setCurrentImage(newImage);
    };

    const prevImage = (event) => {
        const newImage = currentImage <= 0 ? 0 : currentImage - 1;
        setCurrentImage(newImage);
    };

    return(
        <>
            <div className={"pakistan-container"}>
                <div className={"img-container"}>
                    <img src={ListOfImages[currentImage].image} />
                </div>
                <p className={"caption"}>
                    {ListOfImages[currentImage].caption}
                </p>
                <div className={"controls"}>
                    <button onClick={prevImage} disabled={currentImage <= 0}>Previous</button>
                    <button onClick={nextImage} disabled={currentImage >= 4}>Next</button>
                </div>
            </div>
            
            <p className={"copyrights"}>All images are procured from Pexels and are free to use.</p>
        </>
    );
};

export default ImageBrowser;