import { RouteComponentProps } from "react-router-dom";
import { Human } from "./interfaces";

export interface AppState{
    human: Human[];
}
export interface HomeState{
    human: Human[];
    id: number;
    openUpdateModal: boolean
    openAddModal: boolean
}
export interface UpdateState{

}