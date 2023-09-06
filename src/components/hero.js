import aboutImage from '../images/jason-goodman-ZJlfUi5rTDU-unsplash.jpg';
import heroImage from '../images/jason-goodman-Oalh2MojUuk-unsplash.jpg';

const Hero = () => {
    return ( 
        <div className="home">
            <span id="span">our vision creative web agency</span>
            <div className="content">
                <div className="top">
                    <div className="left">
                        <h4>About Us</h4>
                        <button><span>Home</span> | About us</button>
                    </div>
                    <div className="right">
                        <div className="about_image">
                            <img src={aboutImage} alt="about us" />
                        </div>
                        <div className="sticker">
                            {/*sticker*/}
                        </div>                      
                    </div>
                </div>
                <img id="hero__image" src={heroImage} alt="hero" />
                <div className="sponsors">
                    {/* sponser stickers */}
                </div>
            </div>
        </div>
     );
}
 
export default Hero;