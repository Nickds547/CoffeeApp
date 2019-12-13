import React, {useState,useEffect} from 'react';
import {Gallery, GalleryImage } from 'react-gesture-gallery';
import '../App.css';
import styled from 'styled-components';
import counter from '../assets/Brewhouse_counter.jpg';
import mug from '../assets/coffee_mugs.jpg';
import food from '../assets/Food.jpg';
import out from '../assets/Outside.jpg';

const Wrapper = styled.div`
height: 65vh;
width:100vw;
`;

const Slider = () =>{

    const images = [counter,food,mug,out];
    const [index, setIndex] = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=> {

            if(index === images.length -1){
                setIndex(0);
            }

            else{
                setIndex(index + 1)
            }

        },3000)

        return() => clearInterval(interval);

    }, [index])

    return(
        
        <Wrapper>
            <Gallery className="slider-image" index={index} onRequestChange={i =>{setIndex(i);}}>
                {images.map(() => (
                    <GalleryImage className="image-gallery-slide" objectFit="contain" src={images[index]}/>
                ))}
                
            </Gallery>
        
        </Wrapper>
    )
}

export default Slider;