import { z } from 'zod';

export const itineraryPriceSchema = z
  .object({
    uri: z.string(),
  })
  .refine((v) => v.uri.match('/air/search/\\w+/itineraries-prices/\\d+_\\d+'));

export const isItineraryPrice = (value) => {
  return itineraryPriceSchema.safeParse(value).success;
};
