import { z } from 'zod';

export const MovieImageSchema = z.string();
export type TMovieImage = z.infer<typeof MovieImageSchema>;

export const MovieSchema = z.object({
  title: z.string(),
  year: z.string(),
  rated: z.string(),
  released: z.string(),
  runtime: z.string(),
  genre: z.string(),
  director: z.string(),
  writer: z.string(),
  actors: z.string(),
  plot: z.string(),
  language: z.string(),
  Country: z.string(),
  Awards: z.string(),
  Poster: z.string(),
  Metascore: z.string(),
  imdbRating: z.string(),
  imdbVotes: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  Response: z.string(),
  Images: z.array(MovieImageSchema),
  id: z.string(),
});

export type TMovie = z.infer<typeof MovieSchema>;

export const MoviesListSchema = z.object({
  first: z.number(),
  prev: z.number().nullable(),
  next: z.number().nullable(),
  last: z.number(),
  pages: z.number(),
  items: z.number(),
  data: z.array(MovieSchema),
});
export type TMoviesList = z.infer<typeof MoviesListSchema>;
