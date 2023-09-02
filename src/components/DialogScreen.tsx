import characters, { ICharacter } from "../data/Characters"
import "../styles/DialogScreen.scss"
import React from 'react'

interface IDialog {
    type: string,
    speaker: ICharacter,
    text: string
}
interface IChoice {
    type: string,
    options: Array<{
        text: string,
        stat: string,
        dialog: Array<IDialog>
    }>
}

const DialogScreen = () => {
    let dialog: { dialog: Array<IDialog>, choice: IChoice } = {
        dialog: [
            {
                type: "text",
                speaker: characters.Damian,
                text: "Hi"
            },
            {
                type: "text",
                speaker: characters.Liam,
                text: "Hi"
            },
            {
                type: "text",
                speaker: characters.Polly,
                text: "Hi"
            }
        ],
        choice: {
            type: "choice",
            options: [
                {
                    text: "Option A",
                    stat: "charm",
                    dialog: [
                        {
                            type: "text",
                            speaker: characters.Vera,
                            text: "bye #1"
                        }
                    ]
                },
                {
                    text: "Option B",
                    stat: "fun",
                    dialog: [
                        {
                            type: "text",
                            speaker: characters.Liam,
                            text: "bye #2"
                        }
                    ]
                }
            ]
        }
    }
    return (
        <div className="dialog-box" style={{ display: "flex", flexDirection: "column" }}>
            {
                dialog.dialog.map(_ => {
                    return (
                        <div className="dialog">
                            <div 
                                className="character-icon" 
                                style={{ 
                                    "--character-sprites": `url(${process.env.PUBLIC_URL}/images/prom/character-sprites.png)`, 
                                    width: `${_.speaker.sprite.icon.width}px`, 
                                    height: `${_.speaker.sprite.icon.height}px`, 
                                    "--background-position": `${_.speaker.sprite.icon.x}px ${_.speaker.sprite.icon.y}px` 
                                } as React.CSSProperties}>
                            </div>
                            <span 
                                style={{ 
                                    position: "absolute", 
                                    transform: "translateY(-50%);" 
                                }}>
                                {_.speaker.name}
                            </span>
                            <div 
                                className="textbox" 
                                style={{ 
                                    "--textbox-sprites": `url(${process.env.PUBLIC_URL}/images/prom/textbox-sprites.png)`, 
                                    "--background-position": "-100px -100px" 
                                } as React.CSSProperties}>
                            </div>
                            {/* {_.text} */}
                        </div>
                    );
                })
            }
            <div className="choice-box" style={{ display: "flex" }}>
                <div>
                    <div className="choice">
                        {dialog.choice.options[0].text}
                    </div>
                </div>
                <div>|</div>
                <div>
                    <div className="choice">
                        {dialog.choice.options[1].text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogScreen;