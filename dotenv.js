import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'

export default {
  config: () => {
    const env = process.env.NODE_ENV !== 'production'
    const envPath = path.resolve(process.cwd(), `.env`)
    // Only load envs, when on development mode & File existing
    if (env && fs.existsSync(envPath)) {
      console.log('Load .env')
      dotenv.config({
        path: envPath
      })
    } else {
      console.log('Load .env DISABLED')
    }
  }
}
