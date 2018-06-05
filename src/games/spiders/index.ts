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

/**
 * The interface the Player for the Spiders game
 * must implement from mixed in game logic.
 */
export interface IBaseSpidersPlayer extends
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

/** The base AI class for the Spiders game will mixin logic. */
class BaseSpidersAI extends mixed.AI {}

/** The base Game class for the Spiders game will mixin logic. */
class BaseSpidersGame extends mixed.Game {}

/** The base GameManager class for the Spiders game will mixin logic. */
class BaseSpidersGameManager extends mixed.GameManager {}

/** The base GameObject class for the Spiders game will mixin logic. */
class BaseSpidersGameObject extends mixed.GameObject {}

/** The base GameSettings class for the Spiders game will mixin logic. */
class BaseSpidersGameSettings extends mixed.GameSettings {}

/** The Base classes that game classes build off of. */
export const BaseClasses = {
    AI: BaseSpidersAI,
    Game: BaseSpidersGame,
    GameManager: BaseSpidersGameManager,
    GameObject: BaseSpidersGameObject,
    GameSettings: BaseSpidersGameSettings,
};

// Now all the base classes are created;
// so we can start importing/exporting the classes that need them.

/** All the possible properties for an BroodMother. */
export interface IBroodMotherProperties {
    /**
     * How many eggs the BroodMother has to spawn Spiderlings this turn.
     */
    eggs?: number;

    /**
     * How much health this BroodMother has left. When it reaches 0, she dies
     * and her owner loses.
     */
    health?: number;

}

/** All the possible properties for an Cutter. */
export interface ICutterProperties {
    /**
     * The Web that this Cutter is trying to cut. Null if not cutting.
     */
    cuttingWeb?: Web;

}

/** All the possible properties for an GameObject. */
export interface IGameObjectProperties {
}

/** All the possible properties for an Nest. */
export interface INestProperties {
    /**
     * The Player that 'controls' this Nest as they have the most Spiders on
     * this nest.
     */
    controllingPlayer?: Player;

    /**
     * All the Spiders currently located on this Nest.
     */
    spiders?: Spider[];

    /**
     * Webs that connect to this Nest.
     */
    webs?: Web[];

    /**
     * The X coordinate of the Nest. Used for distance calculations.
     */
    x?: number;

    /**
     * The Y coordinate of the Nest. Used for distance calculations.
     */
    y?: number;

}

/** All the possible properties for an Player. */
export interface IPlayerProperties {
    /**
     * This player's BroodMother. If it dies they lose the game.
     */
    broodMother?: BroodMother;

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
     * The max number of Spiderlings players can spawn.
     */
    maxSpiderlings?: number;

    /**
     * The name of the player.
     */
    name?: string;

    /**
     * The number of nests this player controls.
     */
    numberOfNestsControlled?: number;

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
     * All the Spiders owned by this player.
     */
    spiders?: Spider[];

    /**
     * The amount of time (in ns) remaining for this AI to send commands.
     */
    timeRemaining?: number;

    /**
     * If the player won the game or not.
     */
    won?: boolean;

}

/** All the possible properties for an Spider. */
export interface ISpiderProperties {
    /**
     * If this Spider is dead and has been removed from the game.
     */
    isDead?: boolean;

    /**
     * The Nest that this Spider is currently on. Null when moving on a Web.
     */
    nest?: Nest;

    /**
     * The Player that owns this Spider, and can command it.
     */
    owner?: Player;

}

/** All the possible properties for an Spiderling. */
export interface ISpiderlingProperties {
    /**
     * When empty string this Spiderling is not busy, and can act. Otherwise a
     * string representing what it is busy with, e.g. 'Moving', 'Attacking'.
     */
    busy?: "" | "Moving" | "Attacking" | "Strengthening" | "Weakening" | "Cutting" | "Spitting";

    /**
     * The Web this Spiderling is using to move. Null if it is not moving.
     */
    movingOnWeb?: Web;

    /**
     * The Nest this Spiderling is moving to. Null if it is not moving.
     */
    movingToNest?: Nest;

    /**
     * The number of Spiderlings busy with the same work this Spiderling is
     * doing, speeding up the task.
     */
    numberOfCoworkers?: number;

    /**
     * How much work needs to be done for this Spiderling to finish being busy.
     * See docs for the Work forumla.
     */
    workRemaining?: number;

}

/** All the possible properties for an Spitter. */
export interface ISpitterProperties {
    /**
     * The Nest that this Spitter is creating a Web to spit at, thus connecting
     * them. Null if not spitting.
     */
    spittingWebToNest?: Nest;

}

/** All the possible properties for an Weaver. */
export interface IWeaverProperties {
    /**
     * The Web that this Weaver is strengthening. Null if not strengthening.
     */
    strengtheningWeb?: Web;

    /**
     * The Web that this Weaver is weakening. Null if not weakening.
     */
    weakeningWeb?: Web;

}

/** All the possible properties for an Web. */
export interface IWebProperties {
    /**
     * How long this Web is, i.e., the distance between its nestA and nestB.
     */
    length?: number;

    /**
     * How much weight this Web currently has on it, which is the sum of all
     * its Spiderlings weight.
     */
    load?: number;

    /**
     * The first Nest this Web is connected to.
     */
    nestA?: Nest;

    /**
     * The second Nest this Web is connected to.
     */
    nestB?: Nest;

    /**
     * All the Spiderlings currently moving along this Web.
     */
    spiderlings?: Spiderling[];

    /**
     * How much weight this Web can take before snapping and destroying itself
     * and all the Spiders on it.
     */
    strength?: number;

}

export * from "./brood-mother";
export * from "./cutter";
export * from "./game-object";
export * from "./nest";
export * from "./player";
export * from "./spider";
export * from "./spiderling";
export * from "./spitter";
export * from "./weaver";
export * from "./web";
export * from "./game";
export * from "./game-manager";
export * from "./ai";

import { BroodMother, IBroodMotherConstructorArgs } from "./brood-mother";
import { Cutter, ICutterConstructorArgs } from "./cutter";
import { GameObject } from "./game-object";
import { INestConstructorArgs, Nest } from "./nest";
import { Player } from "./player";
import { ISpiderConstructorArgs, Spider } from "./spider";
import { ISpiderlingConstructorArgs, Spiderling } from "./spiderling";
import { ISpitterConstructorArgs, Spitter } from "./spitter";
import { IWeaverConstructorArgs, Weaver } from "./weaver";
import { IWebConstructorArgs, Web } from "./web";

import { AI } from "./ai";
import { SpidersGame } from "./game";
import { SpidersGameManager } from "./game-manager";
import { SpidersGameSettingsManager } from "./game-settings";

/**
 * The factory that **must** be used to create any game objects in
 * the Spiders game.
 */
export class SpidersGameObjectFactory extends BaseGameObjectFactory {
    /**
     * Creates a new BroodMother in the Game and tracks it for all players.
     *
     * @param data - Data about the BroodMother to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new BroodMother hooked up in the game and ready for you to
     * use.
     */
    public BroodMother(data: IBroodMotherConstructorArgs): BroodMother {
        return this.createGameObject("BroodMother", BroodMother, data);
    }

    /**
     * Creates a new Cutter in the Game and tracks it for all players.
     *
     * @param data - Data about the Cutter to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Cutter hooked up in the game and ready for you to use.
     */
    public Cutter(data: ICutterConstructorArgs): Cutter {
        return this.createGameObject("Cutter", Cutter, data);
    }

    /**
     * Creates a new Nest in the Game and tracks it for all players.
     *
     * @param data - Data about the Nest to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Nest hooked up in the game and ready for you to use.
     */
    public Nest(data: INestConstructorArgs): Nest {
        return this.createGameObject("Nest", Nest, data);
    }

    /**
     * Creates a new Spider in the Game and tracks it for all players.
     *
     * @param data - Data about the Spider to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Spider hooked up in the game and ready for you to use.
     */
    public Spider(data: ISpiderConstructorArgs): Spider {
        return this.createGameObject("Spider", Spider, data);
    }

    /**
     * Creates a new Spiderling in the Game and tracks it for all players.
     *
     * @param data - Data about the Spiderling to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Spiderling hooked up in the game and ready for you to
     * use.
     */
    public Spiderling(data: ISpiderlingConstructorArgs): Spiderling {
        return this.createGameObject("Spiderling", Spiderling, data);
    }

    /**
     * Creates a new Spitter in the Game and tracks it for all players.
     *
     * @param data - Data about the Spitter to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Spitter hooked up in the game and ready for you to use.
     */
    public Spitter(data: ISpitterConstructorArgs): Spitter {
        return this.createGameObject("Spitter", Spitter, data);
    }

    /**
     * Creates a new Weaver in the Game and tracks it for all players.
     *
     * @param data - Data about the Weaver to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Weaver hooked up in the game and ready for you to use.
     */
    public Weaver(data: IWeaverConstructorArgs): Weaver {
        return this.createGameObject("Weaver", Weaver, data);
    }

    /**
     * Creates a new Web in the Game and tracks it for all players.
     *
     * @param data - Data about the Web to set. Any keys matching a property in
     * the game object's class will be automatically set for you.
     * @returns A new Web hooked up in the game and ready for you to use.
     */
    public Web(data: IWebConstructorArgs): Web {
        return this.createGameObject("Web", Web, data);
    }

}

/**
 * The shared namespace for Spiders that is used to
 * initialize each game instance.
 */
export const Namespace = makeNamespace({
    AI,
    Game: SpidersGame,
    GameManager: SpidersGameManager,
    GameObjectFactory: SpidersGameObjectFactory,
    GameSettingsManager: SpidersGameSettingsManager,
    Player,

    // These are generated metadata that allow delta-merging values from
    // clients.
    // They are never intended to be directly interfaced with outside of the
    // Cerveau core developers.
    gameName: "Spiders",
    gameSettingsManager: new SpidersGameSettingsManager(),
    gameObjectsSchema: {
        AI: {
            attributes: {
            },
            functions: {
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
                currentPlayer: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                currentTurn: {
                    typeName: "int",
                },
                cutSpeed: {
                    typeName: "int",
                },
                eggsScalar: {
                    typeName: "float",
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
                initialWebStrength: {
                    typeName: "int",
                },
                maxTurns: {
                    typeName: "int",
                },
                maxWebStrength: {
                    typeName: "int",
                },
                movementSpeed: {
                    typeName: "int",
                },
                nests: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Nest,
                        nullable: false,
                    },
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
                spitSpeed: {
                    typeName: "int",
                },
                timeAddedPerTurn: {
                    typeName: "int",
                },
                weavePower: {
                    typeName: "int",
                },
                weaveSpeed: {
                    typeName: "int",
                },
                webs: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Web,
                        nullable: false,
                    },
                },
            },
            functions: {
            },
        },
        BroodMother: {
            parentClassName: "Spider",
            attributes: {
                eggs: {
                    typeName: "int",
                },
                health: {
                    typeName: "int",
                },
            },
            functions: {
                consume: {
                    args: [
                        {
                            argName: "spiderling",
                            typeName: "gameObject",
                            gameObjectClass: Spiderling,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                spawn: {
                    args: [
                        {
                            argName: "spiderlingType",
                            typeName: "string",
                            defaultValue: "Spitter",
                            literals: ["Spitter", "Weaver", "Cutter"],
                        },
                    ],
                    invalidValue: undefined,
                    returns: {
                        typeName: "gameObject",
                        gameObjectClass: Spiderling,
                        nullable: true,
                    },
                },
            },
        },
        Cutter: {
            parentClassName: "Spiderling",
            attributes: {
                cuttingWeb: {
                    typeName: "gameObject",
                    gameObjectClass: Web,
                    nullable: true,
                },
            },
            functions: {
                cut: {
                    args: [
                        {
                            argName: "web",
                            typeName: "gameObject",
                            gameObjectClass: Web,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
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
        Nest: {
            parentClassName: "GameObject",
            attributes: {
                controllingPlayer: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: true,
                },
                spiders: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Spider,
                        nullable: false,
                    },
                },
                webs: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Web,
                        nullable: false,
                    },
                },
                x: {
                    typeName: "int",
                },
                y: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
        Player: {
            parentClassName: "GameObject",
            attributes: {
                broodMother: {
                    typeName: "gameObject",
                    gameObjectClass: BroodMother,
                    nullable: false,
                },
                clientType: {
                    typeName: "string",
                },
                lost: {
                    typeName: "boolean",
                },
                maxSpiderlings: {
                    typeName: "int",
                },
                name: {
                    typeName: "string",
                },
                numberOfNestsControlled: {
                    typeName: "int",
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
                spiders: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Spider,
                        nullable: false,
                    },
                },
                timeRemaining: {
                    typeName: "float",
                },
                won: {
                    typeName: "boolean",
                },
            },
            functions: {
            },
        },
        Spider: {
            parentClassName: "GameObject",
            attributes: {
                isDead: {
                    typeName: "boolean",
                },
                nest: {
                    typeName: "gameObject",
                    gameObjectClass: Nest,
                    nullable: true,
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
            },
            functions: {
            },
        },
        Spiderling: {
            parentClassName: "Spider",
            attributes: {
                busy: {
                    typeName: "string",
                    defaultValue: "",
                    literals: ["", "Moving", "Attacking", "Strengthening", "Weakening", "Cutting", "Spitting"],
                },
                movingOnWeb: {
                    typeName: "gameObject",
                    gameObjectClass: Web,
                    nullable: true,
                },
                movingToNest: {
                    typeName: "gameObject",
                    gameObjectClass: Nest,
                    nullable: true,
                },
                numberOfCoworkers: {
                    typeName: "int",
                },
                workRemaining: {
                    typeName: "float",
                },
            },
            functions: {
                attack: {
                    args: [
                        {
                            argName: "spiderling",
                            typeName: "gameObject",
                            gameObjectClass: Spiderling,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                move: {
                    args: [
                        {
                            argName: "web",
                            typeName: "gameObject",
                            gameObjectClass: Web,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Spitter: {
            parentClassName: "Spiderling",
            attributes: {
                spittingWebToNest: {
                    typeName: "gameObject",
                    gameObjectClass: Nest,
                    nullable: true,
                },
            },
            functions: {
                spit: {
                    args: [
                        {
                            argName: "nest",
                            typeName: "gameObject",
                            gameObjectClass: Nest,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Weaver: {
            parentClassName: "Spiderling",
            attributes: {
                strengtheningWeb: {
                    typeName: "gameObject",
                    gameObjectClass: Web,
                    nullable: true,
                },
                weakeningWeb: {
                    typeName: "gameObject",
                    gameObjectClass: Web,
                    nullable: true,
                },
            },
            functions: {
                strengthen: {
                    args: [
                        {
                            argName: "web",
                            typeName: "gameObject",
                            gameObjectClass: Web,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                weaken: {
                    args: [
                        {
                            argName: "web",
                            typeName: "gameObject",
                            gameObjectClass: Web,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
        Web: {
            parentClassName: "GameObject",
            attributes: {
                length: {
                    typeName: "float",
                },
                load: {
                    typeName: "int",
                },
                nestA: {
                    typeName: "gameObject",
                    gameObjectClass: Nest,
                    nullable: true,
                },
                nestB: {
                    typeName: "gameObject",
                    gameObjectClass: Nest,
                    nullable: true,
                },
                spiderlings: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Spiderling,
                        nullable: false,
                    },
                },
                strength: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
    },
});
