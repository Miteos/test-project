import React from 'react'

const SearchView = ({ handler,label})=>{
    const  onKeyPress = (e) => {
        if (e.key === "Enter") {
           let value  = e.target.value;
           handler(value)
        }
    }
    return(
        <div className="flex-column">
            <span>{label}</span>
            <input type="search"  placeholder="Search..." onKeyPress={onKeyPress}/>
        </div>
        )
}
export default SearchView
