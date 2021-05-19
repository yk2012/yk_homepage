module.exports = {
  title: "Hello YK",
  dest: "dist",
  description: "YK HomePage",
  theme: "@vuepress/blog",
  themeConfig: {
    nav: [
      { text: "博客", link: "/blog/" },
      { text: "随笔", link: "/writing/" },
      { text: "文摘", link: "/digest/" },
      { text: "标签", link: "/tag/" },
      { text: "阅读", link: "https://weread.qq.com/" },
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
      {
        id: "digest",
        dirname: "_digest",
        path: "/digest/",
        title: "我的文摘",
      },
    ],
    siderbar: "auto",
    footer: {
      contact: [
        { type: "github", link: "https://github.com/yk2012" },
        { type: "mail", link: "https://vip.163.com/" },
        { type: "video", link: "https://space.bilibili.com/67273812" },
        { type: "web", link: "https://blog.csdn.net/weixin_44972008" },
      ],
      copyright: [
        { text: "YK菌", link: "https://gitee.com/ykang2020" },
        { text: "YK | Copyright © 2021" },
      ],
    },
  },
};
