export const SHOW_TICKET = "SHOW_TICKET"
export const GET_TICKET = "GET_TICKET"
export const SET_LOADING = "SET_LOADING"
export const SET_SUCCESS = "SET_SUCCESS"
export const SET_ERROR = "SET_ERROR"



export interface Ticket {
    code: string ; 
    ticketNumber: number;
    event: string;
    status: string;
    useDate: string
    startDate: string;
    port: string;
    isCheck: boolean;
}
 
export interface TicketState {
    ticket: Ticket | null;
    tickets: Array<Ticket>; 
    loading: boolean;
    error: string;
    // success: string
}

