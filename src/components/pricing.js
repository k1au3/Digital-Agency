import { IonIcon } from '@ionic/react';
import logo from '../images/icons/letter-e.png';
import { arrowBack, checkmark, menu } from 'ionicons/icons';


const Pricing = () => {

    const basic = [
        'Unlimited Paid Ticket',
        'Google Analytics Integration',
        'Customer Pre-Registration',
        'Email Invitations Event',
        'Event Reminders',
        'Registration Form'
    ];
    const advanced = [
        ...basic,
        '1000 Email Invitation Event',
        'No Downtime'
    ];
    const premium = [
        ...advanced,
        'Unlimited bandwith'
    ];

    return ( 
        <div className="pricing">
            <div className="title">
                <img src={logo} alt="logo" />
                <h4>Pricing Table</h4>
            </div>
            <h3>All Proffessional Packages <span>Our Recent Pricing Table</span></h3>
            <div className="pricing_cards">
                <Card
                    price="Ksh 299"
                    plan="Basic Plan"
                    planList={basic}
                />
                <Card
                    price="Ksh 750"
                    plan="Advanced Plan"
                    planList={advanced}
                />
                <Card
                    price="Ksh 1,299"
                    plan="Premium Plan"
                    planList={premium}
                />
            </div>
            <div className="svg">
                <IonIcon icon={menu} />
            </div>
        </div>
     );
}
 
export default Pricing;

function Card({ price, plan, planList }){
    
    return(
        <div className="pricing_card">
            <div className="price">
                <h4>{price} <span>/Per Month</span></h4>
                <h5>{plan}</h5>
            </div>
            <div className="dash"></div>
            <ul>
                {planList.map((plan) => 
                <li><IonIcon icon={checkmark} />{plan}</li>)}
            </ul>
            <div className="button">
                <button>Try Free Trial <IonIcon icon={arrowBack}/></button>
            </div>
        </div>
    );
}
