import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

export default function Map(props) {
  const trip = props.props;
  console.log(trip);
  const start = [
    trip["start station location"].coordinates[1],
    trip["start station location"].coordinates[0],
  ];
  const end = [
    trip["end station location"].coordinates[1],
    trip["end station location"].coordinates[0],
  ];

  return (
    <MapContainer style={{ height: "500px" }} center={start} zoom={15}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={start}>
        <Tooltip permanent direction="right">
          Start: {trip["start station name"]}
        </Tooltip>
      </Marker>
      <Marker position={end}>
        <Tooltip permanent direction="right">
          End: {trip["end station name"]}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
