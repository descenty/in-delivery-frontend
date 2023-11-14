import "server-only";

export const fetchAPI = async <T>(
  url: string,
  options: object = {}
): Promise<T | undefined> => {
  try {
    return await (
      await fetch(`${process.env.NEXT_URL}/api/${url}`, {
        method: "GET",
        ...options,
      })
    ).json();
  } catch (e) {
    console.log(`Error fetching API ${url}`);
  }
};
