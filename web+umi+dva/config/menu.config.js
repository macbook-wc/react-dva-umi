export default [
    {
        title: "会议管理",
        link: "/sys/meetAdmin",
        key: "meetAdmin",
        icon: "github"
    },
    {
        title: "资料管理",
        link: "/sys/dataAdmin",
        key: "dataAdmin",
        icon: "idcard"
    },
    {
        title: "设备管理",
        key: "shebeiAdmin",
        icon: "contacts",
        link: "/sys/shebeiAdmin",
    },
      {
        title: "议题管理",
        key: "issueAdmin",
        icon: "contacts",
        link: "/sys/issueAdmin",
    },
      {
        title: "会议室管理",
        key: "roomAdmin",
        icon: "contacts",
        link: "/sys/roomAdmin",
    },
      {
        title: "人员管理",
        key: "personAdmin",
        icon: "contacts",
        link: "/sys/personAdmin",
    },
    {
        title: "404",
        link: "/404",
        key: "404",
        icon: "frown"
    },
    {
        title: "iframe",
        key: "iframe",
        icon: "icon-chuangkouwindow30",
        children: [
            {
                title: "bing",
                link: "/frame/bing",
                key: "bing",
                icon: "shop",
                url: `https://cn.bing.com/`,
                query: {
                    h: 1200
                }
            },
            {
                title: "百度",
                link: "/frame/baidu",
                key: "baidu",
                icon: "shop",
                url: `https://www.baidu.com/`,
            },]
    },
    {
        title: "图形组件demo",
        url: "https://mpw0311.github.io/react-charts",
        key: "react-charts",
        icon: "bar-chart"
    },
    {
        title: "请给star",
        url: "https://github.com/mpw0311/antd-umi-sys",
        key: "github",
        icon: "star"
    },
];