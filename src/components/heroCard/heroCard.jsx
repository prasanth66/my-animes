
import './heroCard.css';
import CompanyLogo from '../../assests/images/companyLogo.png'

function HeroCard(props){
    const {image_url,title} = props.anime
    return(
        <div className = "herocard_wrapper">
            <img src ={image_url} alt="Logo" />
            <p>{title}</p>
            
        </div>
        
        
    );
}

export default HeroCard ;