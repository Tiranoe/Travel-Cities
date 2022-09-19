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
https://api.countrystatecity.in/v1/countries

## Country API Successful data
```javascript
{
  "id": 101,
  "name": "India",
  "iso3": "IND",
  "iso2": "IN",
  "phonecode": "91",
  "capital": "New Delhi",
  "currency": "INR",
  "native": "भारत",
  "emoji": "🇮🇳",
  "emojiU": "U+1F1EE U+1F1F3"
}
```

### Components Hierarchy
![Component Hierarchy](https://github.com/Tiranoe/Travel-Cities/blob/main/assets/Components%20Diagram.png?raw=true)


### Stretch Features
* Like to see if I can implement a second API (API for showing list of things to do in countries) to show in the countryDetails page
* Style improvements
* Add a country if not in the database