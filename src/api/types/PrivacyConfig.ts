/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PrivacyConfig {
    /** Whether to record the conversation */
    record_voice?: boolean;
    /** The number of days to retain the conversation. -1 indicates there is no retention limit */
    retention_days?: number;
    /** Whether to delete the transcript and PII */
    delete_transcript_and_pii?: boolean;
    /** Whether to delete the audio */
    delete_audio?: boolean;
    /** Whether to apply the privacy settings to existing conversations */
    apply_to_existing_conversations?: boolean;
}
