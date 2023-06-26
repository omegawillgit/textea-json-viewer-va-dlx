import { z } from 'zod';

export const flightSegmentSchema = z
  .object({
    uri: z.string(),
  })
  .refine((v) =>
    v.uri.match('/air/search/\\w+/itineraries/\\d+/flight-segments/[\\w\\-]*')
  );

export const isFlightSegment = (value) => {
  return flightSegmentSchema.safeParse(value).success;
};
