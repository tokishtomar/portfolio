import React from 'react';

const Details = () => {
    return (
        <div>
            <div className="detail">
                <div className="container">
                    <div className="detail-section">
                        <div className="row center">
                            <div className="col-6">
                                <div className="detail-logo"><img src="/Images/logo.png" alt="logo" /></div>
                                <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Minus itaque ex reiciendis. 
                                Illum equidem quas accusantium.</p>
                                <ul className="detail-circle">
                                    <li><i class="fab fa-facebook-f"></i></li>
                                    <li><i class="fab fa-twitter"></i></li>
                                    <li><i class="fab fa-instagram"></i></li>
                                    <li><i class="fab fa-youtube"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
