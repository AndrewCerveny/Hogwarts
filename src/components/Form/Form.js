import React from "react";
import { useState } from "react";

function Form(){
  const [searchedSpell , setSearchedSpell] = useState("")


 return(
  <form className="form">
    <section className="searching-area"> 
      <input
      type={Text}
      name="search"
      placeholder="search"
      value= {searchedSpell}
      onChange={(e) => setSearchedSpell(e.target.value)}
      />
      <button> submit </button>
    </section>
    <section className="filter-area">
     <select>
        <option value="none" selected disabled hidden> Select a Category </option>
        
      </select>
      <button>Submit</button>
      <button>Clear</button>
    </section>
  </form>
 )
}
export default Form;