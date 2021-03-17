import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Home from "./components/Home";
import Breakfast from './components/Breakfast'
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Dessert from "./components/Dessert";
import Soups from "./components/Soups";
import Snacks from "./components/Snacks";
import GoVegan from "./components/GoVegan";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp' 

import { Switch, Route } from "react-router-dom";
import { client } from "./components/Client";

function App() {
 const [recipes, setRecipes] = useState([]);

 useEffect(() => {
   client.getEntries().then((entries) => {
     setRecipes(entries.items);
     console.log(entries);
   });
 }, []);



  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/breakfast">
          <Breakfast recipes={recipes} />
        </Route>

        <Route path="/lunch">
          <Lunch recipes={recipes} />
        </Route>
        <Route path="/dinner">
          <Dinner recipes={recipes} />
        </Route>
        <Route path="/dessert">
          <Dessert recipes={recipes} />
        </Route>
        <Route path="/soups">
          <Soups recipes={recipes} />
        </Route>
        <Route path="/snacks">
          <Snacks recipes={recipes} />
        </Route>
        <Route path="/govegan">
          <GoVegan />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
