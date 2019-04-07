// WARNING: Here be Dragons
// This file is generated by Creer, do not modify it
// It basically sets up all the classes, interfaces, types, and what-not that
// we need for TypeScript to know the base classes, while allowing for minimal
// code for developers to be forced to fill out.

// tslint:disable:max-classes-per-file
// ^ because we need to build a bunch of base class wrappers here

// base game classes
import { BaseAI, BaseGame, BaseGameManager, BaseGameObject,
         BaseGameObjectFactory, BaseGameSettingsManager, BasePlayer,
         makeNamespace } from "~/core/game";

// mixins
import { ITurnBasedPlayer, ITwoPlayerPlayer, mixTurnBased, mixTwoPlayer,
       } from "~/core/game/mixins";

// extract game object constructor args
import { FirstArgumentFromConstructor } from "~/utils";

/**
 * The interface the Player for the Stardash game
 * must implement from mixed in game logic.
 */
export interface IBaseStardashPlayer extends
    BasePlayer,
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

/** The base AI class for the Stardash game will mixin logic. */
class BaseStardashAI extends mixed.AI {}

/** The base Game class for the Stardash game will mixin logic. */
class BaseStardashGame extends mixed.Game {}

/** The base GameManager class for the Stardash game will mixin logic. */
class BaseStardashGameManager extends mixed.GameManager {}

/** The base GameObject class for the Stardash game will mixin logic. */
class BaseStardashGameObject extends mixed.GameObject {}

/** The base GameSettings class for the Stardash game will mixin logic. */
class BaseStardashGameSettings extends mixed.GameSettings {}

/** The Base classes that game classes build off of. */
export const BaseClasses = {
    AI: BaseStardashAI,
    Game: BaseStardashGame,
    GameManager: BaseStardashGameManager,
    GameObject: BaseStardashGameObject,
    GameSettings: BaseStardashGameSettings,
};

// Now all the base classes are created;
// so we can start importing/exporting the classes that need them.

/** All the possible properties for an Body. */
export interface IBodyProperties {
    /**
     * The amount of material the object has, or energy if it is a planet.
     */
    amount?: number;

    /**
     * The type of celestial body it is.
     */
    bodyType?: "planet" | "asteroid" | "sun";

    /**
     * The type of material the celestial body has.
     */
    materialType?: "none" | "genarium" | "rarium" | "legendarium" | "mythicite";

    /**
     * The Player that owns and can control this Body.
     */
    owner?: Player;

    /**
     * The radius of the circle that this body takes up.
     */
    radius?: number;

    /**
     * The x value this celestial body is on.
     */
    x?: number;

    /**
     * The y value this celestial body is on.
     */
    y?: number;

}

/**
 * Argument overrides for Body's nextX function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IBodyNextXArgs {
    /**
     * The number of turns in the future you wish to check.
     */
    num?: number;
}

/**
 * Argument overrides for Body's nextY function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IBodyNextYArgs {
    /**
     * The number of turns in the future you wish to check.
     */
    num?: number;
}

/**
 * Argument overrides for Body's spawn function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IBodySpawnArgs {
    /**
     * The x value of the spawned unit.
     */
    x?: number;
    /**
     * The y value of the spawned unit.
     */
    y?: number;
    /**
     * The job title of the unit being spawned.
     */
    title?: string;
}

/** All the possible properties for an GameObject. */
export interface IGameObjectProperties {
}

/** All the possible properties for an Job. */
export interface IJobProperties {
    /**
     * How many combined resources a unit with this Job can hold at once.
     */
    carryLimit?: number;

    /**
     * The amount of damage this Job does per attack.
     */
    damage?: number;

    /**
     * The amount of starting health this Job has.
     */
    energy?: number;

    /**
     * The distance this job can move per turn.
     */
    moves?: number;

    /**
     * The distance at which this job can effect things.
     */
    range?: number;

    /**
     * The reserve the martyr use to protect allies.
     */
    shield?: number;

    /**
     * The Job title. 'corvette', 'missileboat', 'martyr', 'transport', or
     * 'miner'. (in this order from 0-4).
     */
    title?: "corvette" | "missileboat" | "martyr" | "transport" | "miner";

    /**
     * How much money it costs to spawn a unit.
     */
    unitCost?: number;

}

/** All the possible properties for an Player. */
export interface IPlayerProperties {
    /**
     * What type of client this is, e.g. 'Python', 'JavaScript', or some other
     * language. For potential data mining purposes.
     */
    clientType?: string;

    /**
     * The home base of the player.
     */
    homeBase?: Body;

    /**
     * If the player lost the game or not.
     */
    lost?: boolean;

    /**
     * The amount of money this Player has.
     */
    money?: number;

    /**
     * The name of the player.
     */
    name?: string;

    /**
     * This player's opponent in the game.
     */
    opponent?: Player;

    /**
     * Every Projectile owned by this Player.
     */
    projectiles?: Projectile[];

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
     * Every Unit owned by this Player.
     */
    units?: Unit[];

    /**
     * The number of victory points the player has.
     */
    victoryPoints?: number;

    /**
     * If the player won the game or not.
     */
    won?: boolean;

}

/** All the possible properties for an Projectile. */
export interface IProjectileProperties {
    /**
     * The amount of remaining distance the projectile can move.
     */
    fuel?: number;

    /**
     * The Player that owns and can control this Projectile.
     */
    owner?: Player;

    /**
     * The unit that is being attacked by this projectile.
     */
    target?: Unit;

    /**
     * The x value this projectile is on.
     */
    x?: number;

    /**
     * The y value this projectile is on.
     */
    y?: number;

}

/** All the possible properties for an Unit. */
export interface IUnitProperties {
    /**
     * Whether or not this Unit has performed its action this turn.
     */
    acted?: boolean;

    /**
     * The x value this unit is dashing to.
     */
    dashX?: number;

    /**
     * The y value this unit is dashing to.
     */
    dashY?: number;

    /**
     * The remaining health of a unit.
     */
    energy?: number;

    /**
     * The amount of Genarium ore carried by this unit. (0 to job carry
     * capacity - other carried items).
     */
    genarium?: number;

    /**
     * Tracks wheither or not the ship is dashing.
     */
    isDashing?: boolean;

    /**
     * The Job this Unit has.
     */
    job?: Job;

    /**
     * The amount of Legendarium ore carried by this unit. (0 to job carry
     * capacity - other carried items).
     */
    legendarium?: number;

    /**
     * The distance this unit can still move.
     */
    moves?: number;

    /**
     * The amount of Mythicite carried by this unit. (0 to job carry capacity -
     * other carried items).
     */
    mythicite?: number;

    /**
     * The Player that owns and can control this Unit.
     */
    owner?: Player;

    /**
     * The martyr ship that is currently shielding this ship if any.
     */
    protector?: Unit;

    /**
     * The amount of Rarium carried by this unit. (0 to job carry capacity -
     * other carried items).
     */
    rarium?: number;

    /**
     * The sheild that a martyr ship has.
     */
    shield?: number;

    /**
     * The x value this unit is on.
     */
    x?: number;

    /**
     * The y value this unit is on.
     */
    y?: number;

}

/**
 * Argument overrides for Unit's attack function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IUnitAttackArgs {
    /**
     * The Unit being attacked.
     */
    enemy?: Unit;
}

/**
 * Argument overrides for Unit's dash function. If you return an object of this
 * interface from the invalidate functions, the value(s) you set will be used
 * in the actual function.
 */
export interface IUnitDashArgs {
    /**
     * The x value of the destination's coordinates.
     */
    x?: number;
    /**
     * The y value of the destination's coordinates.
     */
    y?: number;
}

/**
 * Argument overrides for Unit's mine function. If you return an object of this
 * interface from the invalidate functions, the value(s) you set will be used
 * in the actual function.
 */
export interface IUnitMineArgs {
    /**
     * The object to be mined.
     */
    body?: Body;
}

/**
 * Argument overrides for Unit's move function. If you return an object of this
 * interface from the invalidate functions, the value(s) you set will be used
 * in the actual function.
 */
export interface IUnitMoveArgs {
    /**
     * The x value of the destination's coordinates.
     */
    x?: number;
    /**
     * The y value of the destination's coordinates.
     */
    y?: number;
}

/**
 * Argument overrides for Unit's safe function. If you return an object of this
 * interface from the invalidate functions, the value(s) you set will be used
 * in the actual function.
 */
export interface IUnitSafeArgs {
    /**
     * The x position of the location you wish to arrive.
     */
    x?: number;
    /**
     * The y position of the location you wish to arrive.
     */
    y?: number;
}

/**
 * Argument overrides for Unit's shootDown function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IUnitShootDownArgs {
    /**
     * The projectile being shot down.
     */
    missile?: Projectile;
}

/**
 * Argument overrides for Unit's transfer function. If you return an object of
 * this interface from the invalidate functions, the value(s) you set will be
 * used in the actual function.
 */
export interface IUnitTransferArgs {
    /**
     * The unit you are grabbing the resources from.
     */
    unit?: Unit;
    /**
     * The amount of materials to you with to grab. Amounts <= 0 will pick up
     * all the materials that the unit can.
     */
    amount?: number;
    /**
     * The material the unit will pick up. 'resource1', 'resource2', or
     * 'resource3'.
     */
    material?: "genarium" | "rarium" | "legendarium" | "mythicite";
}

export * from "./body";
export * from "./game-object";
export * from "./job";
export * from "./player";
export * from "./projectile";
export * from "./unit";
export * from "./game";
export * from "./game-manager";
export * from "./ai";

import { Body } from "./body";
import { GameObject } from "./game-object";
import { Job } from "./job";
import { Player } from "./player";
import { Projectile } from "./projectile";
import { Unit } from "./unit";

import { AI } from "./ai";
import { StardashGame } from "./game";
import { StardashGameManager } from "./game-manager";
import { StardashGameSettingsManager } from "./game-settings";

/** The arguments used to construct a Body */
export type BodyArgs = FirstArgumentFromConstructor<typeof Body>;

/** The arguments used to construct a Job */
export type JobArgs = FirstArgumentFromConstructor<typeof Job>;

/** The arguments used to construct a Projectile */
export type ProjectileArgs = FirstArgumentFromConstructor<typeof Projectile>;

/** The arguments used to construct a Unit */
export type UnitArgs = FirstArgumentFromConstructor<typeof Unit>;

/**
 * The factory that **must** be used to create any game objects in
 * the Stardash game.
 */
export class StardashGameObjectFactory extends BaseGameObjectFactory {
    /**
     * Creates a new Body in the Game and tracks it for all players.
     *
     * @param args - Data about the Body to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Body hooked up in the game and ready for you to use.
     */
    public body<T extends BodyArgs>(
        args: Readonly<T>,
    ): Body & T {
        return this.createGameObject("Body", Body, args);
    }

    /**
     * Creates a new Job in the Game and tracks it for all players.
     *
     * @param args - Data about the Job to set. Any keys matching a property in
     * the game object's class will be automatically set for you.
     * @returns A new Job hooked up in the game and ready for you to use.
     */
    public job<T extends JobArgs>(
        args: Readonly<T>,
    ): Job & T {
        return this.createGameObject("Job", Job, args);
    }

    /**
     * Creates a new Projectile in the Game and tracks it for all players.
     *
     * @param args - Data about the Projectile to set. Any keys matching a
     * property in the game object's class will be automatically set for you.
     * @returns A new Projectile hooked up in the game and ready for you to
     * use.
     */
    public projectile<T extends ProjectileArgs>(
        args: Readonly<T>,
    ): Projectile & T {
        return this.createGameObject("Projectile", Projectile, args);
    }

    /**
     * Creates a new Unit in the Game and tracks it for all players.
     *
     * @param args - Data about the Unit to set. Any keys matching a property
     * in the game object's class will be automatically set for you.
     * @returns A new Unit hooked up in the game and ready for you to use.
     */
    public unit<T extends UnitArgs>(
        args: Readonly<T>,
    ): Unit & T {
        return this.createGameObject("Unit", Unit, args);
    }

}

/**
 * The shared namespace for Stardash that is used to
 * initialize each game instance.
 */
export const Namespace = makeNamespace({
    AI,
    Game: StardashGame,
    GameManager: StardashGameManager,
    GameObjectFactory: StardashGameObjectFactory,
    GameSettingsManager: StardashGameSettingsManager,
    Player,

    // These are generated metadata that allow delta-merging values from
    // clients.
    // They are never intended to be directly interfaced with outside of the
    // Cerveau core developers.
    gameName: "Stardash",
    gameSettingsManager: new StardashGameSettingsManager(),
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
                bodies: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Body,
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
                dashCost: {
                    typeName: "int",
                },
                dashDistance: {
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
                genariumValue: {
                    typeName: "float",
                },
                jobs: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Job,
                        nullable: false,
                    },
                },
                legendariumValue: {
                    typeName: "float",
                },
                maxAsteroid: {
                    typeName: "int",
                },
                maxTurns: {
                    typeName: "int",
                },
                minAsteroid: {
                    typeName: "int",
                },
                miningSpeed: {
                    typeName: "int",
                },
                mythiciteAmount: {
                    typeName: "float",
                },
                orbitsProtected: {
                    typeName: "int",
                },
                oreRarityGenarium: {
                    typeName: "float",
                },
                oreRarityLegendarium: {
                    typeName: "float",
                },
                oreRarityRarium: {
                    typeName: "float",
                },
                planetEnergyCap: {
                    typeName: "int",
                },
                planetRechargeRate: {
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
                projectileRadius: {
                    typeName: "int",
                },
                projectileSpeed: {
                    typeName: "int",
                },
                projectiles: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Projectile,
                        nullable: false,
                    },
                },
                rariumValue: {
                    typeName: "float",
                },
                regenerateRate: {
                    typeName: "float",
                },
                session: {
                    typeName: "string",
                },
                shipRadius: {
                    typeName: "int",
                },
                sizeX: {
                    typeName: "int",
                },
                sizeY: {
                    typeName: "int",
                },
                timeAddedPerTurn: {
                    typeName: "int",
                },
                turnsToOrbit: {
                    typeName: "int",
                },
                units: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Unit,
                        nullable: false,
                    },
                },
            },
            functions: {
            },
        },
        Body: {
            parentClassName: "GameObject",
            attributes: {
                amount: {
                    typeName: "int",
                },
                bodyType: {
                    typeName: "string",
                    defaultValue: "planet",
                    literals: ["planet", "asteroid", "sun"],
                },
                materialType: {
                    typeName: "string",
                    defaultValue: "none",
                    literals: ["none", "genarium", "rarium", "legendarium", "mythicite"],
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: true,
                },
                radius: {
                    typeName: "float",
                },
                x: {
                    typeName: "float",
                },
                y: {
                    typeName: "float",
                },
            },
            functions: {
                nextX: {
                    args: [
                        {
                            argName: "num",
                            typeName: "int",
                        },
                    ],
                    invalidValue: -1,
                    returns: {
                        typeName: "int",
                    },
                },
                nextY: {
                    args: [
                        {
                            argName: "num",
                            typeName: "int",
                        },
                    ],
                    invalidValue: -1,
                    returns: {
                        typeName: "int",
                    },
                },
                spawn: {
                    args: [
                        {
                            argName: "x",
                            typeName: "float",
                        },
                        {
                            argName: "y",
                            typeName: "float",
                        },
                        {
                            argName: "title",
                            typeName: "string",
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
        Job: {
            parentClassName: "GameObject",
            attributes: {
                carryLimit: {
                    typeName: "int",
                },
                damage: {
                    typeName: "int",
                },
                energy: {
                    typeName: "int",
                },
                moves: {
                    typeName: "int",
                },
                range: {
                    typeName: "int",
                },
                shield: {
                    typeName: "int",
                },
                title: {
                    typeName: "string",
                    defaultValue: "corvette",
                    literals: ["corvette", "missileboat", "martyr", "transport", "miner"],
                },
                unitCost: {
                    typeName: "int",
                },
            },
            functions: {
            },
        },
        Player: {
            parentClassName: "GameObject",
            attributes: {
                clientType: {
                    typeName: "string",
                },
                homeBase: {
                    typeName: "gameObject",
                    gameObjectClass: Body,
                    nullable: false,
                },
                lost: {
                    typeName: "boolean",
                },
                money: {
                    typeName: "int",
                },
                name: {
                    typeName: "string",
                },
                opponent: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: false,
                },
                projectiles: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Projectile,
                        nullable: false,
                    },
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
                units: {
                    typeName: "list",
                    valueType: {
                        typeName: "gameObject",
                        gameObjectClass: Unit,
                        nullable: false,
                    },
                },
                victoryPoints: {
                    typeName: "int",
                },
                won: {
                    typeName: "boolean",
                },
            },
            functions: {
            },
        },
        Projectile: {
            parentClassName: "GameObject",
            attributes: {
                fuel: {
                    typeName: "int",
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: true,
                },
                target: {
                    typeName: "gameObject",
                    gameObjectClass: Unit,
                    nullable: false,
                },
                x: {
                    typeName: "float",
                },
                y: {
                    typeName: "float",
                },
            },
            functions: {
            },
        },
        Unit: {
            parentClassName: "GameObject",
            attributes: {
                acted: {
                    typeName: "boolean",
                },
                dashX: {
                    typeName: "float",
                },
                dashY: {
                    typeName: "float",
                },
                energy: {
                    typeName: "int",
                },
                genarium: {
                    typeName: "int",
                },
                isDashing: {
                    typeName: "boolean",
                },
                job: {
                    typeName: "gameObject",
                    gameObjectClass: Job,
                    nullable: false,
                },
                legendarium: {
                    typeName: "int",
                },
                moves: {
                    typeName: "float",
                },
                mythicite: {
                    typeName: "int",
                },
                owner: {
                    typeName: "gameObject",
                    gameObjectClass: Player,
                    nullable: true,
                },
                protector: {
                    typeName: "gameObject",
                    gameObjectClass: Unit,
                    nullable: true,
                },
                rarium: {
                    typeName: "int",
                },
                shield: {
                    typeName: "int",
                },
                x: {
                    typeName: "float",
                },
                y: {
                    typeName: "float",
                },
            },
            functions: {
                attack: {
                    args: [
                        {
                            argName: "enemy",
                            typeName: "gameObject",
                            gameObjectClass: Unit,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                dash: {
                    args: [
                        {
                            argName: "x",
                            typeName: "float",
                        },
                        {
                            argName: "y",
                            typeName: "float",
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                mine: {
                    args: [
                        {
                            argName: "body",
                            typeName: "gameObject",
                            gameObjectClass: Body,
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
                            argName: "x",
                            typeName: "float",
                        },
                        {
                            argName: "y",
                            typeName: "float",
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                safe: {
                    args: [
                        {
                            argName: "x",
                            typeName: "float",
                        },
                        {
                            argName: "y",
                            typeName: "float",
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                shootDown: {
                    args: [
                        {
                            argName: "missile",
                            typeName: "gameObject",
                            gameObjectClass: Projectile,
                            nullable: false,
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
                transfer: {
                    args: [
                        {
                            argName: "unit",
                            typeName: "gameObject",
                            gameObjectClass: Unit,
                            nullable: false,
                        },
                        {
                            argName: "amount",
                            typeName: "int",
                        },
                        {
                            argName: "material",
                            typeName: "string",
                            defaultValue: "genarium",
                            literals: ["genarium", "rarium", "legendarium", "mythicite"],
                        },
                    ],
                    invalidValue: false,
                    returns: {
                        typeName: "boolean",
                    },
                },
            },
        },
    },
});
