import { ApiError } from "./errors.js";
const BASE_URL = (process.env.TSK_API_URL ?? 'https://localhost:3000').replace(/\/+$/, "");

async function request(method, path, body) {
    let res;

    try {
        res = await fetch(`${BASE_URL}${path}`, {
            method,
            headers: body ? { "Content-Type": "application/json"} : undefined,
            body: body ? JSON.stringify(body) : undefined,
            signal: AbortSignal.timeout(8000)
        })
    } catch (error) {
        throw new ApiError("Cannot reach the server", { cause: err })
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