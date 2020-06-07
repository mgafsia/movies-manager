import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private configService: ConfigService, private httpClient: HttpClient) {
  }

  getMovieSearchSubscription(primaryTitle: string, originalTitle: string) {
     return this.httpClient.get<Movie[]>(this.configService.getMovieSearchUrl(primaryTitle, originalTitle));
  }

  updateMovieSubscription(movie) {
    return this.httpClient.put<Movie>(this.configService.getMovieUpdateUrl(), movie)
  }
}
