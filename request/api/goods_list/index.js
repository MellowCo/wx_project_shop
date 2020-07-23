const dict = {
  SEARCH: 'goods/search'
}

import { ajax } from '../../request'

export function search({ query, cid, pagenum, pagesize }) {
  return ajax({
    url: dict.SEARCH,
    data: {
      query,
      cid,
      pagenum,
      pagesize
    },
    loading: false
  })
}
