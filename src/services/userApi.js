import api from "./api";

export async function signUp(email, name, password) {
  const response = await api.post("/sign-up", { email, name, password });
  return response.data;
}
//
