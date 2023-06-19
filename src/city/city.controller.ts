import { Controller, Get, Post, Body } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  async getAllCities() {
    return this.cityService.getAllCities();
  }

  @Post()
  async addCity(@Body() city: { name: string }) {
    return this.cityService.addCity(city.name);
  }
}
