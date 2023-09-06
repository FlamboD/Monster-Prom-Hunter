import jsonData from './data.json';

export interface IItem {
    shortName: string,
    price: number,
    name: string,
    description: string
}
export interface ICharacter {
    id: number,
    name: string
}
export interface IEvent {
    id: number, 
    name?: string, 
    type: number, 
    location: number
}
export interface IDialog {
    eventId: number, 
    option?: number, 
    success?: number, 
    text?: string, 
    character?: number
}
export interface IOption {
    eventId: number, 
    option: number, 
    stat?: number, 
    text: string, 
    onSuccess?: number, 
    onFailure?: number
}
export interface IEventDialog {
    event: IEvent,
    dialog: Array<IDialog>,
    options?: Array<IOption>
}
export interface IHeart {
    eventId: number, 
    option: number, 
    success: number, 
    character: number
}
export interface IData {
    characters: Array<ICharacter>,
    events: Array<IEvent>,
    dialog: Array<IDialog>,
    options: Array<IOption>,
    hearts: Array<IHeart>
}

const data: IData = jsonData as IData;

export default data;