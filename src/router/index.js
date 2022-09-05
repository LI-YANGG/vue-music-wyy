import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import('@/views/recommend') // 推荐页面
const Search = () => import('@/views/search') // 搜索页面
const Singer = () => import('@/views/singer') // 歌手页面
const SingerDetail = () => import('@/views/singer-detail') // 歌手详情页面
const TopList = () => import('@/views/top-list') // 排行页面
const UserCenter = () => import('@/views/user-center') // 个人中心

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/user-center',
    component: UserCenter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
