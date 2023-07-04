import { JsonViewer, defineDataType } from '@textea/json-viewer';
import { commonPriceRenderer } from '../../dataType/commonPrice/renderer';
import { isCommonPrice } from '../../dataType/commonPrice/zod';

export const commonPriceType = defineDataType({
  is: isCommonPrice,
  Component: commonPriceRenderer,
});
