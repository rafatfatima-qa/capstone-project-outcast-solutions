import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Policies from "./Policies";
import Profile from "./Profile";
import Home from "./Home";
import ProductList from "./ProductList";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import Categories from "./Categories";
import AddCart from "./AddCart";
import Radius from "./Radius";
import ShippingPolicy from "./ShippingPolicy";
import ReturnPolicy from "./ReturnPolicy";
import OrderList from "./OrderList";
import Search from "./Search";

const Main = () => {
  return (
    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Home">
          <Home />
        </Route>

        <Route exact path="/capstone-project-outcast-solutions">
          <Home />
        </Route>

        <Route path="/SignIn">
          <SignIn />
        </Route>

        <Route path="/ForgotPassword">
          <ForgotPassword />
        </Route>

        <Route path="/SignUp">
          <SignUp />
        </Route>

        <Route path="/ProductList">
          <ProductList />
        </Route>

        <Route path="/Search">
          <Search />
        </Route>

        <Route path="/Categories">
          <Categories />
        </Route>

        <Route path="/AddCart">
          <AddCart />
        </Route>

        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>

        <Route path="/ContactUs">
          <ContactUs />
        </Route>

        <Route path="/Radius">
          <Radius />
        </Route>

        <Route path="/Policies">
          <Policies />
        </Route>

        <Route path="/ShippingPolicy">
          <ShippingPolicy />
        </Route>

        <Route path="/ReturnPolicy">
          <ReturnPolicy />
        </Route>

        <Route path="/OrderList">
          <OrderList />
        </Route>

        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    
  );
};

export default Main;