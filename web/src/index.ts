import {User} from './models/User';

const user = new User({name: 'Jide Owosakin', age: 30});

user.attributes.get('id');

user.sync.save();