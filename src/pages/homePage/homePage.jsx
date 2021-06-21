import React,{useEffect,useState} from "react";
import {useSelector,useDispatch} from 'react-redux';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from "../../components/header/header";
import HeroCard from "../../components/heroCard/heroCard";
import {getAnimes} from '../../redux/actions/animes';
import Pagination from '../../components/pagination/pagination.jsx';
import Loader from "react-loader-spinner";
import './homePage.css';

function HomePage(){

    const [text , setText] = useState("");
    const [offset , setOffset] = useState(1);
    const [shoeDetails , setshowDetails] = useState(false);


    const dispatch = useDispatch();
    const animes = useSelector(state => state.animes.animes);
    const loading = useSelector(state => state.animes.loading);
    const error = useSelector(state => state.animes.error);


    useEffect(()=>{
        dispatch(getAnimes({text : text,offset:offset}));
    },[text])

    useEffect(()=>{
        dispatch(getAnimes({text :text,offset:offset}));
    },[offset])

   
   function onSearch(text){
    setText(text)
   }
   function handlePagination(page=3){
    setOffset(page)
   }


    return(
        <div className="home_page_body">
            <Header searchFunction = {onSearch}/>
            <Pagination pages ={animes.last_page} handlePages = {handlePagination} className="home_page_pagination"/>
           {
               !loading &&  <div className="home_wrapper" >
               { animes.results!==undefined && animes.results.length>0 && animes.results.map((anime,index)=>{
                   return (
                       <Link to={
                          {
                           pathname    : "/animeDetails",
                           state: {
                                anime : anime,
                             }
                          }
                       }
                       key={anime.mal_id}
                       > 
                       <HeroCard  anime = {anime} />
                       </Link>
                      
                   
                   );
               })}
            </div>
           
           }
           {
               loading &&  <div className ="loader">
               <Loader 
               type = "Oval"
               height= "50"
               width = "50"
               />
           
          </div>
           }
        </div>
    );
   
}

export default HomePage ;