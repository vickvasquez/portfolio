import fs from 'node:fs'
import path from 'node:path'
import { getDirname } from '../utils/getDirAndFileName.mjs';

const __dirname = getDirname(import.meta.url)

const pathSourceData = path.join(__dirname, '../data')
const pathTargetDB = path.join(__dirname, '../db.json')

  ; (async () => {
    try {
      await fs.promises.unlink(pathTargetDB)
    } catch (error) {}

    try {
      let result = {}

      const files = await fs.promises.readdir(pathSourceData)

      for (const fileName of files) {
        const { name: key } = path.parse(fileName)
        const pathFile = path.join(pathSourceData, fileName)

        const data = await fs.promises.readFile(pathFile, { encoding: 'utf8' })
        const dataASJSON = JSON.parse(data)

        const rows = dataASJSON.data ?? dataASJSON

        result = { ...result, [key]: rows }
      }

      await fs.promises.writeFile(pathTargetDB, JSON.stringify(result))
    } catch (error) {
      throw new Error(error.message)
    }
  })()
