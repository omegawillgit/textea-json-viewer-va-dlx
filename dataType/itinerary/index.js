import { JsonViewer, defineDataType } from '@textea/json-viewer';

import { itineraryRenderer } from '../../dataType/itinerary/renderer';
import { isItinerary } from '../../dataType/itinerary/zod';

export const itineraryType = defineDataType({
  is: isItinerary,
  Component: itineraryRenderer,
});
