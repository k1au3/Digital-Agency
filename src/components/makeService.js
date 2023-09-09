import logo from '../images/icons/letter-e.png';
import build from '../images/icons/build.png';
import design from '../images/icons/automated.png';
import implement from '../images/icons/collaborate.png';
import large from '../images/annie-spratt-MChSQHxGZrQ-unsplash.jpg';

const Service = () => {
    return ( 
        <div className="service">
            <div className="left">
                <div className="title">
                    <img src={logo} alt="logo" />
                    <h3>about company</h3>
                </div>
                <h3>Make Your Service</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <div className="icon_cntainer">
                    <Icon
                        url={build}
                        title="Build Solution"
                        number="01"
                    />
                    <Icon
                        url={design}
                        title="Build Solution"
                        number="02"
                    />
                    <Icon
                        url={implement}
                        title="Build Solution"
                        number="03"
                    />
                </div>
            </div>
            <div className="right">
                <img src={large} alt="large" id='large' loading='lazy'/>
                <img src={logo} alt="logo" id="logo" loading='lazy' />
            </div>
        </div>
     );
}
 
export default Service;

function Icon({url, title, number}){
    return(
        <div className="iconn">
            <img src={url} alt="icon" />
            <div className="cont">
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <h6>{number}</h6>
        </div>
    );
}