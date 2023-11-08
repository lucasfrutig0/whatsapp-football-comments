type CustomHeaders = {
  [key: string]: string;
};

export class ApiService {
  constructor() {}

  async get(url: string, headers: CustomHeaders) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          ...headers,
        },
      });

      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.error(error);
      throw new Error("Error occur when try to access method GET");
    }
  }
}
