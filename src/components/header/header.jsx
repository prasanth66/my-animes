
import CompanyLogo from '../../assests/images/companyLogo.png'
import SearchBar from '../searchBar/searchBar';
import './header.css';

function Header(props){
    return(
        <div className = "header_wrapper">
        
           <div>
            <SearchBar searchFunction = {props.searchFunction}/>
           </div>
        </div>
    );
}

export default Header ;