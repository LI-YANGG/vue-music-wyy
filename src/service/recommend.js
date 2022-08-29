import { get } from './base'

export function getRecommend() {
  return get('/api/getRecommend')
}

// export function getAlbun(album) {
//   return get('/api/getAlbum', {
//     id: album.id
//   })
// }
