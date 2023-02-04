const API_URL = 'http://localhost:3001'

export async function getMe<T>(): Promise<T> {
  return fetch(`${API_URL}/me`)
    .then(response => response.json())
    .catch(console.log)
}

export async function getSocialMedias<T>(): Promise<T> {
  return fetch(`${API_URL}/social`)
    .then(response => response.json())
    .catch(console.log)
}