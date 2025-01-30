import { MaxWidthOption } from "@/components/layout/Container/Container";

export type SiteMode = {
    light: string;
    dark: string;
}

export type SiteConfig = {
    darkMode: boolean;
    siteName: string
    theme: {
        color: {
            primary: SiteMode;
        }
    },
    layout: {
        container?: MaxWidthOption,
        header: {
            transparent: boolean;
            hideOnScroll: boolean;
            mainNav: boolean;
        },
        backToTop: boolean;
    }
}