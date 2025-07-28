import comp from "/Users/congyuan/projects/wso2848303.github.io/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"Article 1\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"Category A\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1753680379000,\"contributors\":[{\"name\":\"Cong Yuan\",\"username\":\"\",\"email\":\"wso2848303@163.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"ecf6fa4bfafdfcb517670d4ba800a55fdc15df43\",\"time\":1753680379000,\"email\":\"wso2848303@163.com\",\"author\":\"Cong Yuan\",\"message\":\"init\"}]},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
export { comp, data }

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
