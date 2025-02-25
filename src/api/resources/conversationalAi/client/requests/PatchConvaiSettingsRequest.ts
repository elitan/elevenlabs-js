/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../../../../index";

/**
 * @example
 *     {
 *         secrets: [{
 *                 type: "new",
 *                 name: "name",
 *                 value: "value"
 *             }]
 *     }
 */
export interface PatchConvaiSettingsRequest {
    conversation_initiation_client_data_webhook?: ElevenLabs.ConversationInitiationClientDataWebhook;
    webhooks?: ElevenLabs.ConvAiWebhooks;
    secrets: ElevenLabs.PatchConvaiSettingsRequestSecretsItem[];
}
