export const data = JSON.parse("{\"key\":\"v-fb0f0066\",\"path\":\"/guide/getting-started.html\",\"title\":\"简介\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1676744152000,\"contributors\":[{\"name\":\"ShineYu\",\"email\":\"shine.yulingle@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"guide/getting-started.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
