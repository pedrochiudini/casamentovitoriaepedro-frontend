export const api = {
  post: async (path, data) => {
    const response = await fetch('http://localhost:8082' + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  get: async (path) => {
    const response = await fetch('http://localhost:8082' + path);
    return response.json();
  },
};
