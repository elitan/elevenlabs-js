/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as ElevenLabs from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { Projects } from "../resources/projects/client/Client";
import { Chapters } from "../resources/chapters/client/Client";

export declare namespace Studio {
    export interface Options {
        environment?: core.Supplier<environments.ElevenLabsEnvironment | environments.ElevenLabsEnvironmentUrls>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        /** Override the xi-api-key header */
        apiKey?: core.Supplier<string | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the xi-api-key header */
        apiKey?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Studio {
    protected _projects: Projects | undefined;
    protected _chapters: Chapters | undefined;

    constructor(protected readonly _options: Studio.Options = {}) {}

    public get projects(): Projects {
        return (this._projects ??= new Projects(this._options));
    }

    public get chapters(): Chapters {
        return (this._chapters ??= new Chapters(this._options));
    }

    /**
     * Create and auto-convert a podcast project. Currently, the LLM cost is covered by us but you will still be charged for the audio generation. In the future, you will be charged for both the LLM and audio generation costs.
     *
     * @param {ElevenLabs.BodyCreatePodcastV1StudioPodcastsPost} request
     * @param {Studio.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.createPodcast({
     *         model_id: "21m00Tcm4TlvDq8ikWAM",
     *         mode: {
     *             type: "conversation",
     *             conversation: {
     *                 host_voice_id: "aw1NgEzBg83R7vgmiJt6",
     *                 guest_voice_id: "aw1NgEzBg83R7vgmiJt7"
     *             }
     *         },
     *         source: {
     *             text: "This is a test podcast."
     *         }
     *     })
     */
    public async createPodcast(
        request: ElevenLabs.BodyCreatePodcastV1StudioPodcastsPost,
        requestOptions?: Studio.RequestOptions,
    ): Promise<ElevenLabs.PodcastProjectResponseModel> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (
                        (await core.Supplier.get(this._options.environment)) ??
                        environments.ElevenLabsEnvironment.Production
                    ).base,
                "v1/studio/podcasts",
            ),
            method: "POST",
            headers: {
                "xi-api-key":
                    (await core.Supplier.get(this._options.apiKey)) != null
                        ? await core.Supplier.get(this._options.apiKey)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "elevenlabs",
                "X-Fern-SDK-Version": "1.56.0",
                "User-Agent": "elevenlabs/1.56.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as ElevenLabs.PodcastProjectResponseModel;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new ElevenLabs.UnprocessableEntityError(
                        _response.error.body as ElevenLabs.HttpValidationError,
                    );
                default:
                    throw new errors.ElevenLabsError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ElevenLabsError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ElevenLabsTimeoutError("Timeout exceeded when calling POST /v1/studio/podcasts.");
            case "unknown":
                throw new errors.ElevenLabsError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
