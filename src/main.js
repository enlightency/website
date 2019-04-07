// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  head.meta.push({
    name: 'keywords',
    content: '個人品牌,企業技術形象,軟技能,職涯教練,線上課程,履歷表,履歷撰寫技巧'
  })

  head.meta.push({
    name: 'description',
    content: '\n' +
        '澄煦顧問（Enlightency Consulting）是一家技術顧問公司，服務對象為軟體工程師與軟體企業。澄煦提供的服務包括程式語言訓練課程、軟體專案管理訓練、軟體社群營運服務等；另外，還提供職涯顧問、履歷表課程…等軟性技能服務。澄煦，點亮你溫暖的技術職涯。'
  })

  head.meta.push({
    name: 'author',
    content: '澄煦顧問'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}


