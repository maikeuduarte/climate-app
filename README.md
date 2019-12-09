# Climate App
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.16.0.
The app consumes the API **api.openweathermap.org**.

## Step configuration
* We get the tools we depend upon and the AngularJS code via `npm`, you will need [Node package manager](https://nodejs.org/en/download/) installed.
* In order to run the end-to-end tests, you will also need to have the [Java Development Kit (JDK)](https://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html) installed on your machine.
* You will need also to have `gem`, you will need [ruby](https://www.ruby-lang.org/en/downloads/) installed on your machine.
* **Open terminal in root directory and run the following commands in order:**
```
    1. npm install    
    2. gem install compass (Remeber that need ruby installed)    
    3. bower install   
```
## Build & development
Run `grunt` for building and `grunt serve` for preview.

## Testing
Running `grunt test` will run the unit tests with karma.


## WIKI

### Degrees Component (degrees)
Component that keeps style of temperature.

#### Bindings
| Name         | Type | Description  |
| :----------- | :--- | :----------- |
| temperature  | <    | Temperature info to render styles |

#### Examples
##### Basic implemetation

```html
<degrees temperature="degreesInfo"></degrees>
```

### Try Again component (try-again)
Component to reload information when is bad request.

#### Bindings
| Name         | Type | Description  |
| :----------- | :--- | :----------- |
| on-try-again  | &    | Callback of method to invoke when click in try again button |

#### Examples
##### Basic implemetation

```html
<try-again on-try-again="onTryAgain()"></try-again>
```
```javascript
$scope.onTryAgain = function onTryAgain(){
  console.log('Try Again!!!');
};
```

### Forecast Card component (forecast-card)
Component to show forecast information about city.

#### Bindings
| Name         | Type | Description  |
| :----------- | :--- | :----------- |
| city-information  | <    | Configuration of city according model below |
| on-load-forecast  | &    | Callback to load city information |
| enable-refresh    | <?    | Make to refresh information every 10 minutes. default: false |

#### Examples
##### Basic implemetation

```html
<forecast-card city-information="cityInformation" on-load-forecast="onLoadForecast(cityId)" enable-refresh="true"></forecast-card>
```
```javascript
// You add other cities, just follow the setting below
$scope.cityInformation = {
    name: 'Urubici, BR', // Name of city, show in header of card
    id: 3445709, // Id of city
    isPrincipal: true // If card is principal
};

$scope.onLoadForecast = function (cityId) {
    console.log('get city by id:'+ cityId);
};
```
