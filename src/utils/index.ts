import { BaseGameObject } from "~/core/game";

export * from "./fs";
export * from "./http";
export * from "./moment";
export * from "@cadre/ts-utils";

/**
 * A writeable type that removes all readonly modifiers.
 */
export type Writeable<T> = { -readonly [P in keyof T]-?: T[P] };

/**
 * Checks to make sure a game object exists, and can be mutated at this point in its game.
 *
 * @param gameObject - The game object to check
 * @returns the same game object unchanged, but mutable.
 */
export function ensureMutable<T extends BaseGameObject>(gameObject: T | undefined): Writeable<T> {
    if (!gameObject) {
        throw new Error(`No game object to mutate! ${gameObject}`);
    }

    return gameObject as unknown as Writeable<T>; // TODO: better checks
}
