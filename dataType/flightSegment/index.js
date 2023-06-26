import { JsonViewer, defineDataType } from '@textea/json-viewer';

import { flightSegmentRenderer } from '../../dataType/flightSegment/renderer';
import { isFlightSegment } from '../../dataType/flightSegment/zod';

export const flightSegmentType = defineDataType({
  is: isFlightSegment,
  Component: flightSegmentRenderer,
});
