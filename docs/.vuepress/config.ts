import { defaultTheme } from '@vuepress/theme-default'

export default {
    dest: 'public',
    title: 'Qexo魔改教程',
    description: '让每个Hexo博主都能轻松实现自己的后台魔改',
    head: [
        ['link', { rel: 'icon', href: '/images/milkTea_favicon_200.png' }],
    ],
    theme: defaultTheme({
        // 默认主题配置
        logo: '/images/shineyu_avatar.webp',
        navbar: [
            { text: '首页', link: '/' },
            { text: '项目Github', link: 'https://github.com/ShineYull/hexo-qexo-editor' }
        ],
        // 所有页面会使用相同的侧边栏
        sidebar: [
            {text: '简介', link:'/guide/'},
            '/guide/start',
            '/guide/subscribe',
            '/guide/essay',
        ],
        lastUpdatedText: "最近一次更新",
        contributorsText: "作者",
        contributors: false,
    }),
}