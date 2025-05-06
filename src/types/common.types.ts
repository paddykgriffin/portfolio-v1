import { JSX } from "react";

export type HTMLProps<T extends keyof JSX.IntrinsicElements = "div"> = 
    React.ComponentPropsWithoutRef<T>;

export type DivProps = HTMLProps<"div">;

export type HTMLPropsWithRef<T extends keyof JSX.IntrinsicElements = "div"> =
    React.ComponentPropsWithRef<T>;

export type DivPropsWithRef = HTMLPropsWithRef<"div">;

export interface Project {
    id: number;
    name: string;
    logo: string;
    tags: string[];
    thumbnail: string;
    showOnHome?: boolean;
    details: {
        description: string;
        image: string;
        bodyText: React.ReactNode;
        link: string;
    };
    related?: number[];
  }