import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { ApiError } from '../errors.js'

const CONFIG_PATH = path.join(os.homedir(), '.tsk', 'config.json')

function readFile() {
    try {
        return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'))
    } catch (error) {
        if (error.code === 'ENOENT') return {}
        throw new Error(`Invalid config file at ${CONFIG_PATH}`)
    }
}

export function loadConfig() {
    const file = readFile()
    const apiUrl = process.env.TSK_API_URL ?? file.apiUrl ?? 'http://localhost:3000'

    const url = new URL(apiUrl)
    const local = ['localhost', '127.0.0.1'].includes(url.hostname)
    if (url.protocol !== 'https:' && !local) {
        throw new ApiError('Refusing to send your API key over plain HTTP. Use an https:// URL', { code: "CONFIG" })
    }

    return {
        apiUrl: (process.env.TSK_API_URL ?? file.apiUrl ?? 'http://localhost:3000').replace(/\/+$/, ''),
        apiKey: process.env.TSK_API_KEY ?? file.apiKey
    }
}