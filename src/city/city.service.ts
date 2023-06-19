import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './city.schema';

@Injectable()
export class CityService {
  constructor(@InjectModel('City') private cityModel: Model<City>) {}

  async getAllCities() {
   
  }

  async addCity(name: string) {
    // Implement logic to add a city to the database
  }
}
