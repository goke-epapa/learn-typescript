
import {AxiosResponse} from 'axios';

import {ApiSync} from './ApiSync';
import {Attributes} from './Attributes';
import {Eventing} from './Eventing';
import {Model} from './Model';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const USERS_URL = 'http://localhost:3000/users/';

export class User extends Model<UserProps> {
  static build(attrs: UserProps): User{return new User(
      new Attributes<UserProps>(attrs), new ApiSync<UserProps>(USERS_URL),
      new Eventing())}

  isAdminser(): boolean {
    return this.get('id') === 1;
  }
}
