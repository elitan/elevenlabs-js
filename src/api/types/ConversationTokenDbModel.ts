/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface ConversationTokenDbModel {
    /** The ID of the agent */
    agent_id: string;
    /** The token for the agent */
    conversation_token: string;
    /** The expiration time of the token in unix seconds */
    expiration_time_unix_secs?: number;
    /** The purpose of the token */
    purpose?: ElevenLabs.ConversationTokenPurpose;
}
