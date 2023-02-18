import { defaultTheme } from '@vuepress/theme-default'

export default {
    dest: 'public',
    title: 'Qexo魔改教程',
    description: '让每个Hexo博主都能轻松实现自己的后台魔改',
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            { text: '首页', link: '/' },
            { text: '项目Github', link: 'https://github.com/ShineYull/hexo-qexo-editor' }
        ],
    }),
}