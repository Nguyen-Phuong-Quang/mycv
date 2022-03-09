import { useRef, useEffect, useState } from 'react'

import './Services.css'

function Services() {
    const [appear, setAppear] = useState();
    useEffect( () => {
        const handleScroll = () => {
            if(window.scrollY > 2200) {
                setAppear('services-items')
            } else {
                setAppear('services-items disappear')
            }

        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div id="services-section" className="content__section">
            <h1 className="content__section-heading">SERVICES</h1>
            <p className='about-description'>For a business to prosper, the staff must ensure the customers are treated with respect. Any business solely depends on the availability of its customers or clients. If the clients are not contented with the type of service they receive from a specified firm, they will move to other places where they will be satisfied. As such, it is important, as a manager of any business, to ensure customers are treated with respect and are in turn happy. To make sure that this happens, the staff need to know how to engage properly with a client and ensure the customer is satisfied with the type of service they get.</p>
            <div className={appear}>
                <div className='services-items__item'>
                    <div className='item-container'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NiA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDE4LjQxNzNDMTQgMTcuNDA0OCAxNC44MjA4IDE2LjU4NCAxNS44MzMzIDE2LjU4NEg1Mi41QzUzLjUxMjUgMTYuNTg0IDU0LjMzMzMgMTcuNDA0OCA1NC4zMzMzIDE4LjQxNzNWNDkuNTg0QzU0LjMzMzMgNTAuNTk2NSA1My41MTI1IDUxLjQxNzMgNTIuNSA1MS40MTczSDE1LjgzMzNDMTQuODIwOCA1MS40MTczIDE0IDUwLjU5NjUgMTQgNDkuNTg0VjE4LjQxNzNaTTE0LjkxNjcgMjMuMDAwN0g1My40MTY3VjQ5LjU4NEM1My40MTY3IDUwLjA5MDMgNTMuMDA2MyA1MC41MDA2IDUyLjUgNTAuNTAwNkgxNS44MzMzQzE1LjMyNzEgNTAuNTAwNiAxNC45MTY3IDUwLjA5MDMgMTQuOTE2NyA0OS41ODRWMjMuMDAwN1pNNDYuMDgzMyAxOS43OTIzQzQ2LjA4MzMgMjAuNTUxNyA0NS40Njc3IDIxLjE2NzMgNDQuNzA4MyAyMS4xNjczQzQzLjk0OSAyMS4xNjczIDQzLjMzMzMgMjAuNTUxNyA0My4zMzMzIDE5Ljc5MjNDNDMuMzMzMyAxOS4wMzI5IDQzLjk0OSAxOC40MTczIDQ0LjcwODMgMTguNDE3M0M0NS40Njc3IDE4LjQxNzMgNDYuMDgzMyAxOS4wMzI5IDQ2LjA4MzMgMTkuNzkyM1pNNTAuNjY2NyAxOS43OTIzQzUwLjY2NjcgMjAuNTUxNyA1MC4wNTEgMjEuMTY3MyA0OS4yOTE3IDIxLjE2NzNDNDguNTMyMyAyMS4xNjczIDQ3LjkxNjcgMjAuNTUxNyA0Ny45MTY3IDE5Ljc5MjNDNDcuOTE2NyAxOS4wMzI5IDQ4LjUzMjMgMTguNDE3MyA0OS4yOTE3IDE4LjQxNzNDNTAuMDUxIDE4LjQxNzMgNTAuNjY2NyAxOS4wMzI5IDUwLjY2NjcgMTkuNzkyM1oiIGZpbGw9IiMxOTkxNjQiLz4KPHBhdGggZD0iTTMwIDMzTDI3IDM2TDMwIDM5IiBzdHJva2U9IiMxOTkxNjQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTM4IDM5TDQxIDM2TDM4IDMzIiBzdHJva2U9IiMxOTkxNjQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTM2IDMyTDMyIDQxIiBzdHJva2U9IiMxOTkxNjQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iNTAiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTk5MTY0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt=""/>
                        <h3 className='item-heading'>Web Design</h3>
                        <p className='item-content' >We create websites that will bring value to your business. Here you can expect your dream website to built.</p>
                    </div>
                </div>

                <div className='services-items__item'>
                    <div className='item-container'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy44MzMzIDE4LjQxNzNDMTMuODMzMyAxNy40MDQ4IDE0LjY1NDEgMTYuNTg0IDE1LjY2NjYgMTYuNTg0SDUyLjMzMzNDNTMuMzQ1OCAxNi41ODQgNTQuMTY2NiAxNy40MDQ4IDU0LjE2NjYgMTguNDE3M1Y0OS41ODRDNTQuMTY2NiA1MC41OTY1IDUzLjM0NTggNTEuNDE3MyA1Mi4zMzMzIDUxLjQxNzNIMTUuNjY2NkMxNC42NTQxIDUxLjQxNzMgMTMuODMzMyA1MC41OTY1IDEzLjgzMzMgNDkuNTg0VjE4LjQxNzNaTTE0Ljc0OTkgMjMuMDAwN0g1My4yNDk5VjQ5LjU4NEM1My4yNDk5IDUwLjA5MDMgNTIuODM5NSA1MC41MDA2IDUyLjMzMzMgNTAuNTAwNkgxNS42NjY2QzE1LjE2MDMgNTAuNTAwNiAxNC43NDk5IDUwLjA5MDMgMTQuNzQ5OSA0OS41ODRWMjMuMDAwN1pNNDUuOTE2NiAxOS43OTIzQzQ1LjkxNjYgMjAuNTUxNyA0NS4zMDEgMjEuMTY3MyA0NC41NDE2IDIxLjE2NzNDNDMuNzgyMiAyMS4xNjczIDQzLjE2NjYgMjAuNTUxNyA0My4xNjY2IDE5Ljc5MjNDNDMuMTY2NiAxOS4wMzI5IDQzLjc4MjIgMTguNDE3MyA0NC41NDE2IDE4LjQxNzNDNDUuMzAxIDE4LjQxNzMgNDUuOTE2NiAxOS4wMzI5IDQ1LjkxNjYgMTkuNzkyM1pNNTAuNDk5OSAxOS43OTIzQzUwLjQ5OTkgMjAuNTUxNyA0OS44ODQzIDIxLjE2NzMgNDkuMTI0OSAyMS4xNjczQzQ4LjM2NTYgMjEuMTY3MyA0Ny43NDk5IDIwLjU1MTcgNDcuNzQ5OSAxOS43OTIzQzQ3Ljc0OTkgMTkuMDMyOSA0OC4zNjU2IDE4LjQxNzMgNDkuMTI0OSAxOC40MTczQzQ5Ljg4NDMgMTguNDE3MyA1MC40OTk5IDE5LjAzMjkgNTAuNDk5OSAxOS43OTIzWiIgZmlsbD0iIzc0NjZFMiIvPgo8cGF0aCBkPSJNMjcuNTgzMyAzNy4xOTM1QzI3LjU4MzMgNDAuNzM3MyAzMC40NTYxIDQzLjYxMDIgMzMuOTk5OSA0My42MTAyQzM1LjA1MjkgNDMuNjEwMiAzNi4wNDY3IDQzLjM1NjUgMzYuOTIzNCA0Mi45MDdMMzMuNTQxNiAzNy42NjcxVjMwLjc5M0MzMC4yMTE3IDMxLjAyNzkgMjcuNTgzMyAzMy44MDM4IDI3LjU4MzMgMzcuMTkzNVoiIGZpbGw9IiM3NDY2RTIiLz4KPHBhdGggZD0iTTM5LjUyNjcgMzMuMTA0NkMzOC44ODczIDMyLjI0MDYgMzguMDU0MyAzMS41Mzg0IDM3LjA5NDUgMzEuMDU0NkMzNi4yNzE0IDMwLjYzOTcgMzUuMzc0OCAzMC4zOTUyIDM0LjQ1ODMgMzAuMzM0VjM2Ljc1MDdMMzkuNTI2NyAzMy4xMDQ2WiIgZmlsbD0iIzc0NjZFMiIvPgo8cGF0aCBkPSJNNDAuNzI3MSAzOC42MTA4QzQxLjA3ODcgMzYuOTQyNyA0MC43OTgxIDM1LjIwMzQgMzkuOTM5NiAzMy43MzA1TDM0LjQ1ODMgMzcuNjUxTDM4LjAzNjUgNDIuNzU3OUMzOS40MTY1IDQxLjc1NjkgNDAuMzc1NCA0MC4yNzkgNDAuNzI3MSAzOC42MTA4WiIgZmlsbD0iIzc0NjZFMiIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMCIgeTE9IjAiIHgyPSI1MCIgeTI9IjUwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM1MDQ2QzciIHN0b3Atb3BhY2l0eT0iMC4yIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt=""/>
                        <h3 className='item-heading'>UI/UX Design</h3>
                        <p className='item-content' >We provide high-quality design for websites. It's important to have unique and attractive designs so that your audience sticks around with the site.</p>
                    </div>
                </div>
                
                <div className='services-items__item'>
                    <div className='item-container'>                       
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy44MzMzIDE4LjQxNzNDMTMuODMzMyAxNy40MDQ4IDE0LjY1NDEgMTYuNTg0IDE1LjY2NjYgMTYuNTg0SDUyLjMzMzNDNTMuMzQ1OCAxNi41ODQgNTQuMTY2NiAxNy40MDQ4IDU0LjE2NjYgMTguNDE3M1Y0OS41ODRDNTQuMTY2NiA1MC41OTY1IDUzLjM0NTggNTEuNDE3MyA1Mi4zMzMzIDUxLjQxNzNIMTUuNjY2NkMxNC42NTQxIDUxLjQxNzMgMTMuODMzMyA1MC41OTY1IDEzLjgzMzMgNDkuNTg0VjE4LjQxNzNaTTE0Ljc0OTkgMjMuMDAwN0g1My4yNDk5VjQ5LjU4NEM1My4yNDk5IDUwLjA5MDMgNTIuODM5NSA1MC41MDA2IDUyLjMzMzMgNTAuNTAwNkgxNS42NjY2QzE1LjE2MDMgNTAuNTAwNiAxNC43NDk5IDUwLjA5MDMgMTQuNzQ5OSA0OS41ODRWMjMuMDAwN1pNNDUuOTE2NiAxOS43OTIzQzQ1LjkxNjYgMjAuNTUxNyA0NS4zMDEgMjEuMTY3MyA0NC41NDE2IDIxLjE2NzNDNDMuNzgyMiAyMS4xNjczIDQzLjE2NjYgMjAuNTUxNyA0My4xNjY2IDE5Ljc5MjNDNDMuMTY2NiAxOS4wMzI5IDQzLjc4MjIgMTguNDE3MyA0NC41NDE2IDE4LjQxNzNDNDUuMzAxIDE4LjQxNzMgNDUuOTE2NiAxOS4wMzI5IDQ1LjkxNjYgMTkuNzkyM1pNNTAuNDk5OSAxOS43OTIzQzUwLjQ5OTkgMjAuNTUxNyA0OS44ODQzIDIxLjE2NzMgNDkuMTI0OSAyMS4xNjczQzQ4LjM2NTYgMjEuMTY3MyA0Ny43NDk5IDIwLjU1MTcgNDcuNzQ5OSAxOS43OTIzQzQ3Ljc0OTkgMTkuMDMyOSA0OC4zNjU2IDE4LjQxNzMgNDkuMTI0OSAxOC40MTczQzQ5Ljg4NDMgMTguNDE3MyA1MC40OTk5IDE5LjAzMjkgNTAuNDk5OSAxOS43OTIzWiIgZmlsbD0iIzVEQzNFQyIvPgo8cGF0aCBkPSJNMjAuNSAzM0wyNC41IDM3TDIwLjUgNDEiIHN0cm9rZT0iIzVEQzNFQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjcgNDFIMzIuNSIgc3Ryb2tlPSIjNURDM0VDIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIwIiB5MT0iMCIgeDI9IjUwIiB5Mj0iNTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzcyREFGRSIgc3RvcC1vcGFjaXR5PSIwLjI3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt=""/>
                        <h3 className='item-heading'>UI/UX Design</h3>
                        <p className='item-content' >Armed with the newest technology, our front and back-end development teams bring your designs to life. We develop for the now and build for the longer term.</p>
                    </div>
                </div>               
            </div>
        </div>
    )
}

export default Services
