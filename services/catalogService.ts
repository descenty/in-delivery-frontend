import axios from "axios";

export const searchProducts = async (text: string) => {
  return (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/search?text=${text}`)).data;
};
