import config from '../../../../config/env'

export async function getDataPortfolio<T>(): Promise<T> {
  return fetch(`${config.API_URL}/project`)
    .then(response => response.json())
    .catch(console.log)
}
