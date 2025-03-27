/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface ConversationInitiationClientDataWebhook {
    /** The URL to send the webhook to */
    url: string;
    /** The headers to send with the webhook request */
    request_headers: Record<string, ElevenLabs.ConversationInitiationClientDataWebhookRequestHeadersValue>;
}
