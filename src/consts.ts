import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Teddy Jung's Dev Blog🌠",
  DESCRIPTION:
    "I enjoy traveling freely, gaining new experiences, sharing good food with friends, and living a rich life.",
  EMAIL: "seolleung22@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5, // 메인페이지에 블로그 글 몇개 보여줄건지
  NUM_PROJECTS_ON_HOMEPAGE: 3, // 메인페이지에 프로젝트 글 몇개 보여줄건지
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Teddy Jung's Dev Blog Home🏡",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/teddyjung8808",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/seolleung2",
  },
  {
    NAME: "LinkedIn",
    HREF: "/",
  },
];
