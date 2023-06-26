import { z } from 'zod';

export const originDestinationSchema = z
  .object({
    uri: z.string(),
  })
  .refine((v) =>
    v.uri.match('/air/search/\\w+/itineraries/\\d+/origins-destinations/\\d+')
  );

export const isOriginDestination = (value) => {
  return originDestinationSchema.safeParse(value).success;
};
