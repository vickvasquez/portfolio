const API_URL = 'http://localhost:3000'

export async function getMe<T>(): Promise<T> {
  return fetch(`${API_URL}/api/me`)
    .then(response => response.json())
    .catch(console.log)
}

export async function getSocialMedias<T>(): Promise<T> {
  return fetch(`${API_URL}/api/social`)
    .then(response => response.json())
    .catch(console.log)
}