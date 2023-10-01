import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PropertyThunk } from "./redux/PropertySlice";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CityTabs from './components/CityTabs';
import PropertyCard from './components/PropertyCard';
import PropertyDetails from './components/PropertyDetails';

function App() {

  const store = useSelector((state) => state.property);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.length === 0) {
      dispatch(PropertyThunk());
    }
  });

  return (
    <Router>
      <Header />
      <CityTabs />
      <Routes>
        <Route path="/property/:id" element={<PropertyDetails/>} />
        <Route path="/" element={<PropertyCard/>} />
      </Routes>
    </Router>
  );
}

export default App;
