import config from '../../config/env'

export async function getMe<T>(): Promise<T> {
  return fetch(`${config.API_URL}/me`)
    .then(response => response.json())
    .catch(console.log)
}

export async function getSocialMedias<T>(): Promise<T> {
  return fetch(`${config.API_URL}/social`)
    .then(response => response.json())
    .catch(console.log)
}