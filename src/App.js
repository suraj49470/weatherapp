import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CityDetail from './components/CityDetail/CityDetail';
import SearchCityList from './components/SearchCityList/SearchCityList';

import { initialState } from "./utilities/initialState";
import { searchCity } from "./reducers/searchCity";
import { cityDetail } from "./reducers/cityDetail";

export const weatherContext = React.createContext();

export default function App() {
  
  const [searchCityState, searchCityStateDispatch] = useReducer(searchCity, initialState.searchCityState);
  const [cityDetailState,cityDetailDispatch] = useReducer(cityDetail,initialState.CityDetailState);




  const stateDispatchObj = {
    searchCityState: searchCityState, searchCityStateDispatch: searchCityStateDispatch,
    cityDetailState : cityDetailState , cityDetailDispatch : cityDetailDispatch
  };
  return (

    <div>
      <weatherContext.Provider value={stateDispatchObj}>
        <Router>
          <Switch>
            <Route path="/cityDetail/:woeid">
              <CityDetail />
            </Route>
            <Route path="/">
              <SearchCityList />
            </Route>
          </Switch>
        </Router>
      </weatherContext.Provider>
    </div>

  );
}

