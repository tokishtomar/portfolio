import React from 'react';

const Services = () => {
    const [header] = React.useState({mainHeading: 'SERVICES',
                                    subHeading: 'My Services',
                                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eligendi perferendis eius eum a asperiores itaque.'});
    const [state] = React.useState([
        {
            id: 1,
            heading: 'Web Development', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error aspernatur nulla veritatis et!'
        },
        {
            id: 2,
            heading: 'Web Development', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error aspernatur nulla veritatis et!'
        },
        {
            id: 3,
            heading: 'Web Development', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error aspernatur nulla veritatis et!'
        },
        {
            id: 4,
            heading: 'Web Development', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error aspernatur nulla veritatis et!'
        },
        {
            id: 5, 
            heading: 'Web Development', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error aspernatur nulla veritatis et!'
        },
        {
            id: 6, 
            heading: 'Web Development', 
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error aspernatur nulla veritatis et!'
        }
    ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services-header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeading}</h3>
                        <h1 className="main-header">{header.subHeading}</h1>
                        <p className="main-content">{header.text}</p>
                        <div className="common-border"></div>
                    </div>
                    <div className="row">
                        {state.map((info) => (
                            <div className="col-4">
                            <div className="services-box">
                                <div className="icon"><i class="fas fa-camera"></i></div>
                                <h3 className="services-h3">{info.heading}</h3>
                                <p className="services-p">{info.text}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
