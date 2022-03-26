import { MessageType } from "../@types/messageType";

export interface Message {
    from: string,
    content: string,
    type: MessageType, 
    attached?: {
        phase?: string,
        text: string,
        link: string
    }
    sendDate: Date,
    sendhour: string,
}
  