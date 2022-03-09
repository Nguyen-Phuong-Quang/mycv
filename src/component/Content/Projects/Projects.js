import React, { useEffect, useRef, useState } from "react";
import './Projects.css'

function Projects() {
    const [count, setCount] = useState(0)
    const [disabledNext, setDisabledNext] = useState(false)

    const projectsRef = useRef(null);
    const projectsWrapRef = useRef(null);

    function handlePrev() {
        setCount(count => count + 370)
    }
    
    function handleNext() {      
        setCount(count => count - 370)        
    }

    useEffect(() => {
        projectsWrapRef.current.style.transition = 'transform 0.4s linear';
        projectsWrapRef.current.style.transform = `translateX(${count}px)`;
        if(count === -(projectsWrapRef.current.offsetWidth - projectsRef.current.offsetWidth -30)) {
            setDisabledNext(true);
        } else {        
            setDisabledNext(false)
        }
    },[count])

    return (
        <div id='projects-section' className='content__section'>
            <h1 className='content__section-heading'>Projects</h1>

            <div className='projects-btn'>
                <button
                    disabled={count===0}
                    onClick={handlePrev}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                <button
                    disabled={disabledNext}
                    onClick={handleNext}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            <div className='projects' ref={projectsRef}>
                <div className='projects-wrap' ref={projectsWrapRef}>
                    <div className='project-item'>
                        <div className="project-image">
                            <img
                                src="https://ayans-portfolio.netlify.app/static/media/utracker.be1fe64a.jpg"
                                alt=""
                            />
                        </div>

                        <div className="project-description">
                            An application to track your all data from one place. I
                            developed the website and the mobile app.
                        </div>
                    </div>

                    <div className='project-item'>
                        <div className="project-image">
                            <img
                                src="https://ayans-portfolio.netlify.app/static/media/cavinimg.77adeaa3.jpg"
                                alt=""
                            />
                        </div>

                        <div className="project-description">
                            A tracking website that will show the performance of the
                            website. Also you will get some useful advice to improve the
                            performance.
                        </div>
                    </div>

                    <div className='project-item'>
                        <div className="project-image">
                            <img
                                src="https://i.pinimg.com/564x/64/9c/25/649c252edf976a8326e60c5dc19cde42.jpg?fbclid=IwAR2dl-kTbjjB6C9SOZ0m2W4VkL-V1OjDj6uGq7PHgmFm32aTPGXrGvy4TV4"
                                alt=""
                            />
                        </div>

                        <div className="project-description">
                            An application to track your all data from one place. I
                            developed the website and the mobile app.
                        </div>
                    </div>

                    <div className='project-item'>
                        <div className="project-image">
                            <img
                                src="https://ayans-portfolio.netlify.app/static/media/greenctg.e51b3bbd.jpg"
                                alt=""
                            />
                        </div>

                        <div className="project-description">
                            An application to track your all data from one place. I
                            developed the website and the mobile app
                        </div>
                    </div>

                    <div className='project-item'>
                        <div className="project-image">
                            <img
                                src="https://i.pinimg.com/474x/3d/a2/ed/3da2eda16216514aab723133e972428c.jpg?fbclid=IwAR1fts5uDB7ENdTqfzFZQ6Coh4xx8l-0aQs9gZ_7VW2RvbTX5WGyFAAbwl4"
                                alt=""
                            />
                        </div>

                        <div className="project-description">
                            An application to track your all data from one place. I
                            developed the website and the mobile app
                        </div>
                    </div>

                    <div className='project-item'>
                        <div className="project-image">
                            <img
                                src="https://i.pinimg.com/564x/b4/3c/0b/b43c0b0d65e7500b6f95222ae5021835.jpg?fbclid=IwAR0ui0GIKwrSDEECr0iA_spWn2HFPKCrYk-TfKtFH9lZByYZTsmu2riroEw"
                                alt=""
                            />
                        </div>

                        <div className="project-description">
                            An application to track your all data from one place. I
                            developed the website and the mobile app
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects