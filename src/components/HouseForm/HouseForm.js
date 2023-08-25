import React from "react";
import "./HouseForm.css";
import { useState, useEffect } from "react";

const HouseForm = () => {
  const [griff, setGriff] = useState(0);
  const [raven, setRaven] = useState(0);
  const [huffle, setHuffle] = useState(0);
  const [slyther, setSlyther] = useState(0);

  const [list, setList] = useState([
    "q-1",
    "q-2",
    "q-3",
    "q-4",
    "q-5",
    "q-6",
    "q-7",
    "q-8",
    "q-9",
    "q-10",
    "q-11",
  ]);
  // update the state to be the most current array of houses

  useEffect(() => {
    function checkHouse(e, index) {
      const { value } = e.target;
      list.splice(index, 1, value);
      setList(list);
    }
  }, [list]);

  return (
    <section className="house-form-area">
      <section className="sorting-hat">
        <img src="" alt="" />
      </section>
      <form className="question-area">
        <fieldset className="question-1" onChange={(e) => checkHouse(e, 0)}>
          <p> When on being in a adventure what is the most valuable trait?</p>
          <input type="radio" name="q-1" value="slytherin" />
          <label>Self-Preservation</label>
          <input type="radio" name="q-1" value="gryffindor" />
          <label>Brave </label>
          <input type="radio" name="q-1" value="ravenclaw" />
          <label>Creativity </label>
          <input type="radio" name="q-1" value="hufflepuff" />
          <label>Patience</label>
        </fieldset>
        <fieldset className="question-2" onChange={(e) => checkHouse(e, 1)}>
          <p> What type of pet would you pick?</p>
          <input type="radio" name="q-2" value="slytherin" />
          <label>Snake </label>
          <input type="radio" name="q-2" value="gryffindor" />
          <label> Cat</label>
          <input type="radio" name="q-2" value="ravenclaw" />
          <label> Owl </label>
          <input type="radio" name="q-2" value="hufflepuff" />
          <label> Dog</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 2)}>
          <p>
            {" "}
            If your pet was under the Whomping Willow, you would do this ...{" "}
          </p>
          <input type="radio" name="q-3" value="gryffindor" />
          <label> Risk your life</label>
          <input type="radio" name="q-3" value="slytherin" />
          <label> Make someone else get it</label>
          <input type="radio" name="q-3" value="hufflepuff" />
          <label> get a professor</label>
          <input type="radio" name="q-3" value="ravenclaw" />
          <label> With a buddy distract and retrieve</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 3)}>
          <p>Which quidditch position do you play?</p>
          <input type="radio" name="q-4" value="slytherin" />
          <label> Beater</label>
          <input type="radio" name="q-4" value="gryffindor" />
          <label> Seeker</label>
          <input type="radio" name="q-4" value="ravenclaw" />
          <label> Chaser</label>
          <label> Keeper</label>
          <input type="radio" name="q-4" value="hufflepuff" />
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 4)}>
          <p>Which ghost would you befriend?</p>
          <input type="radio" name="q-5" value="hufflepuff" />
          <label> Fat Friar </label>
          <input type="radio" name="q-5" value="gryffindor" />
          <label> Nearly Headless Nick</label>
          <input type="radio" name="q-5" value="slytherin" />
          <label> Bloody Baron</label>
          <input type="radio" name="q-5" value="ravenclaw" />
          <label> The Grey Lady</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 5)}>
          <p>What candy would you eat to recover from the dementor's kiss? </p>
          <input type="radio" name="q-6" value="gryffindor" />
          <label> Chocolate</label>
          <input type="radio" name="q-6" value="slytherin" />
          <label> Snickers</label>
          <input type="radio" name="q-6" value="ravenclaw" />
          <label> Popcorn</label>
          <input type="radio" name="q-6" value="hufflepuff" />
          <label> Cupcakes</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 6)}>
          <p> Which mythical beast fits your personality?</p>
          <input type="radio" name="q-7" value="gryffindor" />
          <label> Hippogriff</label>
          <input type="radio" name="q-7" value="slytherin" />
          <label>Thestral</label>
          <input type="radio" name="q-7" value="ravenclaw" />
          <label>Sphinx</label>
          <input type="radio" name="q-7" value="hufflepuff" />
          <label>Erumpant</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 7)}>
          <p>Which shape would your Boggart take?</p>
          <input type="radio" name="q-8" value="gryffindor" />
          <label>Voldemort</label>
          <input type="radio" name="q-8" value="slytherin" />
          <label>Angry Dumbledore</label>
          <input type="radio" name="q-8" value="ravenclaw" />
          <label>Dalores Umbridge</label>
          <input type="radio" name="q-8" value="hufflepuff" />
          <label>Bellatrix Lestrange</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 8)}>
          <p> What instrument describes you?</p>
          <input type="radio" name="q-9" value="gryffindor" />
          <label>Guitar</label>
          <input type="radio" name="q-9" value="slytherin" />
          <label>Drums</label>
          <input type="radio" name="q-9" value="ravenclaw" />
          <label>Saxophone</label>
          <input type="radio" name="q-9" value="hufflepuff" />
          <label>Violin</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 9)}>
          <p>What would you research in the restricted section?</p>
          <input type="radio" name="q-10" value="gryffindor" />
          <label>The Tale of the Three Brothers</label>
          <input type="radio" name="q-10" value="slytherin" />
          <label>Horcruxes</label>
          <input type="radio" name="q-10" value="ravenclaw" />
          <label>Historical Founder idioms</label>
          <input type="radio" name="q-10" value="hufflepuff" />
          <label>Forbidden love potions</label>
        </fieldset>
        <fieldset onChange={(e) => checkHouse(e, 10)}>
          <p>Given polyjuice potion who would you become?</p>
          <input type="radio" name="q-11" value="gryffindor" />
          <label>Harry Potter</label>
          <input type="radio" name="q-11" value="slytherin" />
          <label> Draco Malfoy</label>
          <input type="radio" name="q-11" value="ravenclaw" />
          <label>Luna Lovegood</label>
          <input type="radio" name="q-11" value="hufflepuff" />
          <label>Cedric Diggory</label>
        </fieldset>
        <button type="submit"> </button>
      </form>
    </section>
  );
};

export default HouseForm;
