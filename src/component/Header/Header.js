import { useEffect, useRef, useState } from 'react'
import './Header.css'

function Header() {
    const headerRef = useRef()
    const btnRef = useRef()

    const [blackGround, setBlackGround] = useState('')
    useEffect(() => {
        btnRef.current.onclick = (e) => {
            e.stopPropagation()
            if(headerRef.current.clientHeight === 60) {
                headerRef.current.style.height = 'auto'
            } else {
                headerRef.current.style.height = '60px'
            }
        }
        
        window.onclick = () => {
            if(headerRef.current.clientHeight !== 60) {
                headerRef.current.style.height = '60px'
            }
        }
    },[]) 
    
    useEffect( () => {
        function handleScroll() {
            if(window.scrollY >= 400) {
                setBlackGround('header-scroll')
            } else {
                setBlackGround('')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <div ref={headerRef} id="header" className={blackGround}>
            <ul className="header_nav">
                <li><a href='#'>HOME</a></li>
                <li><a href='#about-section'>ABOUT</a></li>
                <li><a href='#projects-section'>PROJECTS</a></li>
                <li><a href='#services-section'>SERVICES</a></li>
                <li><a href='#contact'>CONTACT</a></li>               
            </ul>

            <i ref={btnRef} className="mobile-bar fas fa-bars"></i>
        </div>
    )
}

export default Header