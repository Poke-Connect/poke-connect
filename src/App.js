import "./App.css";
import AppRouter from "./AppRouter";
import { useJsApiLoader } from "@react-google-maps/api";
import Header from "./components/Layout/Header/Header";
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
        <Header />
        <div>
          <AppRouter />
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
