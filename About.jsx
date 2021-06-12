import React from 'react';

const About = () => {
    const [header] = React.useState({
        subHeading: 'About Me',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit vitae voluptatibus tenetur.',
    });
    const [state] = React.useState([
        {id:1,
        title: 'Name:',
        text: 'Jonathan Doe'},
        {id:2,
        title: 'Email:',
        text: 'example@gmail.com'},
        {id:3,
        title: 'Phone:',
        text: '+1 023 454 345'},
        {id:4,
        title: 'Linkedin:',
        text: 'Jonathan_123'},
    ]);
    return (
            <div className="about">
                <div className="container">
                    <div className="common">
                        <h1 className="main-header">{header.subHeading}</h1>
                        <p className="main-content">{header.text}</p>
                        <div className="common-border"></div>
                    </div>
                    <div className="row aboutSec">
                        <div className="col-6">
                            <div className="about-img">
                                <img src="/Images/man-01.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about-info">
                                <h1>Hi There</h1>
                                <div className="about-p1">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Enim mollitia unde sunt eligendi nulla? Eum amet 
                                aspernatur distinctio, facere consectetur a adipisci in architecto 
                                sapiente.</div>
                                <div className="about-p2">Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Enim mollitia unde sunt eligendi nulla? Eum amet 
                                aspernatur</div>
                            </div>
                            <div className="info-contacts">
                                <div className="row">
                                    {state.map(info => (
                                        <div className="col-6">
                                        <strong>{info.title}</strong>
                                        <p>{info.text}</p>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;
