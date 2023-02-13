import { getData } from '../../lib/data/fakeData'
import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    list: getData()
  }
}) satisfies PageServerLoad;