import { JsonViewer } from '@textea/json-viewer';

export const flightSegmentRenderer = (props) => {
  return (
    <table>
      <tr>
        <td colSpan="2">
          {props.value.marketingAirlineRef.id} {props.value.flightNumber}
        </td>
      </tr>
      <tr>
        <td>{props.value.departure.airportRef.id}</td>
        <td>{props.value.arrival.airportRef.id}</td>
      </tr>
      <tr>
        <td>{props.value.departure.date}</td>
        <td>{props.value.arrival.date}</td>
      </tr>
    </table>
  );
};
