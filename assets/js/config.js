// 公司信息
var companyConfig = {
    companyLogo:'./assets/images/logo.png',
    companyAddr:'广州市海珠区赤岗北路10号',
    companyPhone:' 020-2914 8309',
    companyEmail:' hgzemail@163.com',
    companyMark:'禾盖珠专注旅馆开发、管理，把质量和服务放在企业经营的第一位，提供舒适的住宿环境以及真心的顾客服务，是禾盖珠的使命。',
    copyright:'Copyright©禾盖珠（广州）酒店管理有限公司 版权所有',
    keepCode:'粤ICP备2021034082号-1'
}

// 菜单数据
var headerMenus = [
    {
        id:1,
        title:"首页",
        code:"home",
        path:"#",
        children:[
            {
                id:2,
                title:"首页1",
                code:'index1',
                path:"/index1",
            },
            {
                id:3,
                title:"首页2",
                code:'index2',
                path:"/index2",
            },
        ]
    },
    {
        id:4,
        title:"产品",
        path:"#",
        code:'project',
        children:[
            {
                id:5,
                title:"产品1",
                code:'project1',
                path:"/project1",
            },
            {
                id:6,
                title:"产品2",
                code:'project2',
                path:"/project2",
            },
        ]
    },
    {
        id:7,
        title:"新闻",
        path:"#",
        code:'news',
        children:[
            {
                id:8,
                title:"新闻1",
                code:'news1',
                path:"/news1",
            },
            {
                id:9,
                title:"新闻2",
                code:'new2',
                path:"/news2",
            },
        ]
    },
    {
        id:10,
        title:"研发团队",
        code:'team',
        path:"/team",
        
    },
    {
        id:11,
        title:"联系我们",
        code:'concat',
        path:"/concat",
    },
]

// 轮播图
var swiperModule =[
    {
        code:'home',
        swiper:[
            {
                img:'assets/images/silder1.png',
                copywriting:{
                    desc:'全心旅馆',
                    h1:"行世界",
                    h2:"品全心",
                    mark:"身处闹市区，也有桃花源.",
                    link:'/home.html'
                }
            },
            {
                img:'assets/images/silder2.jpg',
                copywriting:{
                    desc:'全心旅馆',
                    h1:"行世界",
                    h2:"品全心",
                    mark:"身处闹市区，也有桃花源.",
                    link:'/home.html'
                }
            },
            {
                img:'assets/images/silder3.png',
                copywriting:{
                    desc:'全心旅馆',
                    h1:"行世界",
                    h2:"品全心",
                    mark:"身处闹市区，也有桃花源.",
                    link:'/home.html'
                }
            }
        ]
    }
]

// 底部信息
var footerConfig={
    
}