import { AppProps } from "./Props";
import { AppState } from "./States";

export function getHumans(component: React.Component<AppProps, AppState>){
    fetch(process.env.REACT_APP_API_BASEURL + 'humans/')
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                component.setState({human: data})
            })
            .catch(function(error){
                alert(JSON.stringify(error));
            });
        }else{
            response.json().then(function(data){
                component.setState({human: data})
            })
            .catch(function(error){
                alert(JSON.stringify(error));
            });
        }
    }).catch(function(error){
        alert(JSON.stringify(error));
    })
}