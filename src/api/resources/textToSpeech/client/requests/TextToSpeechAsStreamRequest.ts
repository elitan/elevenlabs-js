/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../../../..";

/**
 * @example
 *     {
 *         text: "text"
 *     }
 */
export interface TextToSpeechAsStreamRequest {
    /**
     * You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model.
     */
    optimize_streaming_latency?: ElevenLabs.OptimizeStreamingLatency;
    /**
     * The output format of the generated audio.
     */
    output_format?: ElevenLabs.OutputFormat;
    /** The text that will get converted into speech. */
    text: string;
    /** Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property. */
    model_id?: string;
    /** Voice settings overriding stored setttings for the given voice. They are applied only on the given request. */
    voice_settings?: ElevenLabs.VoiceSettings;
    /** A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request */
    pronunciation_dictionary_locators?: ElevenLabs.PronunciationDictionaryVersionLocator[];
}
