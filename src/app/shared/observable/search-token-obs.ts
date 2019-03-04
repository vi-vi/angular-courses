import { Observable, Subject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

const DEBOUNCE_TIME = 600

export const SearchTokenSubject:any = (new Subject()).pipe(
  filter((search:string) => search.length === 0 || search.length > 2),
  debounceTime(DEBOUNCE_TIME)
);
