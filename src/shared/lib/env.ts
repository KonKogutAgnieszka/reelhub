import { z } from 'zod';

/**
 * Environment variables schema.
 */

const envSchema = z.object({
  TMDB_ACCESS_TOKEN: z.string().min(1, 'TMDB_ACCESS_TOKEN is required and cannot be empty'),
  TMDB_API_URL: z
    .string()
    .url('TMDB_API_URL must be a valid URL')
    .default('https://api.themoviedb.org/3'),
  TMDB_IMAGE_URL: z
    .string()
    .url('TMDB_IMAGE_URL must be a valid URL')
    .default('https://image.tmdb.org/t/p'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:');
  console.error(parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables. Check your .env.local file.');
}

export const env = parsed.data;
