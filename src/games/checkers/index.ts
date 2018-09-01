// WARNING: Here be Dragons
// This file is generated by Creer, do not modify it
// It basically sets up all the classes we need for TypeScript to know the
// base classes with minimal code for developers to be forced to fill out

// tslint:disable:max-classes-per-file
// ^ because we need to build a bunch of base class wrappers here

// base game classes
import {
    BaseAI, BaseGame, BaseGameManager, BaseGameObject,
    BaseGameObjectFactory, BaseGameSettingsManager, IBasePlayer, makeNamespace,
} from "~/core/game";

// mixins
import {
    ITurnBasedPlayer,
    ITwoPlayerPlayer,
    mixTurnBased,
    mixTwoPlayer,
} from "~/core/game/mixins";

// extract game object constructor args
import { FirstArgumentFromConstructor } from "~/utils";

/**
 * The interface the Player for the Checkers game
 * must implement from mixed in game logic.
 */
export interface IBaseCheckersPlayer extends
    IBasePlayer,
    ITwoPlayerPlayer,
    ITurnBasedPlayer {
}

const base0 = {
    AI: BaseAI,
    Game: BaseGame,
    GameManager: BaseGameManager,
    GameObject: BaseGameObject,
    GameSettings: BaseGameSettingsManager,
};

const base1 = mixTwoPlayer(base0);
const base2 = mixTurnBased(base1);

const mixed = base2;

/** The base AI class for the Checkers game will mixin logic. */
class BaseCheckersAI extends mixed.AI {}

/** The base Game class for the Checkers game will mixin logic. */
class BaseCheckersGame extends mixed.Game {}

/** The base GameManager class for the Checkers game will mixin logic. */
class BaseCheckersGameManager extends mixed.GameManager {}

/** The base GameObject class for the Checkers game will mixin logic. */
class BaseCheckersGameObject extends mixed.GameObject {}

/** The base GameSettings class for the Checkers game will mixin logic. */
class BaseCheckersGameSettings extends mixed.GameSettings {}

/** The Base classes that game classes build off of. */
export const BaseClasses = {
    AI: BaseCheckersAI,
    Game: BaseCheckersGame,
    GameManager: BaseCheckersGameManager,
    GameObject: BaseCheckersGameObject,
    GameSettings: BaseCheckersGameSettings,
};

// Now all the base classes are created;
// so we can start importing/exporting the classes that need them.

/** All the possible properties for an Checker. */
export interface ICheckerProperties {
    /**
     * If the checker has been kinged and can move backwards.
     */
    kinged?: boolean;

    /**
     * The player that controls this Checker.
     */
    owner?: Player;

    /**
     * The x coordinate of the checker.
     */
    x?: number;

    /**
     * The y coordinate of the checker.
     */
    y?: number;

}

/** All the possible properties for an GameObject. */
export interface IGameObjectProperties {
}

/** All the possible properties for an Player. */
export interface IPlayerProperties {
    /**
     * All the checkers currently in the game owned by this player.
     */
    checkers?: Checker[];

    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    clientType?: string;

    /**
     * If the player lost the game or not.
     */
    lost?: boolean;

    /**
     * The name of the player.
     */
    name?: string;

    /**
     * This player's opponent in the game.
     */
    opponent?: Player;

    /**
     * The reason why the player lost the game.
     */
    reasonLost?: string;

    /**
     * The reason why the player won the game.
     */
    reasonWon?: string;

    /**
     * The amount of time (in ns) remaining for this AI to send commands.
     */
    timeRemaining?: number;

    /**
     * If the player won the game or not.
     */
    won?: boolean;

    /**
     * The direction your checkers must go along the y-axis until kinged.
     */
    yDirection?: number;

}

export * from "./checker";
export * from "./game-object";
export * from "./player";
export * from "./game";
export * from "./game-manager";
export * from "./ai";

import { Checker } from "./checker";
import { GameObject } from "./game-object";
import { Player } from "./player";

import { AI } from "./ai";
import { CheckersGame } from "./game";
import { CheckersGameManager } from "./game-manager";
import { CheckersGameSettingsManager } from "./game-settings";

/** The arguments used to construct a Checker */
export type CheckerArgs = FirstArgumentFromConstructor<typeof Checker>;

/**
 * The factory that **must** be used to create any game objects in
 * the Checkers game.
 */
export class CheckersGameObjectFactory extends BaseGameObjectFactory {
    /**
     * Creates a new Checker in the Game and tracks it for all players.
     *
     * @param args - Data about the Checker to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Checker hooked up in the game and ready for you to use.
     */
    public checker<T extends CheckerArgs>(args: T): Checker & T {
        return this.createGameObject("Checker", Checker, args);
    }

}

/**
 * The shared namespace for Checkers that is used to
 * initialize each game instance.
 */
export const Namespace = makeNamespace({
    AI,
    Game: CheckersGame,
    GameManager: CheckersGameManager,
    GameObjectFactory: CheckersGameObjectFactory,
    GameSettingsManager: CheckersGameSettingsManager,
    Player,

    // These are generated metadata that allow delta-merging values from
    // clients.
    // They are never intended to be directly interfaced with outside of the
    // Cerveau core developers.
    gameName: "Checkers",
    gameSettingsManager: new CheckersGameSettingsManager(),
    gameObjectsSchema: {
        AI: {
            attributes: {
            },
            functions: {
                gotCaptured: {
                    args: [
                        {
                            argName: "checker",
                            typeName: "gameObject",
                            gameObjectClass: Checker,
                            nullable: false,
                        },
                    ],
                    returns: {
                        typeName: "void",
                    },
                },
                runTurn: {
                    args: [
                    ],
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Game: {
            attributes: {
                boardHeight: {
                    typeName: "int",
                },
                boardWidth: {
                    typeName: "int",
                },
                checkerMoved: {
                    typeName: "gameObject",
                    gameObjectClass: Checker,
                    nullable: true,
                },
                checkerMovedJumped: {
                    typeName: "boolean",
                },
                checkers: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Checker,
                        nullable: false,
                    },
                },
                currentPlayer: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                currentTurn: {
                    typeName: "int",
                },
                gameObjects: {
                    typeName: "dictionary",
                    keyType: {
                        typeName: "string",
                    },
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: GameObject,
                        nullable: false,
                    },
                },
                maxTurns: {
                    typeName: "int",
                },
                players: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Player,
                        nullable: false,
                    },
                },
                session: {
                    typeName: "string",
                },
                timeAddedPerTurn: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
        Checker: {
            parentClassName: "GameObject",
            attributes: {
                kinged: {
                    typeName: "boolean",
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                x: {
                    typeName: "int",
                },
                y: {
                    typeName: "int",
                },
            },
            functions: {
                isMine: {
                    args: [
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                move: {
                    args: [
                        {
                            argName: "x",
                            typeName: "int",
                        },
                        {
                            argName: "y",
                            typeName: "int",
                        },
                    ],
                    invalidValue: undefined,
                    returns: {
                        typeName: "gameObject",
                        gameObjectClass: Checker,
                        nullable: false,
                    },
                },
            },
        },
        GameObject: {
            attributes: {
                gameObjectName: {
                    typeName: "string",
                },
                id: {
                    typeName: "string",
                },
                logs: {
                    typeName: "list",
                    valueType: {
                        typeName: "string",
                    },
                },
            },
            functions: {
                log: {
                    args: [
                        {
                            argName: "message",
                            typeName: "string",
                        },
                    ],
                    returns: {
                        typeName: "void",
                    },
                },
            },
        },
        Player: {
            parentClassName: "GameObject",
            attributes: {
                checkers: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Checker,
                        nullable: false,
                    },
                },
                clientType: {
                    typeName: "string",
                },
                lost: {
                    typeName: "boolean",
                },
                name: {
                    typeName: "string",
                },
                opponent: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                reasonLost: {
                    typeName: "string",
                },
                reasonWon: {
                    typeName: "string",
                },
                timeRemaining: {
                    typeName: "float",
                },
                won: {
                    typeName: "boolean",
                },
                yDirection: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
    },
});
