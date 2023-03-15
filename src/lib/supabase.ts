import { createClient } from '@supabase/supabase-js'
import { Database } from './Database'
import 'react-native-url-polyfill/auto'

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  'https://fzhyawpsgtwuolxvzmug.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aHlhd3BzZ3R3dW9seHZ6bXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NDExMTQsImV4cCI6MTk5NDAxNzExNH0.sXgrZzf70Yr9TKD4wlQR37_eNYO0KcTSmL976aRqB1A'
)

export async function getMovies() {
  return await supabase.from('movies').select(`id, title`)
}

type MoviesResponse = Awaited<ReturnType<typeof getMovies>>
export type MoviesResponseSuccess = MoviesResponse['data']
export type MoviesResponseError = MoviesResponse['error']
