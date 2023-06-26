import { JsonViewer } from '@textea/json-viewer';
import { flightSegmentType } from '../../dataType/flightSegment';
import { originDestinationType } from '../../dataType/originDestination';

export const itineraryRenderer = (props) => {
  return (
    <>
      {
        props.value.originDestination.at(0)?.flightSegment.at(0)
          ?.marketingAirlineRef.id
      }{' '}
      {props.value.originDestination.at(0)?.flightSegment.at(0)?.flightNumber}
      <JsonViewer
        value={props.value}
        editable={true}
        theme={'auto'}
        indentWidth="2"
        highlightUpdates={true}
        defaultInspectDepth={0}
        valueTypes={[originDestinationType, flightSegmentType]}
      />
    </>
  );
};
