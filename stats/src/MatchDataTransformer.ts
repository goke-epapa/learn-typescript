import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

export type MatchData = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];

export class MatchDataTransformer {
	constructor(public data: string[][]) {}

	transform(): MatchData[] {
		return this.data.map(
			(row: string[]): MatchData => {
				return [
					dateStringToDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult,
					row[6]
				];
			}
		);
	}
}
