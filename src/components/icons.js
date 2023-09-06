import design from '../images/icons/pointing-arrow.png';
import ui from '../images/icons/ui.png';
import web from '../images/icons/donut-chart.png';
import branding from '../images/icons/organization-skills.png'

const Icons = () => {
    return ( 
        <div className="icons">
            <Icon
                url={design}
                button="Design Solution"
            />
            <Icon
                url={branding}
                button="Branding Solution"
            />
            <Icon
                url={ui}
                button="UI/UX Solution"
            />
            <Icon
                url={web}
                button="Web Solution"
            />
        </div>
     );
}

 
export default Icons;

function Icon ({props}) {
    let url, button;
    return(
        <div className="icon">
            <img src={url} alt="icons" />
            <div className="button">{button}</div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eius quae itaque illum maxime sint alias eum omnis maiores nemo </p>
        </div>
    );
}