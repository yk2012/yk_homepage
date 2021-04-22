module.exports = {
  title: "Hello YK",
  dest: "dist",
  description: "YK HomePage",
  theme: "@vuepress/blog",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "博客", link: "/blog/" },
      { text: "随笔", link: "/writing/" },
      { text: "标签", link: "/tag/" },
      { text: "百度", link: "https://baidu.com" },
      { text: "时钟", link: "http://ykang2020.gitee.io/clock/" },
    ],
    directories: [
      {
        id: "blog",
        dirname: "_blogs",
        path: "/blog/",
        title: "我的博客",
      },
      {
        id: "writing",
        dirname: "_writing",
        path: "/writing/",
        title: "我的随笔",
      },
    ],
    siderbar: "auto",
    footer: {
      contact: [{ type: "github", link: "https://github.com/yk2012" }],
      copyright: [
        { text: "YK菌", link: "https://gitee.com/ykang2020" },
        { text: "YK | Copyright © 2021" },
      ],
    },
  },
};
