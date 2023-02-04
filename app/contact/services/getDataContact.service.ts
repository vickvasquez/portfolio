const API_URL = 'http://localhost:3001'

export async function getDataContact<T>(): Promise<T> {
  return fetch(`${API_URL}/contact`)
    .then(response => response.json())
    .catch(console.log)
}
