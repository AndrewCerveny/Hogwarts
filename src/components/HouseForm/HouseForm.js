import React from "react";
import './HouseForm.css'
import { useState, useEffect } from "react";



const HouseForm = () => {

 return(<section className="house-form-area">
    <section className="sorting-hat"> 
      <img src="" alt=""/>
    </section>
    <form className="question-area">
      <fieldset className="question-1">
        <p> When on being in a adventure what is the most valuable trait?</p>
          <label>Self-Preservation
            <input type="radio" name='q-1' value='slytherin'/>  
          </label>
          <label>Brave 
            <input type="radio" name='q-1' value='gryffindor'/> 
          </label>
          <label>Creativity 
            <input type="radio" name='q-1' value='ravenclaw'/>
          </label>
          <label>Patience 
            <input type="radio" name='q-1'value='hufflepuff'/>
          </label> 
      </fieldset>
      <fieldset className="question-2">   
        <p> What type of pet would you pick?</p>
          <label> Snake
            <input type="radio" name='q-2' value='slytherin'/>
          </label>
          <label> Cat
            <input type="radio" name='q-2' value='gryffindor'/>
          </label>
          <label> Owl
            <input type="radio" name='q-2' value='ravenclaw'/>
          </label>
          <label> Dog
            <input type="radio" name='q-2' value='hufflepuff'/>
          </label> 
      </fieldset>
      <fieldset>
        <p> If your pet was under the Whomping Willow, you would do this ... </p>
        <label> Risk your life
          <input type="radio" name='q-3' value='gryffindor'/>
        </label>
        <label> Make someone else get it 
          <input type="radio" name='q-3' value='slytherin'/>
        </label>
        <label> get a professor
          <input type="radio" name='q-3' value='hufflepuff'/>
        </label>
        <label> With a buddy distract and retrieve
          <input type="radio" name='q-3' value='ravenclaw'/>
        </label>
      </fieldset>
      <fieldset>
        <p>Which quidditch position do you play?</p>
        <label> Beater
           <input type="radio" name='q-4' value='slytherin'/>
        </label>
         <label> Seeker
           <input type="radio" name='q-4' value='gryffindor'/>
        </label>
         <label> Chaser
           <input type="radio" name='q-4' value='ravenclaw'/>
        </label>
         <label> Keeper
           <input type="radio" name='q-4' value='hufflepuff'/>
        </label>
      </fieldset>
      <fieldset>
        <p>Which ghost would you befriend?</p>
        <label> Fat Friar 
          <input type="radio" name='q-5' value='hufflepuff'/>
        </label>
         <label> Nearly Headless Nick 
          <input type="radio" name='q-5' value='gryffindor'/>
        </label>
         <label> Bloody Baron
          <input type="radio" name='q-5' value='slytherin'/>
        </label>
         <label> The Grey Lady 
          <input type="radio" name='q-5' value='ravenclaw'/>
        </label>
      </fieldset>
      <fieldset>
        <p>What candy would you eat to recover from the dementor's kiss? </p>
          <label> Chocolate
            <input type="radio" name='q-6' value='gryffindor'/>
          </label>
           <label> Snickers
            <input type="radio" name='q-6' value='slytherin'/>
          </label>
           <label> Popcorn
            <input type="radio" name='q-6' value='ravenclaw'/>
          </label>
           <label> Cupcakes 
            <input type="radio" name='q-6' value='hufflepuff'/>
          </label>
      </fieldset>
      <fieldset>
        <p> Which mythical beast fits your personality?</p>
        <label> Hippogriff
          <input type="radio" name='q-7' value='gryffindor'/>
        </label>
        <label>Thestral
          <input type="radio" name='q-7' value='slytherin'/>
        </label>
        <label>Sphinx
          <input type="radio" name='q-7' value='ravenclaw'/>
        </label>
        <label> Erumpant
          <input type="radio" name='q-7' value='hufflepuff'/>
        </label> 
      </fieldset>
      <fieldset>
        <p>Which shape would your Boggart take?</p>
        <label>Voldemort
          <input type="radio" name='q-8' value='gryffindor'/>
        </label>
         <label>Angry Dumbledore 
          <input type="radio" name='q-8' value='slytherin'/>
        </label>
         <label>Dalores Umbridge 
          <input type="radio" name='q-8' value='ravenclaw'/>
        </label>
         <label>Bellatrix Lestrange
          <input type="radio" name='q-8' value='hufflepuff'/>
        </label>
      </fieldset>
      <fieldset>
        <p> What instrument describes you?</p>
          <label>Guitar
          <input type="radio" name='q-9' value='gryffindor'/>
        </label>
         <label>Drums  
          <input type="radio" name='q-9' value='slytherin'/>
        </label>
         <label>Saxophone
          <input type="radio" name='q-9' value='ravenclaw'/>
        </label>
         <label>Violin
          <input type="radio" name='q-9' value='hufflepuff'/>
        </label>
      </fieldset>
      <fieldset>
        <p>What would you research in the restricted section?</p>
          <label>The Tale of the Three Brothers
          <input type="radio" name='q-10' value='gryffindor'/>
        </label>
         <label>Horcruxes
          <input type="radio" name='q-10' value='slytherin'/>
        </label>
         <label>Historical Founder idioms
          <input type="radio" name='q-10' value='ravenclaw'/>
        </label>
         <label>Forbidden love potions 
          <input type="radio" name='q-10' value='hufflepuff'/>
        </label>
      </fieldset>
      <fieldset>
        <p>Given polyjuice potion who would you become?</p>
          <label>Harry Potter 
          <input type="radio" name='q-11' value='gryffindor'/>
        </label>
         <label> Draco Malfoy
          <input type="radio" name='q-11' value='slytherin'/>
        </label>
         <label>Luna Lovegood
          <input type="radio" name='q-11' value='ravenclaw'/>
        </label>
         <label>Cedric Diggory
          <input type="radio" name='q-11' value='hufflepuff'/>
        </label>
      </fieldset>
      <button type="submit"> Submit </button>
    </form>
  </section>
  )
}

export default HouseForm;
  
