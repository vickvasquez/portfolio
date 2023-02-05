import config from '../../../config/env'

export async function getDataContact<T>(): Promise<T> {
  return fetch(`${config.API_URL}/contact`)
    .then(response => response.json())
    .catch(console.log)
}
