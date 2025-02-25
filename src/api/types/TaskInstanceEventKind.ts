/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Represent events types for task instances, as well a state transitions in the task instance state machine.
 */
export type TaskInstanceEventKind = "claim" | "assign" | "reject" | "submit" | "approve" | "done";
export const TaskInstanceEventKind = {
    Claim: "claim",
    Assign: "assign",
    Reject: "reject",
    Submit: "submit",
    Approve: "approve",
    Done: "done",
} as const;
