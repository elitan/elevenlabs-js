/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";

export class TooEarlyError extends errors.ElevenLabsError {
    constructor(body?: unknown) {
        super({
            message: "TooEarlyError",
            statusCode: 425,
            body: body,
        });
        Object.setPrototypeOf(this, TooEarlyError.prototype);
    }
}
