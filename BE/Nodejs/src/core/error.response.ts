import HttpStatusCode, { getReasonPhrase } from "http-status-codes";

class ErrorResponse extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ErrorResponse {
  constructor(
    message = getReasonPhrase(HttpStatusCode.BAD_REQUEST),
    status = HttpStatusCode.BAD_REQUEST
  ) {
    super(message, status);
  }
}

class ServerError extends ErrorResponse {
  constructor(
    message = getReasonPhrase(HttpStatusCode.INTERNAL_SERVER_ERROR),
    status = HttpStatusCode.INTERNAL_SERVER_ERROR
  ) {
    super(message, status);
  }
}

class NotFoundError extends ErrorResponse {
  constructor(
    message = getReasonPhrase(HttpStatusCode.NOT_FOUND),
    status = HttpStatusCode.NOT_FOUND
  ) {
    super(message, status);
  }
}

export { BadRequestError, NotFoundError, ServerError };
