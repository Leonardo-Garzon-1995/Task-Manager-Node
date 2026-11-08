import { ApiError } from "./errors.js";
import { loadConfig } from './config/config.js'

async function request(method, path, body) {
    const { apiUrl, apiKey } = loadConfig();
    let res;

    const notice = setTimeout(
        () => console.error("Waking the server, this can take up to a minute..."),
        3000
    )

    try {
        res = await fetch(`${apiUrl}${path}`, {
            method,
            headers: {
                ...(body && { "Content-Type": "application/json" }),
                ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
            },
            body: body ? JSON.stringify(body) : undefined,
            signal: AbortSignal.timeout(75000)
        })
    } catch (error) {
        if (error.name === 'TimeoutError') {
            throw new ApiError('The server took too long to respond. Try again in a moment',  { cause: error, code: 'TIMEOUT'})
        }
        throw new ApiError("Cannot reach the server", { cause: error })
    } finally {
        clearTimeout(notice)
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