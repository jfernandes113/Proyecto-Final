import List from "../../components/List";
import Common from "../../styles";
import { useEffect, useState } from "react";
import axios from 'axios';
import locationsData from "./locations.json";

const Locations = () => {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      let newLocations = [];
      for (let location of locationsData) {
        try {
          const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location.name}&appid=492feb4e46fa1b8b457219d32b346cda&units=metric`);
          const newLocation = {...location, currentWeather: response.data.main.temp};

          newLocations.push({
            name: newLocation.name,
            recommendations: newLocation.recommendations,
            values: [
              {
                background: 'blue',
                value: newLocation.averageAge,
                key: 'averageAge'
              },
              {
                background: 'blue',
                value: newLocation.averageRent,
                key: 'averageRent'
              },
              {
                background: 'blue',
                value: newLocation.averageWeather,
                key: 'averageWeather'
              },
              {
                background: 'blue',
                value: newLocation.currentWeather,
                key: 'currentWeather'
              }
            ]
          });
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      }
      setLocations(newLocations);
    }
    fetchWeather();
  }, [locationsData]);


  return (
    <Common.Page vertical="start">
      <a href="/" class="back-link">Atras</a><br></br>

      <h2>Locations</h2>

      <List items={locations}></List>

    </Common.Page>
  );
};

export default Locations;