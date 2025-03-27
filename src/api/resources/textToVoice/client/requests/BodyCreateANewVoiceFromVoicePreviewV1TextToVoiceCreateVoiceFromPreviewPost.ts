/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         voice_name: "Sassy squeaky mouse",
 *         voice_description: "A sassy squeaky mouse",
 *         generated_voice_id: "37HceQefKmEi3bGovXjL"
 *     }
 */
export interface BodyCreateANewVoiceFromVoicePreviewV1TextToVoiceCreateVoiceFromPreviewPost {
    /** Name to use for the created voice. */
    voice_name: string;
    /** Description to use for the created voice. */
    voice_description: string;
    /** The generated_voice_id to create, call POST /v1/text-to-voice/create-previews and fetch the generated_voice_id from the response header if don't have one yet. */
    generated_voice_id: string;
    /** Optional, metadata to add to the created voice. Defaults to None. */
    labels?: Record<string, string | undefined>;
    /** List of voice ids that the user has played but not selected. Used for RLHF. */
    played_not_selected_voice_ids?: string[];
}
