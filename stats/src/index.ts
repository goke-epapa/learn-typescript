import {} from './utils';
import { MatchDataTransformer } from './MatchDataTransformer';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const FILE_NAME = 'football.csv';

const reader = new MatchReader(new CsvFileReader(FILE_NAME));
reader.load();

console.log(reader.matches);

let manUnitedWins = 0;
const MAN_UNITED = 'Man United';

// No performance improvements, just improves readability and domain knowledge
// Use enums for finite lists that are known during development
// Not suitable for large set of values

for (let match of reader.matches) {
	if (
		(match[1] === MAN_UNITED && match[5] === MatchResult.HomeWin) ||
		(match[2] === MAN_UNITED && match[5] === MatchResult.AwayWin)
	) {
		manUnitedWins++;
	}
}

console.log(`${MAN_UNITED} won ${manUnitedWins} games`);
