import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function openGraphForPage(page: PageMeta): NonNullable<Metadata["openGraph"]> {
  return {
    title: page.title,
    description: page.description,
    url: absolutePageUrl(page.path),
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: site.socialImageAlt
      }
    ]
  };
}

export function twitterForPage(page: PageMeta): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: [
      {
        url: site.socialImage,
        alt: site.socialImageAlt
      }
    ]
  };
}

function withTrailingSlash(path: string) {
  if (path === "") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

function absolutePageUrl(path: string) {
  return new URL(withTrailingSlash(path), site.url).toString();
}

export function alternatesForPath(path: string): NonNullable<Metadata["alternates"]> {
  return { canonical: absolutePageUrl(path) };
}
