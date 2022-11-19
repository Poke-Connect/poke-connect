import CollectionCell from "./CollectionCell/ConnectionCell";
import UpcomingConnections from "./UpcomingConnections/UpcomingConnections";
import CompletedConnections from "./CompletedConnections/CompletedConnections";
import myData from "../../assets/mockData/data.json";
const MyConnections = () => {
  const pokeDetailsUpcomingConnections = myData.upcommingTrips;
  const pokeDetailsCompletedConnections = myData.completedTrips;
  return (
    <div className="pt-6">
      <h1 className="text-3xl font-bold "> My Connections </h1>
      <div className="scroll-fix">
        <UpcomingConnections pokeDetails={pokeDetailsUpcomingConnections} />
        <CompletedConnections pokeDetails={pokeDetailsCompletedConnections} />
      </div>
    </div>
  );
};

export default MyConnections;
