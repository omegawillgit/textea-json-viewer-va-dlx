import { z } from 'zod';

export const itinerarySchema = z
  .object({
    id: z.string(),
    uri: z.string(),
  })
  .refine((v) => v.uri.match('/air/search/\\w+/itineraries/\\d+'));

export const isItinerary = (value) => {
  return itinerarySchema.safeParse(value).success;
};
