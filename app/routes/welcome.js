import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WelcomeRoute extends Route {

    @service router;

    async model() {
        var dup_this = this;
        return fetch('/chatapp/welcome').then(function(response) {
            const isJson = response.headers.get('content-type').includes('application/json');
            const data = isJson ? response.json() : null;
            if (data == null) {
                dup_this.router.transitionTo('index');
            }
            return data;
        }).then(function(json) {
            return json;
        });

    }

    // console.log(value.length);
    // console.log(JSON.parse(value));
    // for(var i in value){
    //     console.log(i.type);
    // }
    // var {data} = await value.JSON.parse();
    // // let { data } = JSON.parse(ja);
    // // let { data } = await value.json();
    // // console.log(ja);
    // console.log(data);
    // return data?.map(model => {
    //     let { attributes } = model;

    //     return { ...attributes };
    // });
    // }

}