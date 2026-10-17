import { campaignSearch } from "./appLinks";
const KEY = "masteryhubBlogCampaignV1";
type StorageAccess = () => Pick<Storage, "getItem" | "setItem">;
export function createCampaignSession() {
 let memory = "";
 return {
  read(search: string, storage: StorageAccess): string {
   // Acquisition in the URL is authoritative and independent of storage permission.
   const current = campaignSearch(search);
   if (current) return current;
   if (memory) return memory;
   try { return campaignSearch(storage().getItem(KEY) || ""); } catch { return ""; }
  },
  remember(search: string, storage: StorageAccess) {
   const current = campaignSearch(search);
   if (!current || current === memory) return;
   memory = current;
   try { storage().setItem(KEY, current); } catch { /* URL and memory remain usable */ }
  },
 };
}
export function buildBlogLink(href: string, search: string): string {
 if (!href.startsWith("/") || href.startsWith("//")) return href;
 const campaign = campaignSearch(search);
 if (!campaign) return href;
 const url = new URL(href, "https://blog.masteryhub.se");
 // An explicitly tagged destination starts its own campaign, without mixing sources.
 if (campaignSearch(url.search)) return href;
 for (const [key,value] of new URLSearchParams(campaign)) url.searchParams.set(key,value);
 return url.pathname + url.search + url.hash;
}
