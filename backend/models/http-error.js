class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Forward "massage" parameter to its parent class. Add a "message" property
    this.code = errorCode; // Add a "code" property
  }
}

module.exports = HttpError;