# GeoHOME
Once the end-user has found the home of their dreams using one of the popular realtor websites, GeoHOME will provide a user experience that allows them to truly test if the home is right for them. The website provides a one-stop-shop of detailed information about the home with the:
  * Zillow API- by inputting the home address a plethora of information is unlocked
  * Google Maps API- two different options to 1) search for any points of interest within the vicinity 2) check traffic reporting
  * Esri Rest API- display demographic options using ArcGIS Online
  * Crime Data for the surrounding area gathered from the FBI
  * NOAA API- Allow the user to see if their potential home will be effected by Sea Level Rise concerns using geo-located elevation comparison
  * USGS API- Allow the user to see if their potential home has a history of being on a fault line or earthquake prone

## **Screenshots**

![GeoHome Main page](images/Main.PNG?raw=true "Main Page")
The user will have the option to take the geo-location provided by the zillow API for the home that has been found and search for anything within the vicinity of the home using the Google Maps Places API.
![Google Maps Places Library](images/Places.PNG?raw=true "Google Maps Places Library")
The Google Maps API- Places library will provide a significant amount of information. GeoHOME will provide that content into a user-friendly format for all the locations that get displayed within the current zoom extent of the map(maximum of 20 locations).
![Google Maps Places Library-with Details Displayed](images/Places-Details.PNG?raw=true "Google Maps Places Library-with Details Displayed")
The user is given 20 different demographic options to see for the area of their potential home, which is broken into US Census Tracts. 
![Esri ArcGIS Online Rest API](images/Demographic-Options.PNG?raw=true "Esri ArcGIS Online Rest API")

![Esri ArcGIS Online Rest API-Tracts for all USA](images/Demographic-Tracts.PNG?raw=true "Esri ArcGIS Online Rest API")
