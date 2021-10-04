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


export const searchCityContext = React.createContext();

export default function App() {
  const [searchCityState, searchCityStateDispatch] = useReducer(searchCity, initialState.searchCityState);
  const stateDispatchObj = {
    searchCityState: searchCityState, searchCityStateDispatch: searchCityStateDispatch
  };
  return (

    <div>
      <searchCityContext.Provider value={stateDispatchObj}>
        <Router>
          <Switch>
            <Route path="/cityDetail/:id">
              <CityDetail />
            </Route>
            <Route path="/">
              <SearchCityList />
            </Route>
          </Switch>
        </Router>
      </searchCityContext.Provider>
    </div>

  );
}

