import { Map } from "./components/Map/Map";
import { useJsApiLoader } from '@react-google-maps/api';

import { Spinner } from './components/Spinner'
const API_KEY = process.env.REACT_APP_API_KEY;


const App = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  return (
    <div className="App">
      { isLoaded ? <Map /> : <Spinner />}
    </div>
  );
}

export default App;
