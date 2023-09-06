import logo from '../images/icons/letter-e.png'
import circle from '../images/annie-spratt-MChSQHxGZrQ-unsplash.jpg';
import midImage from '../images/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg';
import { IonIcon } from "@ionic/react";
import { callOutline } from "ionicons/icons";


const About = () => {
    return ( 
        <div className="all">
            <div className="what_we_do">
                <div className="left">
                    <div className="title">
                        <img src={logo} alt="logo" />
                        <h4>about company</h4>
                    </div>
                    <h2>We DO Work Smart Digital Agency</h2>
                    <button><span>More</span>About Us</button>
                    <img src={circle} alt="circle" />
                </div>
                <div className="middle">
                    <img src={midImage} alt="mid" />
                    
                </div>
                <div className="right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem unde eius quae nostrum, libero vitae cupiditate minus aspernatur tempora omnis corporis, dolorem sequi numquam quis ullam molestiae quia nam?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, nemo quos dolor excepturi aperiam repellat alias tempore facilis cumque maxime, nesciunt quasi culpa enim doloribus quam fuga eveniet aspernatur libero?</p>
                    <div className="buttons">
                        <Button 
                            title="UI/UX Design"
                        />
                        <Button
                            title="Photography"
                        />
                        <Button
                            title="Graphics & Design"
                        />
                        <Button
                            title="Web Design"
                        />
                        <Button
                            title="Animation"
                        />
                        <Button
                            title="Programming"
                        />
                    </div>
                </div>
                
        </div>
        <button><IonIcon icon={callOutline} /> Customer Emergency Contact Number - <span>+2541234567</span></button>
        </div>
     );
}
 
export default About;

function Button({title}){
    return(
        <button className="btn">
            {title}
        </button>
    );
}