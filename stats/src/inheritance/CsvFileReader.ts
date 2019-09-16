import fs from 'fs';
import { MatchData } from '../MatchData';

export abstract class CsvFileReader<T> {
	data: T[] = [];

	constructor(public filename: string) {}

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8'
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			})
			.map(row => this.mapRow(row));
	}

	abstract mapRow(row: string[]): T;
}
