import React from 'react';

const Banner = () => {
    const [state] = React.useState({title: 'I am Tokish Tomar', 
                                    text: 'Hi, I am a web developer currently I am learning to code.', 
                                    image: '/Images/man-01.png'});
    return (
        <header className="header">
            <div className="row">
                <div className="col-6">
                    <div className="header-content">
                        <div className="header-section">
                            <ul className="header-ul">
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-instagram"></i></li>
                                <li><i class="fab fa-youtube"></i></li>
                                <li><i class="fab fa-github"></i></li>
                            </ul>
                            <h1>{state.title}</h1>
                            <p>{state.text}</p>
                            <div className="header-button">
                                <a href="" className="btn btn-outline">My Portfolio</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="" className="btn btn-play"><i class="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="banner-img">
                        <img src={state.image} alt="man" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner;
