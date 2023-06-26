import { CustomJsonViewer } from '../../components/CustomJsonViewer';

export const originDestinationRenderer = (props) => {
  return (
    <>
      Duration {props.value.duration}
      <br />
      Arrival Offset {props.value.arrivalOffset}
      <CustomJsonViewer value={props.value.flightSegment} />
    </>
  );
};
