import { RouteComponentProps } from "react-router-dom";
import { Human } from "./interfaces";

export interface BaseProps extends RouteComponentProps<{}>{

}
export interface AppProps extends BaseProps{
    
}
export interface HomeProps extends BaseProps{
}
export interface UpdateProps{
}