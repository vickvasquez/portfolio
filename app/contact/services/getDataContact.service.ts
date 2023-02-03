const API_URL = 'http://localhost:3000'

export async function getDataContact<T>(): Promise<T> {
  return fetch(`${API_URL}/api/contact`)
    .then(response => response.json())
    .catch(console.log)
}
