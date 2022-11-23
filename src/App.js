import "./App.css";
import AppRouter from "./AppRouter";
import { useJsApiLoader } from "@react-google-maps/api";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContextProvider>
      <div className="App md:mx-auto relative h-screen">
        <div className="pt-40">
          <AppRouter />
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
