import { JsonViewer } from '@textea/json-viewer';
import { flightSegmentType } from '../../dataType/flightSegment';
import { originDestinationType } from '../../dataType/originDestination';

export const itineraryRenderer = (props) => {
  return (
    <JsonViewer
      value={props.value}
      editable={true}
      theme={'auto'}
      indentWidth="2"
      highlightUpdates={true}
      defaultInspectDepth={0}
      valueTypes={[originDestinationType, flightSegmentType]}
    />
  );
};
