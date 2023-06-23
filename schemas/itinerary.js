import { z } from 'zod';

export const itinerarySchema = z
  .object({
    uri: z.string(),
  })
  .refine((v) => v.uri.match('/air/search/\\w+/itineraries/\\d+'));
