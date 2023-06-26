import { JsonViewer, defineDataType } from '@textea/json-viewer';

import { originDestinationRenderer } from '../../dataType/originDestination/renderer';
import { isOriginDestination } from '../../dataType/originDestination/zod';

export const originDestinationType = defineDataType({
  is: isOriginDestination,
  Component: originDestinationRenderer,
});
