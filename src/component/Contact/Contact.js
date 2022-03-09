import './Contact.css'

function Contact() {

    return (
        <div id='contact'>
            <div className='contact-col-2'>
                <div className='contact-info'>
                    <h1 className='contact-info-heading'>CONTACT</h1>
                    <div className='contact_info-detail'>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Hanoi, Vietnam</span>
                    </div>
                    <div className='contact_info-detail'>
                        <i className="fas fa-phone"></i>
                        <span>0329715851</span>
                    </div>
                    <div className='contact_info-detail'>
                        <i className="fas fa-envelope"></i>
                        <span>quang29112002@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='contact-col-2'>
                <div className='contact-form'>
                    <h2 className='contact-form-heading'>Send me a message</h2>
                    <p className='contact-form-description'>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you</p>

                    <form onSubmit={e => {e.preventDefault()}} action="" method="POST" className="form" id="form-1" >
                        <div className="form-group">
                            <input id="fullname" name="fullname" type="text" required placeholder="Name" className="form-control"/>
                            <span className="form-message"></span>
                        </div>
                    
                        <div className="form-group">
                            <input id="email" name="email" type="text" required placeholder="Email" className="form-control"/>
                            <span className="form-message"></span>
                        </div>   

                        <div className="form-group">
                            <input id="email" name="email" type="text" required placeholder="Message" className="form-control"/>
                            <span className="form-message"></span>
                        </div>           
                        
                        <button className="form-submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact