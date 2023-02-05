import config from '../../../../config/env'

export async function getDataAboutMe<T>(): Promise<T> {
  return fetch(`${config.API_URL}/about`)
    .then(response => response.json())
    .catch(console.log)
}