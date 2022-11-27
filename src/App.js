import "./App.css";
import AppRouter from "./AppRouter";
import { useJsApiLoader } from "@react-google-maps/api";
import { AuthContextProvider } from "./context/AuthContext";
import { useLocation } from 'react-router-dom'

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_POKE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const location = useLocation();
  const val = location.pathname.includes('signin') || location.pathname === "/";
  console.log(location.pathname);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContextProvider>
      <div className={`App md:mx-auto relative h-screen max-w-xl mx-auto ${val ? "pt-0":"pt-24"}`}>
          <AppRouter />
      </div>
    </AuthContextProvider>
  );
}

export default App;
