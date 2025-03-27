/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

/**
 * Configuration for a webhook that will be called by an LLM tool.
 */
export interface WebhookToolApiSchemaConfigOutput {
    /** The URL that the webhook will be sent to. May include path parameters, e.g. https://example.com/agents/{agent_id} */
    url: string;
    /** The HTTP method to use for the webhook */
    method?: ElevenLabs.WebhookToolApiSchemaConfigOutputMethod;
    /** Schema for path parameters, if any. The keys should match the placeholders in the URL. */
    path_params_schema?: Record<string, ElevenLabs.LiteralJsonSchemaProperty>;
    /** Schema for any query params, if any. These will be added to end of the URL as query params. Note: properties in a query param must all be literal types */
    query_params_schema?: ElevenLabs.QueryParamsJsonSchema;
    /** Schema for the body parameters, if any. Used for POST/PATCH requests. The schema should be an object which will be sent as the json body */
    request_body_schema?: ElevenLabs.ObjectJsonSchemaPropertyOutput;
    /** Headers that should be included in the request */
    request_headers?: Record<string, ElevenLabs.WebhookToolApiSchemaConfigOutputRequestHeadersValue>;
}
