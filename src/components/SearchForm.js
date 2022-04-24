import React, { useEffect, useRef } from "react";

export default function SearchForm({setSearchTerm}) {

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  },[])

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  const searchAudio = () => {
      setSearchTerm(searchValue.current.value);
  }
  return <section className="section">
    <h2 className="section-title">search audio</h2>

    <form className="form search-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">search your favourite audio</label>
        <input 
            type="text" 
            name= "name"  
            id="name"
            ref={searchValue} 
            onChange={searchAudio}/>
      </div>
      
    </form>

  </section>
}
