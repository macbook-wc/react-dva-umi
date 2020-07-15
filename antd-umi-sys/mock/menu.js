const Mock = require('mockjs');
const menuData = [
    {
        title: "会议管理",
        key: "meetAdmin",
    },
    {
        title: "资料管理",
        key: "dataAdmin",
    },
    {
        title: "议题管理",
        key: "issueAdmin",
       
    },
      {
        title: "设备管理",
        key: "shebeiAdmin",
    },
    {
        title: "会议室管理",
        key: "roomAdmin",
    },
    {
        title: "人员管理",
        key: "personAdmin",
       
    },
    // {
    //     title: "d3.js组件",
    //     key: "d3Chart",
    //     children: [
    //         {
    //             title: "树图",
    //             key: "treePage",
    //         },
    //     ]
    // },
  
];
const data = Mock.mock({
    data: menuData,
    status: 0
});
module.exports = {
    [`POST /getMenuData`](req, res) {
        res.status(200).json(data);
    },
};