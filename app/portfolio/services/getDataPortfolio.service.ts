const API_URL = 'http://localhost:3000'

export async function getDataPortfolio<T>(): Promise<T> {
  return fetch(`${API_URL}/api/project`)
    .then(response => response.json())
    .catch(console.log)
}
