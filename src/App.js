import "./App.css";
import AppRouter from "./AppRouter";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { useJsApiLoader } from "@react-google-maps/api";

function App() {
  const app = initializeApp(firebaseConfig);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
