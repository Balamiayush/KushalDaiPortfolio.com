const fallback = "/api";

export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? fallback;

if (!import.meta.env.VITE_API_BASE_URL && import.meta.env.PROD) {
  console.warn(
    "VITE_API_BASE_URL is not set; falling back to '/api'. Set it in .env.production before deploy."
  );
}
