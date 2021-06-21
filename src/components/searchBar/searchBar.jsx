
import './searchBar.css';

function SearchBar(props){

   function handleSearch (e){
        e.preventDefault();
        props.searchFunction(e.target[0].value);
        
    }
    return(
        <>
           <div className="search_wrapper">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder = "Search...." className = "input"/>
                    <button type="submit" className = "searchbtn">GO</button>
                </form>
           </div>
        </>
    );
}

export default SearchBar ;