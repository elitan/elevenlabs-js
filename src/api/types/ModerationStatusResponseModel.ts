/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface ModerationStatusResponseModel {
    /** Whether the user is in probation. */
    is_in_probation: boolean;
    /** Whether the user's enterprise check nogo voice is enabled. */
    enterprise_check_nogo_voice: boolean;
    /** Whether the user's enterprise check block nogo voice is enabled. */
    enterprise_check_block_nogo_voice: boolean;
    /** Whether the user's never live moderate is enabled. */
    never_live_moderate: boolean;
    /** The number of similar voice uploads that have been blocked. */
    nogo_voice_similar_voice_upload_count: number;
    /** Whether the user's enterprise background moderation is enabled. */
    enterprise_background_moderation_enabled: boolean;
    /** The safety status of the user. */
    safety_status?: ElevenLabs.ModerationStatusResponseModelSafetyStatus;
    /** The warning status of the user. */
    warning_status?: ElevenLabs.ModerationStatusResponseModelWarningStatus;
    /** Whether the user is on the watchlist. */
    on_watchlist: boolean;
}
