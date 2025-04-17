import {type SiteConfig} from '@/types/site-config-types';

const siteConfig: SiteConfig = {
    darkMode: true,
    siteName: 'Paddy Griffin',
    theme: {
        color: {
            primary: {
                light: '#ff0000',
                dark: '#333366'
            },
        }
    },
    layout: {
        container: 'xl',
        header: {
            transparent: true,
            hideOnScroll: true,
            mainNav: true,
        },
        backToTop: true,
    }
}

export default siteConfig;