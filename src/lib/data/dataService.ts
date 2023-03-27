/**
 * Returns data from https://dummyjson.com/docs/quotes
 * @returns 
 */
export const getQuotes = async (limit?: number, skip?: number) => {
  const params: Record<string, any> = {};
  if (limit != null) {
    params.limit = limit;
  }
  if (skip != null) {
    params.skip = skip;
  }
  const queryParams: string = new URLSearchParams(params).toString();
  return fetch('https://dummyjson.com/quotes?' + queryParams)
    .then(res => res.json())
    .then(res => res.quotes)
    .catch(e => console.log(e))
}