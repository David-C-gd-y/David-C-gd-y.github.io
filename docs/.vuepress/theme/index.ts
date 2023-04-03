/**
 * 这是主题的配置，因为配置项多，拆分独立文件方便维护
 * 默认主题配置项参考链接： https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
 */
import { defaultTheme } from "vuepress";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";
export default defaultTheme({
  /**
   * 该配置项仅能在默认主题内生效，注意不要和 站点配置 中的 locales 混淆。
   */
  locales: {
    "/": {},
  },

  // 导航栏
  navbar: navbar.navbarZh,
  selectLanguageName: "简体中文",
  selectLanguageText: "选择语言",
  selectLanguageAriaLabel: "选择语言",

  // 侧边栏
  sidebar: sidebar.sidebarZh,

  // custom containers
  tip: "提示",
  warning: "注意",
  danger: "警告",
  // 404 page
  notFound: [
    "这里什么都没有",
    "我们怎么到这来了？",
    "这是一个 404 页面",
    "看起来我们进入了错误的链接",
  ],
  backToHome: "返回首页",
  // a11y
  openInNewWindow: "在新窗口打开",
  toggleColorMode: "切换颜色模式",
  toggleSidebar: "切换侧边栏",
  colorMode: "auto", // "auto" | "dark" | "light" 
  colorModeSwitch: true,
  home: "/",
  /**
   * 支持本地路径和 http 路径
   * Public 文件路径
   * logo: '/images/hero.png',
   * HttpUrl
   * logo: 'https://vuejs.org/images/logo.png',
   */
  logo: "https://vuejs.org/images/logo.png",
  /**
   * 夜间模式的 logo
   * 如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。
   * 设置为 null 可以在夜间模式下禁用 Logo
   */
  logoDark: "https://vuejs.org/images/logo.png",
  /**
   * 项目仓库的 URL
   * 如果按照 `organization/repository` 的格式设置它
   * 配置项会将它作为一个 GitHub 仓库
   *
   * 也可以直接将它设置为一个 URL
   */
  // repo: "vuejs/vuepress",
  /**
   * 项目仓库的标签。
   * 它将被用作 仓库链接 的文字。仓库链接 将会显示为导航栏的最后一个元素
   */
  // repoLabel: "仓库链接",
  /**
   * 关闭编辑此页面
   */
  editLink: false
});
