import { JsonViewer } from '@textea/json-viewer';
import { CustomJsonViewer } from '../../components/CustomJsonViewer';
import { flightSegmentType } from '../../dataType/flightSegment';
import { originDestinationType } from '../../dataType/originDestination';

export const itineraryRenderer = (props) => {
  return (
    <>
      <a name={props.value.uri}>{props.value.uri}</a>
      <CustomJsonViewer value={props.value} />
    </>
  );
};
