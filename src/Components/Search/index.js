import { IoSearch } from "react-icons/io5";


const Searchbox = ()=>{
    return(
        <div className="searchbox positon-relative d-flex aligh-items-center">
            <IoSearch/>
            <input type="text" placeholder="Search here..."></input>
        </div>
    )

}

export default Searchbox;