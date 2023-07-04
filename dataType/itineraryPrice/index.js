import { JsonViewer, defineDataType } from '@textea/json-viewer';

import { itineraryPriceRenderer } from '../../dataType/itineraryPrice/renderer';
import { isItineraryPrice } from '../../dataType/itineraryPrice/zod';

export const itineraryPriceType = defineDataType({
  is: isItineraryPrice,
  Component: itineraryPriceRenderer,
});
