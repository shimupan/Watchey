import { FiSearch } from "react-icons/fi"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [currSearchTerm, setCurrSearchTerm] = useState("");

    const handleSubmit  = (e: any) => {
        e.preventDefault();

        if(currSearchTerm) {
            navigate(`/search?query=${currSearchTerm}`);
        } else {
            alert("Search Bar cannot be emtpy!")
        }
    }

    return (
        <form className="relative w-full" onSubmit={handleSubmit}>
            <input className="input" type="text" placeholder="Search For a Product..." onChange={(e:any) => {
                setCurrSearchTerm(e.target.value)
            }}/>
            <button className="btn btn-accent absolute top-0 right-0">
                <FiSearch />
            </button>
        </form>
    )
}