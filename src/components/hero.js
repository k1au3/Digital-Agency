import aboutImage from '../images/jason-goodman-ZJlfUi5rTDU-unsplash.jpg';
import heroImage from '../images/jason-goodman-Oalh2MojUuk-unsplash.jpg';
import canva from '../images/icons/photoshop.png';
import PS from '../images/icons/social.png';
import google from '../images/icons/tresorit.png';
import figma from '../images/icons/figma.png';

import { IonIcon } from '@ionic/react';
import { arrowForward, menuSharp } from 'ionicons/icons';
const Hero = () => {
    return ( 
        <div className="home">           
            <div className="content">
                <div className="top">
                <span id="span">Our Vision creative Digital Agency</span>
                    <div className="left">
                        <h4>About Us</h4>
                        <button><span><IonIcon icon={arrowForward} /> Home</span> | About us</button>
                    </div>
                    <div className="right">
                        <div className="about_image">
                            <img src={aboutImage} alt="about us" />
                        </div>
                        <div className="sticker">
                            <div className="ring">
                                <span>Creative Digital Agency</span>
                            </div>
                            <IonIcon icon={menuSharp} />
                            {/* <img src={bars} alt="about-stick" /> */}
                            {/*sticker*/}
                        </div>                      
                    </div>
                </div>
                <img id="hero__image" src={heroImage} alt="hero" loading='lazy'/>
                <div className="sponsors">
                    <img src={google} alt="sponsor" />
                    <img src={PS} alt="sponsor" />
                    <img src={figma} alt="sponsor" />
                    <img src={canva} alt="sponsor" />
                    {/* sponser stickers */}
                </div>
            </div>
        </div>
     );
}
 
export default Hero;