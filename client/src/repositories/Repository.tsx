class Repository <I, O> {
    route: string;

    constructor(route: string) {
        this.route = '/' + route;
    }

    protected get(method: string): Promise<O> {
        let route = this.route + '/' + method;

        return fetch(route, {
            method: "GET",
        })
        .then(response => response.json())
        .catch(error => {throw error})
        .then((data: O) => {return data});
    }    

    protected post(method: string, data: I): Promise<O> {
        let route = this.route + '/' + method;

        return fetch (route, {
            method: "POST",           
        })
        .then(response => response.json())
        .catch(error => {throw error})
        .then((data: O) => {return data})
    }

    protected postWithData(method: string, data: I): Promise<O> {
        let route = this.route + '/' + method;  
        return fetch(route,
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then((response) => response.json())
            .catch((err) => {throw err})
            .then((data: O) => {return data});
    }

}
export default Repository;