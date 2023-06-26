import { JsonViewer } from '@textea/json-viewer';
import { flightSegmentType } from '../../dataType/flightSegment';

export const originDestinationRenderer = (props) => {
  return (
    <>
      Duration {props.value.duration}
      <br />
      Arrival Offset {props.value.arrivalOffset}
      <JsonViewer
        value={props.value.flightSegment}
        editable={true}
        theme={'auto'}
        indentWidth="2"
        highlightUpdates={true}
        defaultInspectDepth={0}
        valueTypes={[flightSegmentType]}
      />
    </>
  );
};
