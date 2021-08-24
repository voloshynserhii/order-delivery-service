import React, { useState, useContext, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastlat = viewport.northeast?.lat || 37;
    const southwestlat = viewport.southwest?.lat || -122;
    setLatDelta(northeastlat - southwestlat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat || 37,
          longitude: lng || -122,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {/* {vehicles.map((vehicle) => {
          return (
            <MapView.Marker
              key={vehicle.name}
              title={vehicle.name}
              coordinate={{
                latitude: vehicle?.geometry?.location?.lat || 37,
                longitude: vehicle?.geometry?.location?.lng || -122,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("VehicleDetails", { item: vehicle })
                }
              >
                <MapCallout vehicle={vehicle} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })} */}
      </Map>
    </>
  );
};
