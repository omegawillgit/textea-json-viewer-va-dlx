import { z } from 'zod';

export const uriSchema = z.string().refine((v) => v.match('/air/search'));

export const isUri = (value) => {
  return uriSchema.safeParse(value).success;
};
