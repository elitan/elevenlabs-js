/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ElevenLabs from "../index";

export interface DependentPhoneNumberIdentifier {
    phone_number_id: string;
    phone_number: string;
    label: string;
    provider: ElevenLabs.TelephonyProvider;
}
