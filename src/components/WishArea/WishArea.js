import React from "react";
import'./WishArea.css'
import SingleWish from "../SingleWish/SingleWish";

const WishArea = ({wishes,remove}) => {
  const allWishes = wishes.map(wish => 
   <section className="singleWish-body" key={wish.id}>
      <SingleWish
        id={wish.id}
        wish={wish.wish}
        description={wish.description}
        remove={remove}
      />
   </section>)

  return(
  <section className="wish-area">
    {allWishes}
  </section>
  )

}


export default WishArea; 