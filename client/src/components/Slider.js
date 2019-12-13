import React, {useState} from 'react';
import {Gallery, GalleryImage } from 'react-gesture-gallery';
import data from '../FakeJSON/test.json';

const images = data.images;


const Slider = () =>{

    const [num, setNum] = useState(0);

    console.log(images[num].src);

    return(
        <Gallery index={num}>
            {images.map(() => (
                <GalleryImage src={images[num].src}/>
            ))}
            
        </Gallery>
    )
}

export default Slider;