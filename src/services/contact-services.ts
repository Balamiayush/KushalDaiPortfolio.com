import { API_BASE_URL } from "@/config/api";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  projectType?: string;
  [key: string]: unknown;
};

export async function createContact(data: ContactPayload) {
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
