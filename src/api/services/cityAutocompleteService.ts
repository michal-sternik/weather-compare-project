
import { citiesApi } from '..';
import { CITYAPI_API_KEY } from '../../api-tokens';
import { PredictedPlace } from '../../types/cityTypes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockData = {
    "results": [
        {
            "country": "Poland",
            "country_code": "pl",
            "state": "Lower Silesian Voivodeship",
            "city": "Wrocławwwww",
            "datasource": {
                "sourcename": "openstreetmap",
                "attribution": "© OpenStreetMap contributors",
                "license": "Open Database License",
                "url": "https://www.openstreetmap.org/copyright"
            },
            "lon": 16.978196331,
            "lat": 51.1263106,
            "population": 641201,
            "result_type": "city",
            "formatted": "Wrocław, Lower Silesian Voivodeship, Poland",
            "address_line1": "Wrocław",
            "address_line2": "Lower Silesian Voivodeship, Poland",
            "category": "administrative",
            "timezone": {
                "name": "Europe/Warsaw",
                "offset_STD": "+01:00",
                "offset_STD_seconds": 3600,
                "offset_DST": "+02:00",
                "offset_DST_seconds": 7200,
                "abbreviation_STD": "CET",
                "abbreviation_DST": "CEST"
            },
            "plus_code": "9F3R4XGH+G7",
            "plus_code_short": "4XGH+G7 Wrocław, Lower Silesian Voivodeship, Poland",
            "rank": {
                "confidence": 1,
                "confidence_city_level": 1,
                "match_type": "full_match"
            },
            "place_id": "5152b622136bfa304059ae111cf22a904940f00101f901bacf2a0000000000c00208",
            "bbox": {
                "lon1": 16.8073393,
                "lat1": 51.0426686,
                "lon2": 17.1762192,
                "lat2": 51.2100604
            }
        },
        {
            "country": "Poland",
            "country_code": "pl",
            "state": "Lower Silesian Voivodeship",
            "city": "Wrocław",
            "postcode": "50-001",
            "datasource": {
                "sourcename": "openstreetmap",
                "attribution": "© OpenStreetMap contributors",
                "license": "Open Database License",
                "url": "https://www.openstreetmap.org/copyright"
            },
            "lon": 17.0326689,
            "lat": 51.1089776,
            "population": 634487,
            "result_type": "postcode",
            "formatted": "50-001 Wrocław, Poland",
            "address_line1": "50-001 Wrocław",
            "address_line2": "Poland",
            "category": "administrative",
            "timezone": {
                "name": "Europe/Warsaw",
                "offset_STD": "+01:00",
                "offset_STD_seconds": 3600,
                "offset_DST": "+02:00",
                "offset_DST_seconds": 7200,
                "abbreviation_STD": "CET",
                "abbreviation_DST": "CEST"
            },
            "plus_code": "9F3V425M+H3",
            "plus_code_short": "5M+H3 Wrocław, Lower Silesian Voivodeship, Poland",
            "rank": {
                "confidence": 1,
                "confidence_city_level": 1,
                "match_type": "full_match"
            },
            "place_id": "51a71831fd5c0831405990ff5dfaf28d4940f00101f901bce3060000000000c0020792030935302d3030312b706c",
            "bbox": {
                "lon1": 16.8073393,
                "lat1": 51.0426686,
                "lon2": 17.1762192,
                "lat2": 51.2100604
            }
        },
        {
            "country": "Ukraine",
            "country_code": "ua",
            "state": "Lviv Oblast",
            "city": "Vorotsiv",
            "municipality": "Ivano-Frankove Settlement Hromada",
            "postcode": "81086",
            "district": "Yavoriv Raion",
            "datasource": {
                "sourcename": "openstreetmap",
                "attribution": "© OpenStreetMap contributors",
                "license": "Open Database License",
                "url": "https://www.openstreetmap.org/copyright"
            },
            "lon": 23.819389,
            "lat": 49.86179,
            "population": 1228,
            "result_type": "district",
            "formatted": "Yavoriv Raion, Vorotsiv, Lviv Oblast, Ukraine",
            "address_line1": "Yavoriv Raion",
            "address_line2": "Vorotsiv, Lviv Oblast, Ukraine",
            "category": "populated_place",
            "timezone": {
                "name": "Europe/Kyiv",
                "offset_STD": "+02:00",
                "offset_STD_seconds": 7200,
                "offset_DST": "+03:00",
                "offset_DST_seconds": 10800,
                "abbreviation_STD": "EET",
                "abbreviation_DST": "EEST"
            },
            "plus_code": "8GX5VR69+PQ",
            "rank": {
                "confidence": 1,
                "confidence_city_level": 1,
                "match_type": "full_match"
            },
            "place_id": "51c0b33d7ac3d13740598a027d224fee4840f00103f901817d1e1400000000c00206",
            "bbox": {
                "lon1": 23.819389,
                "lat1": 49.86179,
                "lon2": 23.819389,
                "lat2": 49.86179
            }
        }
    ],
    "query": {
        "text": "wroc",
        "parsed": {
            "city": "wroc",
            "expected_type": "unknown"
        }
    }
}
class CityAutocompleteService {
    //mocked data to save api calls
    public static async getListOfPredictetCities(prompt: string): Promise<PredictedPlace[]> {
        const citiesData = (await citiesApi.get(`autocomplete?text=${prompt}&limit=3&type=city&format=json&apiKey=${CITYAPI_API_KEY}`)).data
        // const citiesData = mockData
        // eslint-disable-next-line no-debugger
        debugger;
        if (citiesData.results && citiesData.results.length > 0) {
            const formattedData: PredictedPlace[] = [];

            for (let i = 0; i < citiesData.results.length; i++) {
                const result = citiesData.results[i];
                formattedData.push({
                    city: result.city,
                    country: result.country
                });
            }

            return formattedData;
        } else {
            return [];
        }
    }

}
export default CityAutocompleteService;
