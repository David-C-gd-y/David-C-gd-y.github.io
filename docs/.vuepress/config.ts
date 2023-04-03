import { defineUserConfig } from "vuepress";

import theme from "./theme";
/**
 * 参考链接： https://v2.vuepress.vuejs.org/zh/reference/config.html
 */
export default defineUserConfig({
  /**
   * 部署站点的基础路径。
   * 如果你想让你的网站部署到一个子路径下，你将需要设置它。
   * 它的值应当总是以斜杠开始，并以斜杠结束。
   * 举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。
   * base 将会作为前缀自动地插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。
   * 需要注意的是， base 应该是一个以 / 开始和结束的绝对路径名。
   */
  base: "/vueperssdemo/",
  /**
   * 站点的语言。
   * 它将会在最终渲染出的 HTML 中作为 <html> 标签的 lang 属性。
   * 它可以设置在不同语言的 locales 中。
   */
  lang: "zh-CN",
  /**
   * 站点的标题。
   * 它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。
   */
  title: "vue press",
  /**
   * 它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。
   * 它会被每个页面的 Frontmatter 中的 description 字段覆盖。
   */
  description: `站点的描述`,
  /**
   * 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签。
   * 你可以通过 [tagName, { attrName: attrValue }, innerHTML?] 的格式来添加标签。
   */
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  /**
   * 多语言配置
   * 多语言支持的各个语言 locales 。
   * 参考配置：https://v2.vuepress.vuejs.org/zh/guide/i18n.html
   * 如果存在 locales 那么 顶层配置项其实是会被覆盖的。
   * 默认语言使用的 key 是 /, 如果没有注释， 这份示例的顶层配置， lang , title, description, head 都会被覆盖掉
   */
  locales: {
    "/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
      head: [],
    },
  },
  /**
   * 设置站点要使用的主题
   * 如果不设置该选项，将会使用默认主题
   * 参考配置：https://v2.vuepress.vuejs.org/zh/guide/theme.html
   */
  theme: theme,
});
