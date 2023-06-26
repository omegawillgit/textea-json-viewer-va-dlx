import { JsonViewer, defineDataType } from '@textea/json-viewer';

import { uriRenderer } from '../../dataType/uri/renderer';
import { isUri } from '../../dataType/uri/zod';

export const uriType = defineDataType({
  is: isUri,
  Component: uriRenderer,
});
