const API_URL = 'http://localhost:3000'

export async function getDataAboutMe<T>(): Promise<T> {
  return fetch(`${API_URL}/api/about`)
    .then(response => response.json())
    .catch(console.log)
}