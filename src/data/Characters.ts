interface ISprite {
    x: number,
    y: number,
    width: number,
    height: number,
    backgroundX: number,
    backgroundY: number
}
export interface ICharacter {
    name: string,
    sprite: {
        icon: ISprite,
        textbox: ISprite
    }
}

const characters: { [id: string]: ICharacter} = {
    Miranda: {
        name: "Miranda",
        sprite: {
            icon: {
                x: 0,
                y: -23,
                width: 52,
                height: 63,
                backgroundX: 300,
                backgroundY: 300
            },
            textbox: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            }
        }
    },
    Damian: {
        name: "Damian",
        sprite: {
            icon: {
                x: -60,
                y: -184,
                width: 45,
                height: 64,
                backgroundX: 300,
                backgroundY: 300
            },
            textbox: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            }
        }
    },
    Scott: {
        name: "Scott",
        sprite: {
            icon: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            },
            textbox: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            }
        }
    }, 
    Liam: {
        name: "Liam",
        sprite: {
            icon: {
                x: -60,
                y: -63,
                width: 55,
                height: 62,
                backgroundX: 300,
                backgroundY: 300
            },
            textbox: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            }
        }
    },
    Polly: {
        name: "Polly",
        sprite: {
            icon: {
                x: -213,
                y: -174,
                width: 55,
                height: 71,
                backgroundX: 300,
                backgroundY: 300
            },
            textbox: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            }
        }
    },
    Vera: {
        name: "Vera",
        sprite: {
            icon: {
                x: 0,
                y: -86,
                width: 60,
                height: 60,
                backgroundX: 300,
                backgroundY: 300
            },
            textbox: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            }
        }
    },
    Narrator: {
        name: "Narrator",
        sprite: {
            icon: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            },
            textbox: {
                x: 0,
                y: 0,
                width: 50,
                height: 50,
                backgroundX: 0,
                backgroundY: 0
            }
        }
    }
}

export default characters;