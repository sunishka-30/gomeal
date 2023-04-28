import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { Header, CreateContainer, MainContainer } from './components';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import {
  BrowserRouter,
} from "react-router-dom";
import Landingscreen from './screens/Landingscreen';
import Mainlanding from './screens/Mainlanding';
import Contactscreen from './screens/Contactscreen';
function App() {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode='wait'>
          <div className="w-screen h-auto flex flex-col bg-primary ">
      <Header />
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />

          <Route path="/createItem" element={<CreateContainer />} />
          <Route path='/about' element={<Landingscreen/>}/>
          <Route path='/home' element={<MainContainer />}/>
          <Route path='/contact' element={<Contactscreen />}/>
        </Routes>
      </main>
    </div> 
    </AnimatePresence>

    
  )
  
}

export default App;
