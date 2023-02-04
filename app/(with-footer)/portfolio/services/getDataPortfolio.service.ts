const API_URL = 'http://localhost:3001'

export async function getDataPortfolio<T>(): Promise<T> {
  return fetch(`${API_URL}/project`)
    .then(response => response.json())
    .catch(console.log)
}
