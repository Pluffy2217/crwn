import Home from "./components/routes/Home/home.component";
import Navigation from "./components/routes/Navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return(
    <h1>Shop Page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
