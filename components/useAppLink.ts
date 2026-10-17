"use client";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { useCampaignSearch } from "./useCampaignSearch";
import { buildAppLink } from "@/lib/appLinks";
export function useAppLink(base: string, placement: string) {
 const pathname = usePathname();
 const { locale } = useLanguage();
 const search = useCampaignSearch();
 return buildAppLink(base, { search, locale, slug: pathname.split("/").slice(2).join("/") || "index", placement });
}
