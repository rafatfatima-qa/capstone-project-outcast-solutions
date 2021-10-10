import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Policies from "./Policies";
import Profile from "./Profile";
import Home from "./Home";
import ProductList from "./ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import Categories from "./Categories";
import AddCart from "./AddCart";
import Radius from "./Radius";
import ShippingPolicy from "./ShippingPolicy";
import ReturnPolicy from "./ReturnPolicy";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/capstone-project-outcast-solutions/home">
          <Home />
        </Route>

        <Route exact path="/capstone-project-outcast-solutions">
          <Home />
        </Route>

        <Route path="/capstone-project-outcast-solutions/signin">
          <SignIn />
        </Route>

        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/productlist">
          <ProductList />
        </Route>

        <Route path="/Categories">
          <Categories />
        </Route>

        <Route path="/addcart">
          <AddCart />
        </Route>

        <Route exact path="/capstone-project-outcast-solutions/aboutus">
          <AboutUs />
        </Route>

        <Route path="/capstone-project-outcast-solutions/contactus">
          <ContactUs />
        </Route>

        <Route path="/radius">
          <Radius />
        </Route>

        <Route path="/capstone-project-outcast-solutions/policies">
          <Policies />
        </Route>

        <Route path="/capstone-project-outcast-solutions/shippingpolicy">
          <ShippingPolicy />
        </Route>

        <Route path="/capstone-project-outcast-solutions/ReturnPolicy">
          <ReturnPolicy />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
