import "./App.css";
import AppRouter from "./AppRouter";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { useJsApiLoader } from "@react-google-maps/api";
import Header from "./components/Layout/Header"

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
    <div className="App mx-auto relative h-screen">
      <Header />
      <div className="mx-6"><AppRouter /></div>
    </div>
  );
}

export default App;
