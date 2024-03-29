import camelize from "camelize";

export const restaurantsRequest = (location) => {
  const livehost = `https://us-central1-mealstogo-1a733.cloudfunctions.net/placesNearby?location=${location}`;

  return fetch(livehost).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  // const mappedResults = results.map((restaurant) => {
  //   return {
  //     ...restaurant,
  //     address: restaurant.vicinity,
  //     isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
  //     isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
  //   };
  // });

  // return camelize(mappedResults);
};
