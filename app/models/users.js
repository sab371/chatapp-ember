import Model from '@ember-data/model';

export default class UsersModel extends Model {
    @attr('string') name;
    @attr('string') check;
    async model(){
        let value = await fetch('/chatapp/people');
        let parsed = await value.json();
        return parsed;
    }
}
