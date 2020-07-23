import { ajax } from '../../request'

const dict = {
  CATEGORIES: 'categories'
}

export function categories() {
  return ajax({
    url: dict.CATEGORIES
  })
}
