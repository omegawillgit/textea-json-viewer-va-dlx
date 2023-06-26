import { JsonViewer } from '@textea/json-viewer';
import { flightSegmentType } from '../../dataType/flightSegment';
import { originDestinationType } from '../../dataType/originDestination';

export const itineraryRenderer = (props) => {
  return (
    <>
      <a name={props.value.uri}>{props.value.uri}</a>
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
