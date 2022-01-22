# Image-Processing-API

image processing api is an API that resize any image you want

<details><summary>scripts</summary>
 
the script needed to test the code is: 
```npm run test``` this just forces the project to build and run jasmine
 
 
 -the script needed to start my application is ```npm run start``` this starts the server in the dev mode
 
 -to build the project run this script ```npm run build``` this compile the typescript and create dist directory with the js files
 
 -to build and run the js files just run this script ```npm run buildrun```
 
 | script| what it does|
 |---|---|
 |```npm run test```| run the tests in the project|
 |```npm run start```| starts the server from the typescript code|
 |```npm run build```| builds the project to directory dist|
 |```npm run buildrun```| build the project and run the compiled code|
 </details>
 
 
 <details><summary>endpoint details</summary>
 -the image processing endpoint is
 /api/images?name=santamonica.jpg&width=200&height=200
 
 -you can change the parameters but make sure to put the full image in the directory assets/full first
 
 and then drop the image name and the width and height you want resize the image to in the url.
 </details>
 
 <details>
 <summary>additional scripts</summary>
 -finally there are more scripts that i created like 
 ```npm run prettier```
 and 
 ```npm run lint```
 
 </details>
