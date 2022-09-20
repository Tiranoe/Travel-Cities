# Travel-Cities

## Project Description
My app is called Travelizer. This app will show list of countries for the user to determine which country to choose for their vacation time. User will be able to see all the list of countries in the database. When user clicks each country name, it will display country's name, capital city, currency, flag, phone code, and other information regarding to that country. In the future, I would like to add a feature to implement a second API for user to also see things to do list for each specific country.

## Wireframes
Home
![Home Page Screenshot](https://github.com/Tiranoe/Travel-Cities/blob/main/travelworld/assets/Home%20wireframe.png?raw=true)

Country Detail Page
![Country Detail Page](https://github.com/Tiranoe/Travel-Cities/blob/main/travelworld/assets/Country%20Details.png?raw=true)

## MVP User Stories
* As a user, I want to see a list of all available countries that an user can travel to so they can decide which country they want to go for vacation time.

* As a user, I would like to click on the country to view the details (such as the city, flag, capital, currency) so that user can determine if they like the city to go or not.

* As a user, I want to add list of countries to my favorite s so that I can see all the countries that user is interested in.

## API
https://restcountries.com/#api-endpoints-v3-all

## Country API Successful data
```javascript
[
  {
    "name": {
      "common": "Japan",
      "official": "Japan",
      "nativeName": {
        "jpn": {
          "official": "日本",
          "common": "日本"
        }
      }
    },
    "tld": [
      ".jp",
      ".みんな"
    ],
    "cca2": "JP",
    "ccn3": "392",
    "cca3": "JPN",
    "cioc": "JPN",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "JPY": {
        "name": "Japanese yen",
        "symbol": "¥"
      }
    },
    "idd": {
      "root": "+8",
      "suffixes": [
        "1"
      ]
    },
    "capital": [
      "Tokyo"
    ],
    "altSpellings": [
      "JP",
      "Nippon",
      "Nihon"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "languages": {
      "jpn": "Japanese"
    },
    "translations": {
      "ces": {
        "official": "Japonsko",
        "common": "Japonsko"
      },
      "deu": {
        "official": "Japan",
        "common": "Japan"
      },
      "est": {
        "official": "Jaapan",
        "common": "Jaapan"
      },
      "fin": {
        "official": "Japani",
        "common": "Japani"
      },
      "fra": {
        "official": "Japon",
        "common": "Japon"
      },
      "hrv": {
        "official": "Japan",
        "common": "Japan"
      },
      "hun": {
        "official": "Japán",
        "common": "Japán"
      },
      "ita": {
        "official": "Giappone",
        "common": "Giappone"
      },
      "jpn": {
        "official": "日本",
        "common": "日本"
      },
      "kor": {
        "official": "일본국",
        "common": "일본"
      },
      "nld": {
        "official": "Japan",
        "common": "Japan"
      },
      "per": {
        "official": "ژاپن",
        "common": "ژاپن"
      },
      "pol": {
        "official": "Japonia",
        "common": "Japonia"
      },
      "por": {
        "official": "Japão",
        "common": "Japão"
      },
      "rus": {
        "official": "Япония",
        "common": "Япония"
      },
      "slk": {
        "official": "Japonsko",
        "common": "Japonsko"
      },
      "spa": {
        "official": "Japón",
        "common": "Japón"
      },
      "swe": {
        "official": "Japan",
        "common": "Japan"
      },
      "urd": {
        "official": "جاپان",
        "common": "جاپان"
      },
      "zho": {
        "official": "日本国",
        "common": "日本"
      }
    },
    "latlng": [
      36.0,
      138.0
    ],
    "landlocked": false,
    "area": 377930.0,
    "flag": "🇯🇵",
    "flags": [
      "svg": "https://restcountries.com/data/jpn.svg",
      "png": "https://restcountries.com/data/png/jpn.png"
    ],
    "demonyms": {
      "eng": {
        "f": "Japanese",
        "m": "Japanese"
      },
      "fra": {
        "f": "Japonaise",
        "m": "Japonais"
      }
    }
  }
]
```

### Components Hierarchy
![Component Hierarchy](https://github.com/Tiranoe/Travel-Cities/blob/main/assets/Components%20Diagram.png?raw=true)


### Stretch Features
* Like to see if I can implement a second API (API for showing list of things to do in countries) to show in the countryDetails page
* Style improvements
* Add a country if not in the database