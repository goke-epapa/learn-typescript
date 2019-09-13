import { User } from './User';
import { Company } from './Company';
import {} from 'googlemaps';
import { CustomMap } from './CustomMap';

const map = new CustomMap('map');
const user = new User();
const company = new Company();

map.addMarker(company);
map.addMarker(user);
