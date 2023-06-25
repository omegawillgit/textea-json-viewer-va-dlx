export const itineraryRenderer = (props) => {
  return (
    <>
      {
        props.value.originDestination.at(0)?.flightSegment.at(0)
          ?.marketingAirlineRef.id
      }{' '}
      {props.value.originDestination.at(0)?.flightSegment.at(0)?.flightNumber}
    </>
  );
};
