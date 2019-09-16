import {} from './utils';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const FILE_NAME = 'football.csv';

const reader = MatchReader.fromCsv(FILE_NAME);
reader.load();

const MAN_UNITED = 'Man United';

const summary = Summary.winAnalysisWithHtmlReport(MAN_UNITED);
summary.buildAndPrintReport(reader.matches);
