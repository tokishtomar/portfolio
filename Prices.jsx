import React from 'react';

const Prices = () => {
    const [header] = React.useState({
                        mainHeading: 'CHOOSE A PLAN',
                        subHeading: 'Pricing Plan',
                        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, blanditiis quo! Dignissimos.'});
    const [state] = React.useState([
        {id: 1,
        heading: 'Basic',
        price: '50',
        msg1: '5GB Storage Space',
        msg2: '20GB Monthly Bandwidth',
        msg3: 'My SQL Databases',
        msg4: '100 Email Account',
        msg5: '2 Free Domain Names',
        },
    {   id: 2,
        heading: 'Standard',
        price: '80',
        msg1: '15GB Storage Space',
        msg2: '50GB Monthly Bandwidth',
        msg3: 'My SQL Databases',
        msg4: '500 Email Account',
        msg5: '5 Free Domain Names',
        },
    {   id: 3,
        heading: 'Premium',
        price: '160',
        msg1: '50GB Storage Space',
        msg2: '150GB Monthly Bandwidth',
        msg3: 'My SQL Databases',
        msg4: '1000 Email Account',
        msg5: '10 Free Domain Names',
        }]);
    return (
        <div className='prices'>
            <div className="container">
                <div className="common">
                        <h3 className="heading">{header.mainHeading}</h3>
                        <h1 className="main-header">{header.subHeading}</h1>
                        <p className="main-content">{header.text}</p>
                        <div className="common-border"></div>
                    </div>
                <div className="row">
                    {state.map(info => (
                        <div className="col-4" key={info.id}>
                        <div className="price">
                            <div className="price-heading">{info.heading}</div>
                            <div className="price-rs"><span>$</span>{info.price}</div>
                            <ul>
                                <li>{info.msg1}</li>
                                <li>{info.msg2}</li>
                                <li>{info.msg3}</li>
                                <li>{info.msg4}</li>
                                <li>{info.msg5}</li>
                            </ul>
                            <div className="price-btn">
                                <a href="" className="btn btn-outline">Purcase</a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Prices;
