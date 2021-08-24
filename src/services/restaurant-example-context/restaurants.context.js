import React, { useState, useContext, createContext, useEffect } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

const RestaurantsContext = createContext();

const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location?.lat},${location?.lng}`;
      retrieveRestaurants(locationString);
    } else {
      const locationString = '0,0';
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        // restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
