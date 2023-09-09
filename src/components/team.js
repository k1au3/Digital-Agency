import facebook from '../images/social/facebook.png';
import linkedin from '../images/social/linkedin.png';
import twitter from '../images/social/twitter.png';
import logo from '../images/icons/letter-e.png'
import { IonIcon } from '@ionic/react';
import { chevronBackCircle, chevronForwardCircle } from 'ionicons/icons';

const Team = ({url}) => {
    
    return ( 
        <div className="team">
            <div className="cont">
                <div className="title">
                    <img src={logo} alt="logo" />
                    <h4>Team Members</h4>
                </div> 
                <h3>Our Team Members.</h3> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                <div className="nav-btn">
                    <IonIcon icon={chevronBackCircle}/>
                    <IonIcon icon={chevronForwardCircle} />
                </div>
            </div>
            <Member
                url=""
                title="Kimani Kimani"
                role="Project Manager"
            />
            <Member
                url=""
                title="Tervis Scott"
                role="UI/UX Designer"
            />
            <Member
                url=""
                title="Yvonne Cheptoo"
                role="Web Developer"
            />
            <Member
                url=""
                title="Hezekiah Ochuka"
                role="Brand Director"
            />
        </div>
     );
}
 
export default Team;

function Member({url, title, role}){
    return(
        <div className="member">
            <img src={url} alt="member" loading='lazy'/>
            <h4>{title}</h4>
            <div className="popup">
                <div className="role">{role}</div>
                <div className="socials">
                    <img src={facebook} alt="socials" />
                    <img src={linkedin} alt="socials" />
                    <img src={twitter} alt="socials" />
                </div>
            </div>
        </div>
    );
}