import React from 'react';

const Contacts = () => {
    const [header] = React.useState({
        mainHeading: 'HAVE ANY QUERY?',
        subHeading: 'Contact Me',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit vitae voluptatibus tenetur.',
    });
    const [state] = React.useState([
        {
            id: 1,
            heading: 'Locate Us',
            text: 'King Street, Melbourne Victoria'
        },
        {
            id: 2,
            heading: 'Give us a Call',
            text: 'Office: +01-2345-6789'
        },
        {
            id: 3,
            heading: 'Get in Online',
            text: 'Contact@example.com'
        }
    ]);
    return (
        <div className="contacts">
            <div className="container">
                <div className="common">
                    <h3 className="heading">{header.mainHeading}</h3>
                    <h1 className="main-header">{header.subHeading}</h1>
                    <p className="main-content">{header.text}</p>
                    <div className="common-border"></div>
                </div>
                <div className="row">
                    {state.map((info) => (
                        <div className="col-4" key={info.id}>
                            <div className="contact-box">
                                <div className="icon"><i class="fas fa-camera"></i></div>
                                <div className="content">
                                    <h3 className="services-h3">{info.heading}</h3>
                                    <p className="services-p">{info.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <form className="data" action="index.html" method="post">
                        <div className="name">
                            <input className="contact-form-name" type="text" placeholder="Your Name"/>
                            <input className="contact-form-name" type="text" placeholder="Your Email"/>
                        </div>
                        <input className="contact-form-text" type="text" placeholder="Your Subject"/><br/>
                        <textarea className="contact-form-text" placeholder="Your Message"></textarea><br/>
                        <input type="Submit" className="btn btn-play" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
