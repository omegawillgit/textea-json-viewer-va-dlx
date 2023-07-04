import { JsonViewer } from '@textea/json-viewer';
import { commonPriceType } from '../dataType/commonPrice';
import { flightSegmentType } from '../dataType/flightSegment';
import { itineraryType } from '../dataType/itinerary';
import { itineraryPriceType } from '../dataType/itineraryPrice';
import { originDestinationType } from '../dataType/originDestination';
import { uriType } from '../dataType/uri';

export const CustomJsonViewer = (value) => (
  <JsonViewer
    value={value}
    editable={false}
    theme={'auto'}
    indentWidth="2"
    highlightUpdates={true}
    defaultInspectDepth={3}
    valueTypes={[
      itineraryType,
      // itineraryPriceType,
      originDestinationType,
      flightSegmentType,
      commonPriceType,
      uriType,
    ]}
  />
);
