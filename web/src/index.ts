import { User } from './models/User';

const user = new User({ id: 1 }); // chicken and egg problem
user.set({ age: 2000, name: 'Adegoke Obasa' });
user.save();

const newUser = new User({ name: 'Ajagbe Oluwaseun', age: 100 });
newUser.save();
