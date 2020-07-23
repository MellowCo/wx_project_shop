import { ajax } from '../../request'

const dict = {
  SWIPER_DATA: 'home/swiperdata',
  NAVS: 'home/catitems',
  FLOOR_DATA: 'home/floordata'
}

export function swipers() {
  return ajax({
    url: dict.SWIPER_DATA
  })
}

export function navs() {
  return ajax({
    url: dict.NAVS
  })
}

export function floor() {
  return ajax({
    url: dict.FLOOR_DATA
  })
}
