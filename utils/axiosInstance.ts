import axios from "axios";
import { getSession } from "next-auth/react";

export default async function axiosInstance() {
  const session = await getSession();
  if (!session) {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  });
}
