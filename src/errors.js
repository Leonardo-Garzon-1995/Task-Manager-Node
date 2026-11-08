export class ApiError extends Error {
    constructor(message, { status, cause, code } = {}) {
        super(message, { cause })
        this.name = "ApiError"
        this.status = status // undefined means the server was unreacheable
        this.code = code
    }
}