import { getData } from '../../lib/data/fakeData'

export interface LiveWidgetData {
  list: any[]
}

export const load = async () => {
  return {
    list: getData()
  }
}