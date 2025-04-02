/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

/**
 * Chunk-level detail of the transcription with timing information.
 */
export interface SpeechToTextChunkResponseModel {
    /** The detected language code (e.g. 'eng' for English). */
    language_code: string;
    /** The confidence score of the language detection (0 to 1). */
    language_probability: number;
    /** The raw text of the transcription. */
    text: string;
    /** List of words with their timing information. */
    words: ElevenLabs.SpeechToTextWordResponseModel[];
    /** Requested additional formats of the transcript. */
    additional_formats?: (ElevenLabs.AdditionalFormatResponseModel | undefined)[];
}
