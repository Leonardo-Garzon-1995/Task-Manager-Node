import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

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

    return {
        apiUrl: (process.env.TSK_API_URL ?? file.apiUrl ?? 'http://localhost:3000').replace(/\/+$/, ''),
        apiKey: process.env.TSK_API_KEY ?? file.apiKey
    }
}