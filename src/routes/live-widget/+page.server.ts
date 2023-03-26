import { getQuotes } from '../../lib/data/dataService'
import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    quotes: getQuotes(5)
  }
}) satisfies PageServerLoad;