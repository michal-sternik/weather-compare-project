
import { weaterApi } from '..';
import { OPENWEATHER_API_KEY } from '../../api-tokens';
import { CityListItemProps } from '../../types/cityTypes';
import { convertCityData } from '../../utils/country_utils';


class CityService {

  public static async getCityWeather(cityName: string): Promise<CityListItemProps> {
    return (await weaterApi.get(`/weather?q=${cityName}&appid=${OPENWEATHER_API_KEY}`)).data
  }

  public static async getCitiesWeather(citiesNames: string[]): Promise<CityListItemProps[]> {
    const citiesData = []

    for (let i = 0; i < citiesNames.length; i++) {
      const cityData = (await weaterApi.get(`/weather?q=${citiesNames[i]}&appid=${OPENWEATHER_API_KEY}`)).data
      citiesData.push(convertCityData(cityData))
    }
    return citiesData
  }


}
export default CityService;
