import ReactPaginate from 'react-paginate';

import './pagination.css';

function Pagination(props){
    return(
        <div >
            <ReactPaginate
            pageCount = {props.pages}
            marginPagesDisplayed = {2}
            breakLabel = {"..."}
            containerClassName = {"pagination"}
            subContainerClassName = {"pages pagination"}
            activeClassName = {"active"}
            breakClassName = {"break-me"}
            onPageChange = {(e)=>props.handlePages(e.selected+1)}
            />
        </div>
    )
}

export default Pagination ;