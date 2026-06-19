/**
 * Helper function to get the current locale from cookies
 * Returns the locale string or the default locale
 */
export async function getLocaleFromCookies(): Promise<string> {
  try {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    return cookieStore.get("alpine-mastery-language")?.value || "sv";
  } catch (error) {
    // Fallback to default locale if cookies cannot be read
    return "sv";
  }
}
