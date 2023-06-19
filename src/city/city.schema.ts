// /* eslint-disable prettier/prettier */
// import { Schema, model } from 'mongoose';

// const CityNameSchema = new Schema({

//   city: {
//     type: String,
//     required: true,
//   },
//   temperature: {
//     type: Number,
//     required: true,
//   },

//   humidity: {
//     type: Number,
//     required: true,
//   },

//   name: {
//     type: String,
//     unique: true,
//   },
//   country: String,
// });

// const CityForecastSchema = new Schema({
//   city: {
//     type: Schema.Types.ObjectId,
//     ref: 'CityName',
//   },
//   forecastData: {
//     // Define the structure of forecast data fields
//   },
// });

// const CityName = model('CityName', CityNameSchema);
// const CityForecast = model('CityForecast', CityForecastSchema);

// export { CityName, CityForecast };

// import { Schema, Prop, SchemaFactory } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CityDocument = HydratedDocument<City>;

@Schema()
export class City {
  @Prop({ required: true })
  name: string;

  @Prop()
  id: number;

  @Prop({ required: true, unique: true })
  email: String;

  @Prop({ required: true })
  password: string;

  // @Prop()
  // role: Role => Define the enum File first

  @Prop()
  Avatar: String;
}

export const CitySchema = SchemaFactory.createForClass(City);
