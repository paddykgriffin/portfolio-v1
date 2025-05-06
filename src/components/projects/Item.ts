import React from "react";

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