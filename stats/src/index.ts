import {} from './utils';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { read } from 'fs';
import { HtmlReport } from './reportTargets/HtmlReport';

const FILE_NAME = 'football.csv';

const reader = new MatchReader(new CsvFileReader(FILE_NAME));
reader.load();

const MAN_UNITED = 'Man United';

const summary = new Summary(new WinAnalysis(MAN_UNITED), new HtmlReport());
summary.buildAndPrintReport(reader.matches);
