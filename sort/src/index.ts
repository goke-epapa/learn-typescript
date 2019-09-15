import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([50, 10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('adegokeobasa');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-100);
linkedList.add(5100);
linkedList.add(0);
const llSorter = new Sorter(linkedList);
llSorter.sort();
linkedList.print();
