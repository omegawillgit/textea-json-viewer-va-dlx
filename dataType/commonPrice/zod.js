import { z } from 'zod';

export const commonPriceSchema = z.object({
  // hello: z.string(),
  baseFare: z.object(),
  // totalFare: z.object(),
  // tax: z.object().array(),
});

export const isCommonPrice = (value) => {
  return commonPriceSchema.safeParse(value).success;
};
