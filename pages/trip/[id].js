import { useRouter } from "next/router";
import PageHeader from "@/component/PageHeader";
import Map from "@/component/Map";

export async function getStaticPaths() {
  const res = await fetch(
    "https://yongdalong.cyclic.app/api/trips?page=1&perPage=10"
  );
  const data = await res.json();

  const paths = data.map((trip) => ({
    params: { id: trip._id },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://yongdalong.cyclic.app/api/trips/${context.params.id}`
  );
  const trip = await res.json();
  return { props: { trip } };
}

export default function Trip(props) {
  if (!props) return null;
  console.log(props.trip);

  return (
    <>
      <PageHeader
        title={`Bike: ${props.trip?.bikeid}`}
        text={`${props.trip["start station name"]} - ${props.trip["end station name"]}`}
        showSubscriber={props.trip?.usertype === "Subscriber"}
        showCustomer={props.trip?.usertype === "Customer"}
      />
      <Map props={props.trip} />
      <br />
      <ul>
        <li>
          <strong>Trip Duration: </strong>
          {props.trip.tripduration}
        </li>
        <li>
          <strong>Birth Year: </strong>
          {props.trip["birth year"]}
        </li>
        <li>
          <strong>Start Time: </strong>
          {props.trip["start time"]}
        </li>
        <li>
          <strong>Stop Time: </strong>
          {props.trip["stop time"]}
        </li>
      </ul>
    </>
  );
}
