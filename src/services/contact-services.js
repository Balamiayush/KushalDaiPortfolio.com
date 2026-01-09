import { API_BASE_URL } from "@/config/api";

export async function createContact(data) {
  const response = await fetch(`${API_BASE_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create contact");
  }

  return response.json();
}
