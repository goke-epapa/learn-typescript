import {User} from './models/User';
const user = User.build({id: 10});
user.fetch();
console.log(user);