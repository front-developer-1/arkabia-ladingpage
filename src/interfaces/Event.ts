import { Priority } from '../@types/priority';

export interface Event {
    title: string;
    detail: string;
    date: string;
    participants: string;
    priority: Priority
}