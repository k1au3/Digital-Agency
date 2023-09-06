import { IonIcon } from '@ionic/react';
import logo from '../images/icons/letter-e.png';
import { logoBehance, logoFacebook, logoLinkedin, logoTwitter, mailUnreadOutline } from 'ionicons/icons';

const Nav = () => {
    return ( 
        <div className="nav">
            <ul className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>

            <div className="rest">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h3>Exand</h3>
                </div>

                <ul className="social">
                    {/*ionIcons*/}
                    <li><IonIcon icon={logoFacebook} /></li>
                    <li><IonIcon icon={logoLinkedin} /></li>
                    <li><IonIcon icon={logoTwitter} /></li>
                    <li><IonIcon icon={logoBehance} /></li>
                </ul>

                <div className="email">
                    {/*icon*/}
                    <IonIcon icon={mailUnreadOutline} />
                    <span>info@gmail.com</span>
                </div>
                <ul className="dots">
                    <li>.</li>
                    <li>.</li>
                    <li>.</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Nav;