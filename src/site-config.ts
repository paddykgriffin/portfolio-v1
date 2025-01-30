import {type SiteConfig} from '@/types/site-config-types';

const siteConfig: SiteConfig = {
    darkMode: true,
    siteName: 'My Site',
    theme: {
        color: {
            primary: {
                light: '#333366',
                dark: '#333366'
            },
        }
    },
    layout: {
        container: '2xl',
        header: {
            transparent: true,
            hideOnScroll: true,
            mainNav: true,
        },
        backToTop: true,
    }
}

export default siteConfig;