import { JsonViewer } from '@textea/json-viewer';
import { CustomJsonViewer } from '../../components/CustomJsonViewer';
import { flightSegmentType } from '../../dataType/flightSegment';
import { originDestinationType } from '../../dataType/originDestination';
import { uriType } from '../../dataType/uri';

export const itineraryPriceRenderer = (props) => {
  return (
    <>
      <a name={props.value.uri}>{props.value.uri}</a>
      {/* <CustomJsonViewer value={props.value}/> */}
      <JsonViewer
        value={props.value}
        editable={true}
        theme={'auto'}
        indentWidth="2"
        highlightUpdates={true}
        defaultInspectDepth={0}
        valueTypes={[uriType]}
      />
    </>
  );
};
