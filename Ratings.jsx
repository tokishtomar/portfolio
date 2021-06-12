import React from 'react';

const Ratings = () => {
    return (
        <div className="rating">
            <div className="container">
                <div className="row">
                    <div className="ratings">
                        <div className="icons"><i class="fas fa-users"></i></div>
                        <strong>47</strong>
                        <h3>Clients</h3>
                    </div>
                    <div className="ratings">
                        <div className="icons"><i class="fab fa-unity"></i></div>
                        <strong>64</strong>
                        <h3>Projects</h3>
                    </div>
                    <div className="ratings">
                        <div className="icons"><i class="far fa-gem"></i></div>
                        <strong>47</strong>
                        <h3>Awards</h3>
                    </div>
                    <div className="ratings">
                        <div className="icons"><i class="fab fa-github"></i></div>
                        <strong>47</strong>
                        <h3>Years Experience</h3>
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default Ratings;
