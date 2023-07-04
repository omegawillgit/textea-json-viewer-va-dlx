import { z } from 'zod';

export const itineraryPriceSchema = z
  .object({
    id: z.string(),
    totalPrice: z.object(),
    travelerPrice: z.object(),
    originDestinationPrice: z.object(),
    farePrice: z.object(),
  })
  .refine((v) => v.uri.match('/air/search/\\w+/itineraries-prices/\\d+_\\d+'));

export const isItineraryPrice = (value) => {
  return itineraryPriceSchema.safeParse(value).success;
};
