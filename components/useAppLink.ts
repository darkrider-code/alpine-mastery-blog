"use client";
import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { buildAppLink, campaignSearch } from "@/lib/appLinks";
const KEY = "masteryhubBlogCampaignV1";
function subscribe(callback: () => void) { window.addEventListener("popstate", callback); return () => window.removeEventListener("popstate", callback); }
function snapshot() {
  const current = campaignSearch(window.location.search);
  if (current) return current;
  try { return sessionStorage.getItem(KEY) || ""; } catch { return ""; }
}
const serverSnapshot = () => "";
export function useAppLink(base: string, placement: string) {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const search = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  useEffect(() => {
    const current = campaignSearch(window.location.search);
    if (current) { try { sessionStorage.setItem(KEY, current); } catch { /* storage optional */ } }
  }, [pathname]);
  return buildAppLink(base, { search, locale, slug: pathname.split("/").slice(2).join("/") || "index", placement });
}
