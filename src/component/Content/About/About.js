import { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

import './About.css'
import img1 from './about-img.jpg'
import img2 from './first-year-result.png'

function About() {
    const el = useRef();
  // Create reference to store the Typed instance itself
	const typed = useRef();

    const sliderRef = useRef()
    
    useEffect(() => {

        const options = {
            strings: [
            'College student',
            'Front-end developer',
            'Gamer'            
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

    const [appear, setAppear] = useState('about-text');

    useEffect( () => {
        const handleScroll = () => {
            if(window.screen.width < 1024) {
                setAppear('about-text')
            } else {
                if(window.scrollY > 100) {
                    setAppear('about-text')
                } else {
                    setAppear('about-text disappear')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <input style={{display: 'none'}} type='checkbox' id='open-layout'/>
            
            <div id='about-section' className="content__section">
                <div className='about-col-1' >
                    <img className='about-img' src={img1} />
                </div>
                <div className="about-col-2">
                    <div className={appear}>
                        <h1 className="content__section-heading">ABOUT ME</h1>
                        <h2 className='about-name'>Hi, My name is Nguyen Phuong Quang</h2>
                        <p className='about-description'>
                            I am a <span className='dynamic-text' ref={el}></span> from Hanoi, Vietnam. 
                            <br/>
                            Curently, I am a second year student at Hanoi University of Science and Technology.
                            <br/>
                            My major is <span style={{color: 'red'}}>Global ICT</span>. 
                            <br/>
                            My CPA is now 3.04/4.0 <label className='check-btn' htmlFor='open-layout'>Check</label>
                            <br/>
                            I love beauty and creativity, I always try to create unique products to give the best feeling to the people using my products.
                        </p>
                    </div>
                </div>   
            </div>
            
            <label htmlFor="open-layout" className='studyResult-table-container'>
                <img 
                    onClick={e => {
                        e.preventDefault();
                    }}
                    className='studyResult-table' src={img2} 
                />
            </label> 
        </>
    )
}

export default About