const API_URL = 'http://localhost:3001'

export async function getDataAboutMe<T>(): Promise<T> {
  return fetch(`${API_URL}/about`)
    .then(response => response.json())
    .catch(console.log)
}