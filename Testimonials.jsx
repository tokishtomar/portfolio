import React from 'react';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h4>OUR TESTIMONIALS</h4>
                        <h1>Happy Clients Says</h1>
                        <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit.<br/> Blanditiis, cupiditate. 
                        Tempora reprehenderit aperiam fugit<br/> 
                        repellendus natus similique quam ipsam! 
                        Ipsum, eaque?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Explibo <br/>quos facere 
                        facilis dolore, pariatur exercitationem!</p>
                        <button className="btn btn-play">Learn More</button>
                    </div>
                    <div className="col-6">
                        <div className="right-side">
                                <div className="text">
                                    <p>"Lorem ipsum dolor sit 
                                    amet consectetur adipisicing elit. Laborum, 
                                    maiores quos. Nemo facere earum mollitia. 
                                    Lorem ipsum dolor sit, amet consectetur 
                                    adipisicing elit. Ipsam, consequuntur!"<br/></p>
                                    <div className="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>  
                                </div>
                        <div className="right-bottom">
                            <div className="collect">
                                <div className="person"><img src="Images/man-01.png" alt="person" /></div>
                                <div className="name">
                                    <h3>Emaley Mcculloch</h3>
                                    <strong>Founder of Woo</strong>
                                </div>
                            </div>
                                <div className="arrows">
                                    <i class="fas fa-arrow-circle-left"></i>
                                    <i class="fas fa-arrow-circle-right"></i> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
