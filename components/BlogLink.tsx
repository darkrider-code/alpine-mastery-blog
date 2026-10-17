"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { useCampaignSearch } from "./useCampaignSearch";
import { buildBlogLink } from "@/lib/campaignSession";
export default function BlogLink(props: ComponentProps<typeof Link>) {
 const search = useCampaignSearch();
 const href = typeof props.href === "string" ? buildBlogLink(props.href, search) : props.href;
 return <Link {...props} href={href} />;
}
