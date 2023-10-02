import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useDispatch, useSelector } from "react-redux";
import { PropertyThunk } from "./redux/PropertySlice";
import CityTabs from './components/CityTabs';
import PropertyCard from './components/PropertyCard';
import PropertyDetails from './components/PropertyDetails';

function App() {
  const store = useSelector((state) => state.property);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(store)
    if (store.length === 0) {
      dispatch(PropertyThunk());
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <CityTabs cities={store} />
      {/* <Routes>
        <Route path="/" element={<PropertyCard property={store} />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes> */}
    </Router>
  );
}

export default App;
