import './Slider.css'
import Typed from 'typed.js'
import { useEffect, useRef, useState } from 'react'

function Slider() {
    const el = useRef();
  // Create reference to store the Typed instance itself
	const typed = useRef();

    const sliderRef = useRef()
    
    useEffect(() => {

        const options = {
            strings: [
            'Front-end developer',        
            'College student',
            ],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true,
            loopCount: Infinity
        };
    
    // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);        
        return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
        }
    }, [])

    return (
        
        <div ref={sliderRef} id='slider'>
            <div className='slider_content'>
                <h2>Hello,</h2>
                <h1>My name is</h1>
                <h1 className='slider_content--name'>Nguyen Phuong Quang</h1>
                <h1>I am <span className='slider_content--dyanmic-text' ref={el}></span></h1>
            </div>
        </div>
        
    )
}

export default Slider