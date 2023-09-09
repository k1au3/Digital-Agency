import { IonIcon } from "@ionic/react";
import { flowerOutline, logoFacebook, medicalOutline, star } from "ionicons/icons";
import logo from '../images/icons/letter-e.png';


const Testimonials = () => {
    return ( 
        <div className="testimonials">
            <Astar />
            <div className="testy">
                <div className="title">
                    <img src={logo} alt="logo" />
                    <h4>Pricing Table</h4>
                </div>
                <h3>What Our Clients Are Saying.</h3>
                <div className="test_cards">
                    <TestCard
                        rev="115"
                        title="Henyry Lowe"
                    />
                    <TestCard
                        rev="130"
                        title="Kanye West"
                    />
                    <TestCard
                        rev="105"
                        title="Tracy Chapman"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;

function TestCard({rev, title}){
    return(
        <div className="test_card">
            <h4>"</h4>
            <div className="star">
                <div className="star_cont">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                </div>
                <span>({rev} Reviews)</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam tempore debitis ipsa assumenda ullam beatae! 
            </p>
            <div className="profile">
                <img src="" alt="person" />
                <h4>{title}</h4>
                <IonIcon icon={logoFacebook} />
            </div>
        </div>
    );
}

export function Astar(){
    return(
        <div className="star">
            <div className="left">
                <IonIcon icon={flowerOutline} />
                <IonIcon icon={medicalOutline} />
            </div>
            <div className="right">
                <IonIcon icon={medicalOutline} />
                <IonIcon icon={medicalOutline} />
            </div>
        </div>
    );
}