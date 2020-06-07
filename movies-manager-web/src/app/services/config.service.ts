import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  QUERY_V = 'api/v1/movies';

  constructor() {
  }

  public getMovieSearchUrl(primaryTitle: string, originalTitle: string) {
    return this.QUERY_V + `/${String(primaryTitle)}/${String(originalTitle)}`;
  }

  public getMovieUpdateUrl() {
    return this.QUERY_V;
  }
}
