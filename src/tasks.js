import { ApiError } from "./errors.js";
import { loadConfig } from './config/config.js'

async function request(method, path, body) {
    const { apiUrl, apiKey } = loadConfig();
    let res;

    try {
        res = await fetch(`${apiUrl}${path}`, {
            method,
            headers: {
                ...(body && { "Content-Type": "application/json" }),
                ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
            },
            body: body ? JSON.stringify(body) : undefined,
            signal: AbortSignal.timeout(8000)
        })
    } catch (error) {
        throw new ApiError("Cannot reach the server", { cause: error })
    }
    if (res.status === 204) return null
    const data = await res.json().catch(() => null)

    if (!res.ok) {
        throw new ApiError(data?.error ?? `Request failed (${res.status})`, { status: res.status })
    }

    return data
}

const enc = encodeURIComponent;

export const addTask = (title) => request("POST", "/tasks", { title })
export const listTasks = () => request("GET", "/tasks")
export const completeTask = (prefix) => request("PATCH", `/tasks/${enc(prefix)}`, { completed: true })
export const updateTasks = (prefix, title) => request("PATCH", `/tasks/${enc(prefix)}`, { title })
export const deleteTask = (prefix) => request("DELETE", `/tasks/${enc(prefix)}`)