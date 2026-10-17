"use client";
import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { createCampaignSession } from "@/lib/campaignSession";
// Updated only by client effects. SSR uses the empty server snapshot.
const session = createCampaignSession();
const storage = () => window.sessionStorage;
function subscribe(callback: () => void) {
 window.addEventListener("popstate", callback);
 return () => window.removeEventListener("popstate", callback);
}
function snapshot() { return session.read(window.location.search, storage); }
const serverSnapshot = () => "";
export function useCampaignSearch() {
 const pathname = usePathname();
 const search = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
 useEffect(() => { session.remember(window.location.search, storage); }, [pathname, search]);
 return search;
}
