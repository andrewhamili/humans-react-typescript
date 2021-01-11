import { AppProps, HomeProps } from "./Props";
import { AppState, HomeState } from "./States";

export function getHumans(component: React.Component<HomeProps, HomeState>){
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
                
                component.setState({human: data});
            })
            .catch(function(error){
                alert(JSON.stringify(error));
            });
        }
    }).catch(function(error){
        alert(JSON.stringify(error));
    })
}
export function addHuman(component: React.Component<HomeProps, HomeState>, first_name: string, last_name: string){
    var requestBody = {first_name: first_name, last_name: last_name};
    fetch(process.env.REACT_APP_API_BASEURL + 'human/',{
        method: 'POST',
        body: JSON.stringify(requestBody)
    }).then(function(response){
        if(response.ok){
            window.location.reload();
        }else{
            response.json().then(function(data){
                alert(data.message ? data.message : JSON.stringify(data));
            }).catch(function(error){
                alert(JSON.stringify(error));
            });
        }
    });
}
export function deleteHuman(component: React.Component<HomeProps, HomeState>, id: number){
    fetch(process.env.REACT_APP_API_BASEURL + `human/?id=${id}`,{
        method: 'DELETE',
    }).then(function(response){
        if(response.ok){
            window.location.reload()
        }else{
            response.json().then(function(data){
                alert(data.message ? data.message : JSON.stringify(data));
            }).catch(function(error){
                alert(error);
            });
        }
    });
}
export function updateHuman(component: React.Component<HomeProps, HomeState>, id: number, first_name: string, last_name: string){
    var requestBody = {id: id, first_name: first_name, last_name: last_name};
    fetch(process.env.REACT_APP_API_BASEURL + 'human/',{
        method: 'PUT',
        body: JSON.stringify(requestBody)
    }).then(function(response){
        if(response.ok){
            window.location.reload();
        }else{
            response.json().then(function(data){
                alert(data.message ? data.message : JSON.stringify(data));
            }).catch(function(error){
                alert(JSON.stringify(error));
            });
        }
    });
}