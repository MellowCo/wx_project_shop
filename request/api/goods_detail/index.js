import { ajax } from '../../request'

const dict = {
  DETAIL: 'goods/detail'
}

export function detail(goods_id) {
  return ajax({
    url: dict.DETAIL,
    data: { goods_id }
  })
}
