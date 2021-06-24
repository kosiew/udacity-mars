# Functional Programming with Javascript 

## Student Instructions

### Big Picture

You are going to create a Mars rover dashboard that consumes the NASA API. Your dashboard will allow the user to select which rover's information they want to view. Once they have selected a rover, they will be able to see the most recent images taken by that rover, as well as important information about the rover and its mission. Your app will make use of all the functional concepts and practices you have learned in this course, and the goal is that you would become very comfortable using pure functions and iterating over, reshaping, and accessing information from complex API responses. 

### Getting Started

We have supplied some of the foundational code for you. So follow these steps to get started:

1. We'll start with the typical setup - clone theis repo and install the dependencies

 - [ ] To clone the repo, remember to clone just the starter branch:

```git clone --single-branch --branch starter <repo-name>```

 - [ ] For this project we are using yarn as our package manager, so to install your depencies run:

```yarn install``` 

**If you don’t have yarn installed globally, follow their installation documentation here according to your operating system: https://yarnpkg.com/lang/en/docs/install

2. Next you'll need a NASA developer API key in order to access the API endpoints. To do that, go here: https://api.nasa.gov/. If you want to simply look around at what api endpoints NASA offers, you can use their provided DEMO_KEY to do this.

3. In your repo, you will see a .env-example file with a place for your API key. Rename or copy the file to one called `.env` and enter in your key. Now that you have your key, just remember to add it as a parameter to every request you make to NASA.

5. Run `yarn start` in your terminal and go to `http:localhost:3000` to check that your app is working. If you don't see an image on the page, check that your api key is set up correctly.

6. Remember to commit frequently, use branches, and leave good commit messages! You'll thank yourself later.

### Project Requirements

To complete this project, your UI must show the following:

- [ ] A gallery of the most recent images sent from each mars rover
- [ ] The launch date, landing date, name and status along with any other information about the rover
- [ ] A selection bar for the user to choose which rover's information they want to see

To complete this project, your UI must do the following:

- [ ] Be responsive. Needs to look good(aka not broken) on phones(max width 768px) and desktop(min-width 991px, max-width 1824px). Tablet view is optional.
- [ ] Provide a way to dynamically switch the UI to view one of the three rovers 
**This can be done using tabs, buttons, or any other UI control

To complete this project, your frontend code must:

- [ ] Use only pure functions
- [ ] Use at least one Higher Order Function
- [ ] Use the array method `map`
- [ ] Use the ImmutableJS library

To complete this project, your backend code must:

- [ ] Be built with Node/Express
- [ ] Make successful calls to the NASA API
- [ ] Use pure functions to do any logic necessary
- [ ] Hide any sensetive information from public view (In other words, use your dotenv file)

### Above and Beyond

The NASA API has a lot more data to offer than what we are using here. There's no extra credit in this course, but it could be fun explore their API and see what they have to offer and what strikes your creativity to add into your project. You are not limited to the API calls we require. Look here (https://api.nasa.gov/ at the Browse API's section) to see all that's available.

Some ideas might be to incorporate the Astronomy Photo of the Day into your design, collect weather information on Mars, etc...

### Design

Create an image gallery slider, put a full page background image, code some falling asteroids with css animations ... the visual design of this UI is up to you! There is a lot of awesome dashboard design inspiration out there. You have already been given a good start with a mobile-first stylesheet already set up for you. 


### dev environment

in terminal
/Users/kosiew/GitHub/udacity-mars/project

yarn start

open http://localhost:3000 in browser



### Research notes

NASA's Curiosity, Opportunity, and Spirit rovers on Mars
the "Mars Rover Photos" section at https://api.nasa.gov/

sample api url
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-6-3&api_key=eRafRpcw5LGMust4pIe03eg1sRZMfi1eTw9kAIC1

{
    "photos": [
        {
            "camera": {
                "full_name": "Front Hazard Avoidance Camera",
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5
            },
            "earth_date": "2021-06-01",
            "id": 840263,
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03135/opgs/edr/fcam/FLB_675798054EDR_F0880366FHAZ00302M_.JPG",
            "rover": {
                "id": 5,
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "name": "Curiosity",
                "status": "active"
            },
            "sol": 3135
        },
        {
            "camera": {
                "full_name": "Front Hazard Avoidance Camera",
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5
            },
            "earth_date": "2021-06-01",
            "id": 840264,
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03135/opgs/edr/fcam/FRB_675798054EDR_F0880366FHAZ00302M_.JPG",
            "rover": {
                "id": 5,
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "name": "Curiosity",
                "status": "active"
            },
            "sol": 3135
        },
        {
            "camera": {
                "full_name": "Rear Hazard Avoidance Camera",
                "id": 21,
                "name": "RHAZ",
                "rover_id": 5
            },
            "earth_date": "2021-06-01",
            "id": 840265,
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03135/opgs/edr/rcam/RLB_675798088EDR_F0880366RHAZ00311M_.JPG",
            "rover": {
                "id": 5,
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "name": "Curiosity",
                "status": "active"
            },
            "sol": 3135
        },
        {
            "camera": {
                "full_name": "Rear Hazard Avoidance Camera",
                "id": 21,
                "name": "RHAZ",
                "rover_id": 5
            },
            "earth_date": "2021-06-01",
            "id": 840266,
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03135/opgs/edr/rcam/RRB_675798088EDR_F0880366RHAZ00311M_.JPG",
            "rover": {
                "id": 5,
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "name": "Curiosity",
                "status": "active"
            },
            "sol": 3135
        },
        {
            "camera": {
                "full_name": "Mars Descent Imager",
                "id": 25,
                "name": "MARDI",
                "rover_id": 5
            },
            "earth_date": "2021-06-01",
            "id": 840466,
            "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03135/mrdi/3135MD0011670000202553E01_DXXX.jpg",
            "rover": {
                "id": 5,
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "name": "Curiosity",
                "status": "active"
            },
            "sol": 3135
        },
        {
            "camera": {
                "full_name": "Mars Descent Imager",
                "id": 25,
                "name": "MARDI",
                "rover_id": 5
            },
            "earth_date": "2021-06-01",
            "id": 840467,
            "img_src": "https://mars.nasa.gov/msl-raw-images/msss/03135/mrdi/3135MD0011670000202553I01_DXXX.jpg",
            "rover": {
                "id": 5,
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "name": "Curiosity",
                "status": "active"
            },
            "sol": 3135
        }
    ]
}

Rover manifest
https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=eRafRpcw5LGMust4pIe03eg1sRZMfi1eTw9kAIC1

sample data
{
    "photo_manifest": {
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "max_date": "2021-06-22",
        "max_sol": 3156,
        "name": "Curiosity",
        "photos": [
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2012-08-06",
                "sol": 0,
                "total_photos": 3702
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-07",
                "sol": 1,
                "total_photos": 16
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2012-08-08",
                "sol": 2,
                "total_photos": 74
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-08-09",
                "sol": 3,
                "total_photos": 338
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-16",
                "sol": 10,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-18",
                "sol": 12,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-19",
                "sol": 13,
                "total_photos": 208
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-20",
                "sol": 14,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-08-21",
                "sol": 15,
                "total_photos": 58
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-08-22",
                "sol": 16,
                "total_photos": 78
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-23",
                "sol": 17,
                "total_photos": 273
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST"
                ],
                "earth_date": "2012-08-25",
                "sol": 19,
                "total_photos": 444
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-08-26",
                "sol": 20,
                "total_photos": 1046
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-08-27",
                "sol": 21,
                "total_photos": 73
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-08-28",
                "sol": 22,
                "total_photos": 52
            },
            {
                "cameras": [
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-29",
                "sol": 23,
                "total_photos": 379
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-08-30",
                "sol": 24,
                "total_photos": 218
            },
            {
                "cameras": [
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-08-31",
                "sol": 25,
                "total_photos": 382
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-01",
                "sol": 26,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-02",
                "sol": 27,
                "total_photos": 98
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-04",
                "sol": 29,
                "total_photos": 68
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-05",
                "sol": 30,
                "total_photos": 87
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-07",
                "sol": 32,
                "total_photos": 184
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-08",
                "sol": 33,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI"
                ],
                "earth_date": "2012-09-09",
                "sol": 34,
                "total_photos": 76
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-09-10",
                "sol": 35,
                "total_photos": 33
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-11",
                "sol": 36,
                "total_photos": 221
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-13",
                "sol": 37,
                "total_photos": 1006
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-14",
                "sol": 38,
                "total_photos": 132
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-15",
                "sol": 39,
                "total_photos": 122
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-16",
                "sol": 40,
                "total_photos": 86
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-17",
                "sol": 41,
                "total_photos": 100
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-18",
                "sol": 42,
                "total_photos": 2683
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-19",
                "sol": 43,
                "total_photos": 91
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-20",
                "sol": 44,
                "total_photos": 558
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-21",
                "sol": 45,
                "total_photos": 291
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-22",
                "sol": 46,
                "total_photos": 117
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-23",
                "sol": 47,
                "total_photos": 152
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-24",
                "sol": 48,
                "total_photos": 227
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-25",
                "sol": 49,
                "total_photos": 266
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-26",
                "sol": 50,
                "total_photos": 372
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-27",
                "sol": 51,
                "total_photos": 292
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-09-28",
                "sol": 52,
                "total_photos": 221
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-29",
                "sol": 53,
                "total_photos": 166
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-09-30",
                "sol": 54,
                "total_photos": 353
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-01",
                "sol": 55,
                "total_photos": 216
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-02",
                "sol": 56,
                "total_photos": 122
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-10-03",
                "sol": 57,
                "total_photos": 125
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2012-10-04",
                "sol": 58,
                "total_photos": 242
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-05",
                "sol": 59,
                "total_photos": 176
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-06",
                "sol": 60,
                "total_photos": 262
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-07",
                "sol": 61,
                "total_photos": 406
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-08",
                "sol": 62,
                "total_photos": 28
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2012-10-09",
                "sol": 63,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2012-10-10",
                "sol": 64,
                "total_photos": 510
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-11",
                "sol": 65,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-12",
                "sol": 66,
                "total_photos": 703
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-13",
                "sol": 67,
                "total_photos": 356
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-14",
                "sol": 68,
                "total_photos": 22
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-15",
                "sol": 69,
                "total_photos": 490
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-16",
                "sol": 70,
                "total_photos": 110
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-17",
                "sol": 71,
                "total_photos": 206
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-18",
                "sol": 72,
                "total_photos": 281
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-20",
                "sol": 73,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-21",
                "sol": 74,
                "total_photos": 478
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-22",
                "sol": 75,
                "total_photos": 139
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-23",
                "sol": 76,
                "total_photos": 120
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-24",
                "sol": 77,
                "total_photos": 166
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-25",
                "sol": 78,
                "total_photos": 716
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-26",
                "sol": 79,
                "total_photos": 137
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2012-10-27",
                "sol": 80,
                "total_photos": 95
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-28",
                "sol": 81,
                "total_photos": 98
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-10-29",
                "sol": 82,
                "total_photos": 192
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-10-31",
                "sol": 84,
                "total_photos": 246
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-01",
                "sol": 85,
                "total_photos": 216
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-02",
                "sol": 86,
                "total_photos": 95
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-03",
                "sol": 87,
                "total_photos": 161
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-04",
                "sol": 88,
                "total_photos": 112
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-05",
                "sol": 89,
                "total_photos": 192
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-06",
                "sol": 90,
                "total_photos": 122
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-07",
                "sol": 91,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-08",
                "sol": 92,
                "total_photos": 9
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-09",
                "sol": 93,
                "total_photos": 128
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-10",
                "sol": 94,
                "total_photos": 113
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-11",
                "sol": 95,
                "total_photos": 43
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-12",
                "sol": 96,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST"
                ],
                "earth_date": "2012-11-13",
                "sol": 97,
                "total_photos": 20
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-14",
                "sol": 98,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-16",
                "sol": 100,
                "total_photos": 400
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-17",
                "sol": 101,
                "total_photos": 128
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-18",
                "sol": 102,
                "total_photos": 113
            },
            {
                "cameras": [
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-19",
                "sol": 103,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-20",
                "sol": 104,
                "total_photos": 68
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2012-11-21",
                "sol": 105,
                "total_photos": 12
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-11-22",
                "sol": 106,
                "total_photos": 224
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-11-23",
                "sol": 107,
                "total_photos": 432
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-11-24",
                "sol": 108,
                "total_photos": 270
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-11-25",
                "sol": 109,
                "total_photos": 534
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-11-27",
                "sol": 110,
                "total_photos": 476
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-28",
                "sol": 111,
                "total_photos": 501
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-29",
                "sol": 112,
                "total_photos": 140
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-11-30",
                "sol": 113,
                "total_photos": 133
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-01",
                "sol": 114,
                "total_photos": 132
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-02",
                "sol": 115,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-12-03",
                "sol": 116,
                "total_photos": 171
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-04",
                "sol": 117,
                "total_photos": 64
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-05",
                "sol": 118,
                "total_photos": 120
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-12-06",
                "sol": 119,
                "total_photos": 86
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-07",
                "sol": 120,
                "total_photos": 424
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-08",
                "sol": 121,
                "total_photos": 344
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-09",
                "sol": 122,
                "total_photos": 158
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-10",
                "sol": 123,
                "total_photos": 134
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-11",
                "sol": 124,
                "total_photos": 124
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-12",
                "sol": 125,
                "total_photos": 137
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-12-13",
                "sol": 126,
                "total_photos": 98
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-14",
                "sol": 127,
                "total_photos": 135
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-12-15",
                "sol": 128,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-12-16",
                "sol": 129,
                "total_photos": 180
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-17",
                "sol": 130,
                "total_photos": 131
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-18",
                "sol": 131,
                "total_photos": 58
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-19",
                "sol": 132,
                "total_photos": 188
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-20",
                "sol": 133,
                "total_photos": 318
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-21",
                "sol": 134,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2012-12-22",
                "sol": 135,
                "total_photos": 184
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2012-12-23",
                "sol": 136,
                "total_photos": 122
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2012-12-24",
                "sol": 137,
                "total_photos": 550
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-12-25",
                "sol": 138,
                "total_photos": 372
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2012-12-26",
                "sol": 139,
                "total_photos": 64
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2012-12-28",
                "sol": 141,
                "total_photos": 387
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2012-12-29",
                "sol": 142,
                "total_photos": 64
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2012-12-30",
                "sol": 143,
                "total_photos": 64
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2012-12-31",
                "sol": 144,
                "total_photos": 64
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2013-01-01",
                "sol": 145,
                "total_photos": 64
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2013-01-03",
                "sol": 146,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-04",
                "sol": 147,
                "total_photos": 181
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-05",
                "sol": 148,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-06",
                "sol": 149,
                "total_photos": 193
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-07",
                "sol": 150,
                "total_photos": 257
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-08",
                "sol": 151,
                "total_photos": 83
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-09",
                "sol": 152,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-10",
                "sol": 153,
                "total_photos": 275
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-11",
                "sol": 154,
                "total_photos": 271
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-12",
                "sol": 155,
                "total_photos": 61
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-13",
                "sol": 156,
                "total_photos": 78
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-14",
                "sol": 157,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-15",
                "sol": 158,
                "total_photos": 334
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-16",
                "sol": 159,
                "total_photos": 199
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-17",
                "sol": 160,
                "total_photos": 244
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-18",
                "sol": 161,
                "total_photos": 311
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-19",
                "sol": 162,
                "total_photos": 318
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-20",
                "sol": 163,
                "total_photos": 264
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-21",
                "sol": 164,
                "total_photos": 274
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-22",
                "sol": 165,
                "total_photos": 239
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-23",
                "sol": 166,
                "total_photos": 237
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-24",
                "sol": 167,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-01-25",
                "sol": 168,
                "total_photos": 267
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-26",
                "sol": 169,
                "total_photos": 220
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-27",
                "sol": 170,
                "total_photos": 268
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-28",
                "sol": 171,
                "total_photos": 164
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-29",
                "sol": 172,
                "total_photos": 728
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-30",
                "sol": 173,
                "total_photos": 759
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-01-31",
                "sol": 174,
                "total_photos": 174
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-01",
                "sol": 175,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-02-02",
                "sol": 176,
                "total_photos": 155
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-03",
                "sol": 177,
                "total_photos": 233
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-04",
                "sol": 178,
                "total_photos": 94
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-05",
                "sol": 179,
                "total_photos": 164
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-06",
                "sol": 180,
                "total_photos": 103
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-07",
                "sol": 181,
                "total_photos": 374
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-09",
                "sol": 182,
                "total_photos": 202
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-10",
                "sol": 183,
                "total_photos": 142
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-11",
                "sol": 184,
                "total_photos": 686
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-12",
                "sol": 185,
                "total_photos": 186
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-13",
                "sol": 186,
                "total_photos": 584
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-14",
                "sol": 187,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-15",
                "sol": 188,
                "total_photos": 248
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-16",
                "sol": 189,
                "total_photos": 100
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-17",
                "sol": 190,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-02-19",
                "sol": 192,
                "total_photos": 744
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-20",
                "sol": 193,
                "total_photos": 194
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-21",
                "sol": 194,
                "total_photos": 319
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-02-22",
                "sol": 195,
                "total_photos": 23
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-23",
                "sol": 196,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-02-24",
                "sol": 197,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-25",
                "sol": 198,
                "total_photos": 294
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-02-26",
                "sol": 199,
                "total_photos": 19
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-02-27",
                "sol": 200,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-03-14",
                "sol": 215,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2013-03-15",
                "sol": 216,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2013-03-22",
                "sol": 222,
                "total_photos": 11
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-03-23",
                "sol": 223,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-03-24",
                "sol": 224,
                "total_photos": 26
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-03-25",
                "sol": 225,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-03-26",
                "sol": 226,
                "total_photos": 92
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-03-27",
                "sol": 227,
                "total_photos": 80
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-03-28",
                "sol": 228,
                "total_photos": 4
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-03-29",
                "sol": 229,
                "total_photos": 90
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-03-30",
                "sol": 230,
                "total_photos": 107
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-03-31",
                "sol": 231,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-04-01",
                "sol": 232,
                "total_photos": 254
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-04-02",
                "sol": 233,
                "total_photos": 208
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-04-03",
                "sol": 234,
                "total_photos": 146
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-04-04",
                "sol": 235,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-02",
                "sol": 262,
                "total_photos": 36
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-05-03",
                "sol": 263,
                "total_photos": 4
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-05-07",
                "sol": 267,
                "total_photos": 30
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-08",
                "sol": 268,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-09",
                "sol": 269,
                "total_photos": 294
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-10",
                "sol": 270,
                "total_photos": 748
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-11",
                "sol": 271,
                "total_photos": 472
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-12",
                "sol": 272,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-13",
                "sol": 273,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-14",
                "sol": 274,
                "total_photos": 150
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-15",
                "sol": 275,
                "total_photos": 99
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-16",
                "sol": 276,
                "total_photos": 79
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-17",
                "sol": 277,
                "total_photos": 92
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-05-18",
                "sol": 278,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-19",
                "sol": 279,
                "total_photos": 290
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-05-20",
                "sol": 280,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-21",
                "sol": 281,
                "total_photos": 104
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-05-22",
                "sol": 282,
                "total_photos": 86
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-23",
                "sol": 283,
                "total_photos": 232
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2013-05-24",
                "sol": 284,
                "total_photos": 755
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-05-25",
                "sol": 285,
                "total_photos": 60
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-26",
                "sol": 286,
                "total_photos": 28
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-05-27",
                "sol": 287,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-28",
                "sol": 288,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-29",
                "sol": 289,
                "total_photos": 1218
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-05-30",
                "sol": 290,
                "total_photos": 82
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-05-31",
                "sol": 291,
                "total_photos": 223
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST"
                ],
                "earth_date": "2013-06-02",
                "sol": 292,
                "total_photos": 335
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-03",
                "sol": 293,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-06-04",
                "sol": 294,
                "total_photos": 40
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-06-05",
                "sol": 295,
                "total_photos": 40
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-06",
                "sol": 296,
                "total_photos": 62
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-07",
                "sol": 297,
                "total_photos": 238
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-06-08",
                "sol": 298,
                "total_photos": 274
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-09",
                "sol": 299,
                "total_photos": 56
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-10",
                "sol": 300,
                "total_photos": 116
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-11",
                "sol": 301,
                "total_photos": 144
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-12",
                "sol": 302,
                "total_photos": 174
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-13",
                "sol": 303,
                "total_photos": 466
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-14",
                "sol": 304,
                "total_photos": 285
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-15",
                "sol": 305,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-16",
                "sol": 306,
                "total_photos": 324
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-17",
                "sol": 307,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-18",
                "sol": 308,
                "total_photos": 330
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-19",
                "sol": 309,
                "total_photos": 340
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-20",
                "sol": 310,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-06-21",
                "sol": 311,
                "total_photos": 246
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-06-22",
                "sol": 312,
                "total_photos": 138
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-23",
                "sol": 313,
                "total_photos": 784
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-24",
                "sol": 314,
                "total_photos": 480
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-25",
                "sol": 315,
                "total_photos": 812
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-26",
                "sol": 316,
                "total_photos": 522
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-27",
                "sol": 317,
                "total_photos": 360
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-28",
                "sol": 318,
                "total_photos": 866
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-29",
                "sol": 319,
                "total_photos": 506
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-06-30",
                "sol": 320,
                "total_photos": 192
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-01",
                "sol": 321,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-02",
                "sol": 322,
                "total_photos": 233
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-03",
                "sol": 323,
                "total_photos": 407
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-04",
                "sol": 324,
                "total_photos": 129
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-05",
                "sol": 325,
                "total_photos": 72
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-07-06",
                "sol": 326,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-07",
                "sol": 327,
                "total_photos": 116
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-09",
                "sol": 328,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-10",
                "sol": 329,
                "total_photos": 152
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-11",
                "sol": 330,
                "total_photos": 112
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-12",
                "sol": 331,
                "total_photos": 144
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-13",
                "sol": 332,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-14",
                "sol": 333,
                "total_photos": 137
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-07-15",
                "sol": 334,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-16",
                "sol": 335,
                "total_photos": 111
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-17",
                "sol": 336,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-18",
                "sol": 337,
                "total_photos": 188
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-19",
                "sol": 338,
                "total_photos": 215
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-20",
                "sol": 339,
                "total_photos": 40
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-21",
                "sol": 340,
                "total_photos": 218
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-22",
                "sol": 341,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-23",
                "sol": 342,
                "total_photos": 177
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-24",
                "sol": 343,
                "total_photos": 135
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-25",
                "sol": 344,
                "total_photos": 296
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-26",
                "sol": 345,
                "total_photos": 287
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-27",
                "sol": 346,
                "total_photos": 184
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-28",
                "sol": 347,
                "total_photos": 97
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-29",
                "sol": 348,
                "total_photos": 82
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-07-30",
                "sol": 349,
                "total_photos": 171
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-07-31",
                "sol": 350,
                "total_photos": 42
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-01",
                "sol": 351,
                "total_photos": 335
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-02",
                "sol": 352,
                "total_photos": 278
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-03",
                "sol": 353,
                "total_photos": 42
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-04",
                "sol": 354,
                "total_photos": 106
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-05",
                "sol": 355,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-06",
                "sol": 356,
                "total_photos": 177
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-07",
                "sol": 357,
                "total_photos": 82
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-08",
                "sol": 358,
                "total_photos": 139
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-09",
                "sol": 359,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-10",
                "sol": 360,
                "total_photos": 130
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-11",
                "sol": 361,
                "total_photos": 93
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2013-08-12",
                "sol": 362,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-13",
                "sol": 363,
                "total_photos": 283
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-08-15",
                "sol": 364,
                "total_photos": 212
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-16",
                "sol": 365,
                "total_photos": 180
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-17",
                "sol": 366,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-18",
                "sol": 367,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-19",
                "sol": 368,
                "total_photos": 230
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-20",
                "sol": 369,
                "total_photos": 372
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-21",
                "sol": 370,
                "total_photos": 154
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-22",
                "sol": 371,
                "total_photos": 353
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-23",
                "sol": 372,
                "total_photos": 229
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-24",
                "sol": 373,
                "total_photos": 250
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-25",
                "sol": 374,
                "total_photos": 117
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-26",
                "sol": 375,
                "total_photos": 226
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-27",
                "sol": 376,
                "total_photos": 313
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-28",
                "sol": 377,
                "total_photos": 301
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-29",
                "sol": 378,
                "total_photos": 223
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-30",
                "sol": 379,
                "total_photos": 179
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-08-31",
                "sol": 380,
                "total_photos": 28
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-01",
                "sol": 381,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-02",
                "sol": 382,
                "total_photos": 94
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-03",
                "sol": 383,
                "total_photos": 96
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-09-04",
                "sol": 384,
                "total_photos": 248
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-05",
                "sol": 385,
                "total_photos": 520
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-09-06",
                "sol": 386,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-09-07",
                "sol": 387,
                "total_photos": 375
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-08",
                "sol": 388,
                "total_photos": 629
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-09-09",
                "sol": 389,
                "total_photos": 390
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-10",
                "sol": 390,
                "total_photos": 309
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-09-11",
                "sol": 391,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-12",
                "sol": 392,
                "total_photos": 227
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-09-13",
                "sol": 393,
                "total_photos": 130
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-14",
                "sol": 394,
                "total_photos": 162
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-15",
                "sol": 395,
                "total_photos": 244
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-16",
                "sol": 396,
                "total_photos": 189
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-17",
                "sol": 397,
                "total_photos": 258
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-18",
                "sol": 398,
                "total_photos": 241
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-19",
                "sol": 399,
                "total_photos": 268
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-20",
                "sol": 400,
                "total_photos": 502
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-09-22",
                "sol": 401,
                "total_photos": 368
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-23",
                "sol": 402,
                "total_photos": 155
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-24",
                "sol": 403,
                "total_photos": 546
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-25",
                "sol": 404,
                "total_photos": 429
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-27",
                "sol": 406,
                "total_photos": 319
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-28",
                "sol": 407,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-29",
                "sol": 408,
                "total_photos": 128
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-09-30",
                "sol": 409,
                "total_photos": 397
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-01",
                "sol": 410,
                "total_photos": 299
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-10-02",
                "sol": 411,
                "total_photos": 77
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-03",
                "sol": 412,
                "total_photos": 189
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-04",
                "sol": 413,
                "total_photos": 241
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-10-05",
                "sol": 414,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-06",
                "sol": 415,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2013-10-07",
                "sol": 416,
                "total_photos": 89
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-08",
                "sol": 417,
                "total_photos": 270
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-10-09",
                "sol": 418,
                "total_photos": 31
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-10",
                "sol": 419,
                "total_photos": 228
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-10-11",
                "sol": 420,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-12",
                "sol": 421,
                "total_photos": 247
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-13",
                "sol": 422,
                "total_photos": 140
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-10-14",
                "sol": 423,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-15",
                "sol": 424,
                "total_photos": 475
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-16",
                "sol": 425,
                "total_photos": 234
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-17",
                "sol": 426,
                "total_photos": 254
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-18",
                "sol": 427,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-20",
                "sol": 429,
                "total_photos": 299
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-10-21",
                "sol": 430,
                "total_photos": 24
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-22",
                "sol": 431,
                "total_photos": 549
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-23",
                "sol": 432,
                "total_photos": 116
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-24",
                "sol": 433,
                "total_photos": 345
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-10-25",
                "sol": 434,
                "total_photos": 108
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-26",
                "sol": 435,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-27",
                "sol": 436,
                "total_photos": 449
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-29",
                "sol": 437,
                "total_photos": 661
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-30",
                "sol": 438,
                "total_photos": 362
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-10-31",
                "sol": 439,
                "total_photos": 373
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-01",
                "sol": 440,
                "total_photos": 395
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-02",
                "sol": 441,
                "total_photos": 283
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-03",
                "sol": 442,
                "total_photos": 292
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-04",
                "sol": 443,
                "total_photos": 84
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-14",
                "sol": 453,
                "total_photos": 337
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-15",
                "sol": 454,
                "total_photos": 306
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-16",
                "sol": 455,
                "total_photos": 484
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-17",
                "sol": 456,
                "total_photos": 87
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2013-11-23",
                "sol": 462,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-24",
                "sol": 463,
                "total_photos": 43
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-25",
                "sol": 464,
                "total_photos": 18
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-26",
                "sol": 465,
                "total_photos": 189
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-11-27",
                "sol": 466,
                "total_photos": 18
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-28",
                "sol": 467,
                "total_photos": 315
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-11-29",
                "sol": 468,
                "total_photos": 567
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-11-30",
                "sol": 469,
                "total_photos": 85
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-01",
                "sol": 470,
                "total_photos": 398
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-02",
                "sol": 471,
                "total_photos": 40
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-03",
                "sol": 472,
                "total_photos": 270
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-12-05",
                "sol": 473,
                "total_photos": 24
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-06",
                "sol": 474,
                "total_photos": 247
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-12-07",
                "sol": 475,
                "total_photos": 162
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2013-12-08",
                "sol": 476,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-09",
                "sol": 477,
                "total_photos": 121
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-10",
                "sol": 478,
                "total_photos": 64
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-17",
                "sol": 485,
                "total_photos": 184
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-18",
                "sol": 486,
                "total_photos": 288
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-19",
                "sol": 487,
                "total_photos": 358
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-20",
                "sol": 488,
                "total_photos": 233
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-21",
                "sol": 489,
                "total_photos": 222
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-22",
                "sol": 490,
                "total_photos": 254
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-23",
                "sol": 491,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2013-12-24",
                "sol": 492,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-25",
                "sol": 493,
                "total_photos": 112
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2013-12-26",
                "sol": 494,
                "total_photos": 520
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-03",
                "sol": 502,
                "total_photos": 147
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-04",
                "sol": 503,
                "total_photos": 132
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-05",
                "sol": 504,
                "total_photos": 268
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-06",
                "sol": 505,
                "total_photos": 74
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-07",
                "sol": 506,
                "total_photos": 254
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-08",
                "sol": 507,
                "total_photos": 98
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-09",
                "sol": 508,
                "total_photos": 336
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-10",
                "sol": 509,
                "total_photos": 216
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-12",
                "sol": 510,
                "total_photos": 129
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-13",
                "sol": 511,
                "total_photos": 290
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-14",
                "sol": 512,
                "total_photos": 169
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-15",
                "sol": 513,
                "total_photos": 308
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-16",
                "sol": 514,
                "total_photos": 154
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-17",
                "sol": 515,
                "total_photos": 272
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-18",
                "sol": 516,
                "total_photos": 86
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-19",
                "sol": 517,
                "total_photos": 63
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-20",
                "sol": 518,
                "total_photos": 196
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-21",
                "sol": 519,
                "total_photos": 222
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-22",
                "sol": 520,
                "total_photos": 280
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-23",
                "sol": 521,
                "total_photos": 246
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-24",
                "sol": 522,
                "total_photos": 136
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-25",
                "sol": 523,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-26",
                "sol": 524,
                "total_photos": 284
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-27",
                "sol": 525,
                "total_photos": 21
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-28",
                "sol": 526,
                "total_photos": 292
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-29",
                "sol": 527,
                "total_photos": 410
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-30",
                "sol": 528,
                "total_photos": 339
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-01-31",
                "sol": 529,
                "total_photos": 371
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-01",
                "sol": 530,
                "total_photos": 372
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-02",
                "sol": 531,
                "total_photos": 244
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-03",
                "sol": 532,
                "total_photos": 151
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-04",
                "sol": 533,
                "total_photos": 230
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-02-05",
                "sol": 534,
                "total_photos": 26
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-06",
                "sol": 535,
                "total_photos": 135
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-08",
                "sol": 537,
                "total_photos": 150
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-09",
                "sol": 538,
                "total_photos": 377
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-10",
                "sol": 539,
                "total_photos": 42
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-11",
                "sol": 540,
                "total_photos": 1108
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-12",
                "sol": 541,
                "total_photos": 286
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-13",
                "sol": 542,
                "total_photos": 431
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-14",
                "sol": 543,
                "total_photos": 196
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-15",
                "sol": 544,
                "total_photos": 195
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-16",
                "sol": 545,
                "total_photos": 115
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-18",
                "sol": 546,
                "total_photos": 232
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-19",
                "sol": 547,
                "total_photos": 305
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-20",
                "sol": 548,
                "total_photos": 322
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-21",
                "sol": 549,
                "total_photos": 292
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-22",
                "sol": 550,
                "total_photos": 481
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-23",
                "sol": 551,
                "total_photos": 563
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-24",
                "sol": 552,
                "total_photos": 261
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-25",
                "sol": 553,
                "total_photos": 314
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-26",
                "sol": 554,
                "total_photos": 389
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-02-27",
                "sol": 555,
                "total_photos": 248
            },
            {
                "cameras": [
                    "MARDI"
                ],
                "earth_date": "2014-02-28",
                "sol": 556,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-02",
                "sol": 558,
                "total_photos": 86
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-03",
                "sol": 559,
                "total_photos": 212
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-04",
                "sol": 560,
                "total_photos": 248
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-05",
                "sol": 561,
                "total_photos": 174
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-06",
                "sol": 562,
                "total_photos": 167
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-07",
                "sol": 563,
                "total_photos": 474
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-08",
                "sol": 564,
                "total_photos": 280
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-09",
                "sol": 565,
                "total_photos": 240
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-10",
                "sol": 566,
                "total_photos": 220
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST"
                ],
                "earth_date": "2014-03-11",
                "sol": 567,
                "total_photos": 155
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-12",
                "sol": 568,
                "total_photos": 322
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-13",
                "sol": 569,
                "total_photos": 294
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-15",
                "sol": 571,
                "total_photos": 682
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-16",
                "sol": 572,
                "total_photos": 225
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-03-17",
                "sol": 573,
                "total_photos": 17
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-18",
                "sol": 574,
                "total_photos": 304
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-19",
                "sol": 575,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-20",
                "sol": 576,
                "total_photos": 130
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-22",
                "sol": 578,
                "total_photos": 166
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-23",
                "sol": 579,
                "total_photos": 127
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-03-24",
                "sol": 580,
                "total_photos": 1255
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-25",
                "sol": 581,
                "total_photos": 210
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-26",
                "sol": 582,
                "total_photos": 374
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-28",
                "sol": 583,
                "total_photos": 395
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-29",
                "sol": 584,
                "total_photos": 448
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-30",
                "sol": 585,
                "total_photos": 653
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-03-31",
                "sol": 586,
                "total_photos": 215
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-01",
                "sol": 587,
                "total_photos": 287
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-02",
                "sol": 588,
                "total_photos": 460
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-03",
                "sol": 589,
                "total_photos": 155
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-04",
                "sol": 590,
                "total_photos": 777
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-05",
                "sol": 591,
                "total_photos": 174
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-04-06",
                "sol": 592,
                "total_photos": 308
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-07",
                "sol": 593,
                "total_photos": 374
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-08",
                "sol": 594,
                "total_photos": 141
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-09",
                "sol": 595,
                "total_photos": 724
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-11",
                "sol": 597,
                "total_photos": 213
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-15",
                "sol": 601,
                "total_photos": 446
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-04-16",
                "sol": 602,
                "total_photos": 151
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-17",
                "sol": 603,
                "total_photos": 406
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-04-18",
                "sol": 604,
                "total_photos": 172
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-19",
                "sol": 605,
                "total_photos": 118
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-20",
                "sol": 606,
                "total_photos": 408
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-21",
                "sol": 607,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-22",
                "sol": 608,
                "total_photos": 156
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-23",
                "sol": 609,
                "total_photos": 167
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-24",
                "sol": 610,
                "total_photos": 519
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-25",
                "sol": 611,
                "total_photos": 147
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-26",
                "sol": 612,
                "total_photos": 131
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-27",
                "sol": 613,
                "total_photos": 211
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-28",
                "sol": 614,
                "total_photos": 155
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-04-29",
                "sol": 615,
                "total_photos": 248
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-01",
                "sol": 617,
                "total_photos": 760
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-02",
                "sol": 618,
                "total_photos": 578
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-04",
                "sol": 619,
                "total_photos": 338
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-05",
                "sol": 620,
                "total_photos": 728
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-06",
                "sol": 621,
                "total_photos": 161
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-07",
                "sol": 622,
                "total_photos": 24
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-08",
                "sol": 623,
                "total_photos": 18
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-09",
                "sol": 624,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-11",
                "sol": 626,
                "total_photos": 129
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-12",
                "sol": 627,
                "total_photos": 224
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-05-13",
                "sol": 628,
                "total_photos": 193
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2014-05-14",
                "sol": 629,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-15",
                "sol": 630,
                "total_photos": 144
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-16",
                "sol": 631,
                "total_photos": 749
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-05-17",
                "sol": 632,
                "total_photos": 164
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-18",
                "sol": 633,
                "total_photos": 108
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-19",
                "sol": 634,
                "total_photos": 254
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-20",
                "sol": 635,
                "total_photos": 379
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-21",
                "sol": 636,
                "total_photos": 144
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-22",
                "sol": 637,
                "total_photos": 238
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-23",
                "sol": 638,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-24",
                "sol": 639,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-25",
                "sol": 640,
                "total_photos": 367
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-26",
                "sol": 641,
                "total_photos": 235
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-05-27",
                "sol": 642,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-28",
                "sol": 643,
                "total_photos": 238
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-29",
                "sol": 644,
                "total_photos": 126
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-30",
                "sol": 645,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-05-31",
                "sol": 646,
                "total_photos": 340
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-01",
                "sol": 647,
                "total_photos": 373
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-02",
                "sol": 648,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-03",
                "sol": 649,
                "total_photos": 152
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-04",
                "sol": 650,
                "total_photos": 108
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-05",
                "sol": 651,
                "total_photos": 723
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-06-06",
                "sol": 652,
                "total_photos": 25
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-07",
                "sol": 653,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-08",
                "sol": 654,
                "total_photos": 79
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-10",
                "sol": 655,
                "total_photos": 205
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-11",
                "sol": 656,
                "total_photos": 303
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-12",
                "sol": 657,
                "total_photos": 204
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-13",
                "sol": 658,
                "total_photos": 263
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-14",
                "sol": 659,
                "total_photos": 329
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-15",
                "sol": 660,
                "total_photos": 118
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-16",
                "sol": 661,
                "total_photos": 321
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-17",
                "sol": 662,
                "total_photos": 307
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-18",
                "sol": 663,
                "total_photos": 477
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-19",
                "sol": 664,
                "total_photos": 259
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-20",
                "sol": 665,
                "total_photos": 477
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-06-21",
                "sol": 666,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-22",
                "sol": 667,
                "total_photos": 112
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-23",
                "sol": 668,
                "total_photos": 346
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-24",
                "sol": 669,
                "total_photos": 240
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-25",
                "sol": 670,
                "total_photos": 438
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-26",
                "sol": 671,
                "total_photos": 196
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-27",
                "sol": 672,
                "total_photos": 201
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-28",
                "sol": 673,
                "total_photos": 334
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-06-29",
                "sol": 674,
                "total_photos": 151
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-06-30",
                "sol": 675,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-01",
                "sol": 676,
                "total_photos": 246
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-02",
                "sol": 677,
                "total_photos": 176
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-03",
                "sol": 678,
                "total_photos": 318
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-04",
                "sol": 679,
                "total_photos": 284
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-08",
                "sol": 683,
                "total_photos": 465
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-07-09",
                "sol": 684,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-10",
                "sol": 685,
                "total_photos": 330
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-07-11",
                "sol": 686,
                "total_photos": 108
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-12",
                "sol": 687,
                "total_photos": 182
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-13",
                "sol": 688,
                "total_photos": 223
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-14",
                "sol": 689,
                "total_photos": 128
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-15",
                "sol": 690,
                "total_photos": 181
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-16",
                "sol": 691,
                "total_photos": 557
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-18",
                "sol": 692,
                "total_photos": 222
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-20",
                "sol": 694,
                "total_photos": 138
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-21",
                "sol": 695,
                "total_photos": 172
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-22",
                "sol": 696,
                "total_photos": 686
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2014-07-25",
                "sol": 699,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-26",
                "sol": 700,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-27",
                "sol": 701,
                "total_photos": 85
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-28",
                "sol": 702,
                "total_photos": 126
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-29",
                "sol": 703,
                "total_photos": 885
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-30",
                "sol": 704,
                "total_photos": 217
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-07-31",
                "sol": 705,
                "total_photos": 226
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-01",
                "sol": 706,
                "total_photos": 255
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-02",
                "sol": 707,
                "total_photos": 325
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-03",
                "sol": 708,
                "total_photos": 112
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-04",
                "sol": 709,
                "total_photos": 148
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-05",
                "sol": 710,
                "total_photos": 466
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-06",
                "sol": 711,
                "total_photos": 154
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-08-07",
                "sol": 712,
                "total_photos": 226
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-08",
                "sol": 713,
                "total_photos": 413
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-09",
                "sol": 714,
                "total_photos": 281
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-12",
                "sol": 717,
                "total_photos": 427
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-13",
                "sol": 718,
                "total_photos": 68
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-14",
                "sol": 719,
                "total_photos": 124
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-15",
                "sol": 720,
                "total_photos": 288
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-08-16",
                "sol": 721,
                "total_photos": 192
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-17",
                "sol": 722,
                "total_photos": 153
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-08-18",
                "sol": 723,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-19",
                "sol": 724,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-20",
                "sol": 725,
                "total_photos": 278
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-21",
                "sol": 726,
                "total_photos": 403
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-08-22",
                "sol": 727,
                "total_photos": 120
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-08-24",
                "sol": 728,
                "total_photos": 170
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-25",
                "sol": 729,
                "total_photos": 232
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-26",
                "sol": 730,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-27",
                "sol": 731,
                "total_photos": 224
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-28",
                "sol": 732,
                "total_photos": 299
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-29",
                "sol": 733,
                "total_photos": 440
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-08-30",
                "sol": 734,
                "total_photos": 29
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-08-31",
                "sol": 735,
                "total_photos": 398
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-03",
                "sol": 738,
                "total_photos": 214
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-04",
                "sol": 739,
                "total_photos": 814
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-05",
                "sol": 740,
                "total_photos": 298
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-06",
                "sol": 741,
                "total_photos": 549
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2014-09-07",
                "sol": 742,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-08",
                "sol": 743,
                "total_photos": 448
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-09",
                "sol": 744,
                "total_photos": 656
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-09-10",
                "sol": 745,
                "total_photos": 182
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-11",
                "sol": 746,
                "total_photos": 599
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-12",
                "sol": 747,
                "total_photos": 840
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-13",
                "sol": 748,
                "total_photos": 612
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-16",
                "sol": 751,
                "total_photos": 704
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-09-17",
                "sol": 752,
                "total_photos": 472
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-18",
                "sol": 753,
                "total_photos": 506
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-19",
                "sol": 754,
                "total_photos": 49
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-20",
                "sol": 755,
                "total_photos": 129
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-21",
                "sol": 756,
                "total_photos": 122
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-23",
                "sol": 758,
                "total_photos": 325
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-24",
                "sol": 759,
                "total_photos": 205
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-09-25",
                "sol": 760,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-09-26",
                "sol": 761,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-09-27",
                "sol": 762,
                "total_photos": 121
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-09-28",
                "sol": 763,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-01",
                "sol": 765,
                "total_photos": 109
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-02",
                "sol": 766,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-03",
                "sol": 767,
                "total_photos": 137
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2014-10-04",
                "sol": 768,
                "total_photos": 114
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2014-10-06",
                "sol": 770,
                "total_photos": 1
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-07",
                "sol": 771,
                "total_photos": 149
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-08",
                "sol": 772,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-09",
                "sol": 773,
                "total_photos": 97
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2014-10-10",
                "sol": 774,
                "total_photos": 18
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2014-10-11",
                "sol": 775,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-12",
                "sol": 776,
                "total_photos": 155
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-13",
                "sol": 777,
                "total_photos": 121
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-14",
                "sol": 778,
                "total_photos": 351
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-15",
                "sol": 779,
                "total_photos": 86
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-16",
                "sol": 780,
                "total_photos": 732
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-17",
                "sol": 781,
                "total_photos": 234
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-18",
                "sol": 782,
                "total_photos": 207
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-19",
                "sol": 783,
                "total_photos": 182
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-10-20",
                "sol": 784,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-21",
                "sol": 785,
                "total_photos": 248
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-10-22",
                "sol": 786,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-23",
                "sol": 787,
                "total_photos": 497
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-24",
                "sol": 788,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-25",
                "sol": 789,
                "total_photos": 227
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-26",
                "sol": 790,
                "total_photos": 222
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-27",
                "sol": 791,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-28",
                "sol": 792,
                "total_photos": 621
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2014-10-29",
                "sol": 793,
                "total_photos": 168
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-30",
                "sol": 794,
                "total_photos": 820
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-10-31",
                "sol": 795,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-01",
                "sol": 796,
                "total_photos": 301
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-02",
                "sol": 797,
                "total_photos": 945
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-04",
                "sol": 799,
                "total_photos": 188
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2014-11-05",
                "sol": 800,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-07",
                "sol": 801,
                "total_photos": 149
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-08",
                "sol": 802,
                "total_photos": 254
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-09",
                "sol": 803,
                "total_photos": 441
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-10",
                "sol": 804,
                "total_photos": 18
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-11",
                "sol": 805,
                "total_photos": 166
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-12",
                "sol": 806,
                "total_photos": 236
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-13",
                "sol": 807,
                "total_photos": 251
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-14",
                "sol": 808,
                "total_photos": 223
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-15",
                "sol": 809,
                "total_photos": 193
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-16",
                "sol": 810,
                "total_photos": 143
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-11-17",
                "sol": 811,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-18",
                "sol": 812,
                "total_photos": 250
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-19",
                "sol": 813,
                "total_photos": 247
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-20",
                "sol": 814,
                "total_photos": 329
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-21",
                "sol": 815,
                "total_photos": 210
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-22",
                "sol": 816,
                "total_photos": 160
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-23",
                "sol": 817,
                "total_photos": 227
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2014-11-24",
                "sol": 818,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-25",
                "sol": 819,
                "total_photos": 238
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-11-26",
                "sol": 820,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-27",
                "sol": 821,
                "total_photos": 113
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-11-28",
                "sol": 822,
                "total_photos": 67
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-29",
                "sol": 823,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-11-30",
                "sol": 824,
                "total_photos": 93
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2014-12-01",
                "sol": 825,
                "total_photos": 24
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-02",
                "sol": 826,
                "total_photos": 285
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-03",
                "sol": 827,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-04",
                "sol": 828,
                "total_photos": 732
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-12-05",
                "sol": 829,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-06",
                "sol": 830,
                "total_photos": 130
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-07",
                "sol": 831,
                "total_photos": 68
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-08",
                "sol": 832,
                "total_photos": 203
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-09",
                "sol": 833,
                "total_photos": 162
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-10",
                "sol": 834,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-11",
                "sol": 835,
                "total_photos": 219
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-12",
                "sol": 836,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-14",
                "sol": 837,
                "total_photos": 447
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-12-15",
                "sol": 838,
                "total_photos": 92
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2014-12-16",
                "sol": 839,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-17",
                "sol": 840,
                "total_photos": 587
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-19",
                "sol": 842,
                "total_photos": 209
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-20",
                "sol": 843,
                "total_photos": 352
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-21",
                "sol": 844,
                "total_photos": 323
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-22",
                "sol": 845,
                "total_photos": 71
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-30",
                "sol": 853,
                "total_photos": 140
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2014-12-31",
                "sol": 854,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-01",
                "sol": 855,
                "total_photos": 228
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-06",
                "sol": 860,
                "total_photos": 205
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-01-07",
                "sol": 861,
                "total_photos": 133
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-08",
                "sol": 862,
                "total_photos": 317
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-09",
                "sol": 863,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-10",
                "sol": 864,
                "total_photos": 296
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-01-11",
                "sol": 865,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-12",
                "sol": 866,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-13",
                "sol": 867,
                "total_photos": 149
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-01-14",
                "sol": 868,
                "total_photos": 202
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-15",
                "sol": 869,
                "total_photos": 206
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-17",
                "sol": 871,
                "total_photos": 84
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-18",
                "sol": 872,
                "total_photos": 230
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-27",
                "sol": 880,
                "total_photos": 225
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-28",
                "sol": 881,
                "total_photos": 118
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-29",
                "sol": 882,
                "total_photos": 194
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-01-30",
                "sol": 883,
                "total_photos": 292
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-01-31",
                "sol": 884,
                "total_photos": 52
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-02-01",
                "sol": 885,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-02",
                "sol": 886,
                "total_photos": 192
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-03",
                "sol": 887,
                "total_photos": 21
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-04",
                "sol": 888,
                "total_photos": 71
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-05",
                "sol": 889,
                "total_photos": 183
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-06",
                "sol": 890,
                "total_photos": 168
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-07",
                "sol": 891,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-08",
                "sol": 892,
                "total_photos": 127
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-09",
                "sol": 893,
                "total_photos": 91
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-10",
                "sol": 894,
                "total_photos": 146
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-11",
                "sol": 895,
                "total_photos": 193
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-12",
                "sol": 896,
                "total_photos": 265
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-13",
                "sol": 897,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-02-14",
                "sol": 898,
                "total_photos": 260
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-02-15",
                "sol": 899,
                "total_photos": 137
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-02-16",
                "sol": 900,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-17",
                "sol": 901,
                "total_photos": 396
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-02-18",
                "sol": 902,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-19",
                "sol": 903,
                "total_photos": 200
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-20",
                "sol": 904,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-21",
                "sol": 905,
                "total_photos": 151
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-22",
                "sol": 906,
                "total_photos": 120
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-23",
                "sol": 907,
                "total_photos": 113
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-24",
                "sol": 908,
                "total_photos": 235
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-25",
                "sol": 909,
                "total_photos": 162
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-27",
                "sol": 910,
                "total_photos": 277
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-02-28",
                "sol": 911,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-03",
                "sol": 914,
                "total_photos": 246
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-04",
                "sol": 915,
                "total_photos": 187
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-05",
                "sol": 916,
                "total_photos": 235
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-06",
                "sol": 917,
                "total_photos": 308
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-07",
                "sol": 918,
                "total_photos": 196
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-03-08",
                "sol": 919,
                "total_photos": 264
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-03-09",
                "sol": 920,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-10",
                "sol": 921,
                "total_photos": 364
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-11",
                "sol": 922,
                "total_photos": 82
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-12",
                "sol": 923,
                "total_photos": 107
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-13",
                "sol": 924,
                "total_photos": 205
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-03-14",
                "sol": 925,
                "total_photos": 177
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-15",
                "sol": 926,
                "total_photos": 170
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-16",
                "sol": 927,
                "total_photos": 42
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-17",
                "sol": 928,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-18",
                "sol": 929,
                "total_photos": 295
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-19",
                "sol": 930,
                "total_photos": 337
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-20",
                "sol": 931,
                "total_photos": 137
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2015-03-21",
                "sol": 932,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-24",
                "sol": 935,
                "total_photos": 403
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-25",
                "sol": 936,
                "total_photos": 141
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-26",
                "sol": 937,
                "total_photos": 228
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-27",
                "sol": 938,
                "total_photos": 445
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-28",
                "sol": 939,
                "total_photos": 321
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-29",
                "sol": 940,
                "total_photos": 238
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-30",
                "sol": 941,
                "total_photos": 104
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-03-31",
                "sol": 942,
                "total_photos": 229
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-01",
                "sol": 943,
                "total_photos": 275
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-02",
                "sol": 944,
                "total_photos": 234
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-03",
                "sol": 945,
                "total_photos": 81
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-04-05",
                "sol": 946,
                "total_photos": 469
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-06",
                "sol": 947,
                "total_photos": 150
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-07",
                "sol": 948,
                "total_photos": 419
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-08",
                "sol": 949,
                "total_photos": 214
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-09",
                "sol": 950,
                "total_photos": 385
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-10",
                "sol": 951,
                "total_photos": 281
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-11",
                "sol": 952,
                "total_photos": 831
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-04-12",
                "sol": 953,
                "total_photos": 412
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-13",
                "sol": 954,
                "total_photos": 159
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-14",
                "sol": 955,
                "total_photos": 235
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-15",
                "sol": 956,
                "total_photos": 229
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-16",
                "sol": 957,
                "total_photos": 453
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-17",
                "sol": 958,
                "total_photos": 350
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-04-18",
                "sol": 959,
                "total_photos": 569
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-19",
                "sol": 960,
                "total_photos": 517
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-20",
                "sol": 961,
                "total_photos": 72
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-21",
                "sol": 962,
                "total_photos": 364
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-22",
                "sol": 963,
                "total_photos": 170
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-23",
                "sol": 964,
                "total_photos": 510
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-04-24",
                "sol": 965,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-25",
                "sol": 966,
                "total_photos": 155
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-26",
                "sol": 967,
                "total_photos": 258
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-27",
                "sol": 968,
                "total_photos": 65
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-04-28",
                "sol": 969,
                "total_photos": 688
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-04-29",
                "sol": 970,
                "total_photos": 290
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-04-30",
                "sol": 971,
                "total_photos": 193
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-01",
                "sol": 972,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-02",
                "sol": 973,
                "total_photos": 112
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-03",
                "sol": 974,
                "total_photos": 172
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-04",
                "sol": 975,
                "total_photos": 138
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-05",
                "sol": 976,
                "total_photos": 611
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-06",
                "sol": 977,
                "total_photos": 89
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-07",
                "sol": 978,
                "total_photos": 309
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-08",
                "sol": 979,
                "total_photos": 166
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-09",
                "sol": 980,
                "total_photos": 106
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-10",
                "sol": 981,
                "total_photos": 198
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-05-11",
                "sol": 982,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-13",
                "sol": 983,
                "total_photos": 199
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-14",
                "sol": 984,
                "total_photos": 260
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-15",
                "sol": 985,
                "total_photos": 180
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-16",
                "sol": 986,
                "total_photos": 327
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-17",
                "sol": 987,
                "total_photos": 321
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-05-18",
                "sol": 988,
                "total_photos": 25
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-19",
                "sol": 989,
                "total_photos": 172
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-20",
                "sol": 990,
                "total_photos": 328
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-21",
                "sol": 991,
                "total_photos": 384
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-22",
                "sol": 992,
                "total_photos": 456
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-23",
                "sol": 993,
                "total_photos": 866
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-05-24",
                "sol": 994,
                "total_photos": 180
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-25",
                "sol": 995,
                "total_photos": 431
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-05-26",
                "sol": 996,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-27",
                "sol": 997,
                "total_photos": 249
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-28",
                "sol": 998,
                "total_photos": 467
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-29",
                "sol": 999,
                "total_photos": 280
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-30",
                "sol": 1000,
                "total_photos": 856
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-05-31",
                "sol": 1001,
                "total_photos": 286
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-06-01",
                "sol": 1002,
                "total_photos": 186
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-06-02",
                "sol": 1003,
                "total_photos": 392
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-06-03",
                "sol": 1004,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-06-27",
                "sol": 1027,
                "total_photos": 72
            },
            {
                "cameras": [
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-06-28",
                "sol": 1028,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-06-29",
                "sol": 1029,
                "total_photos": 106
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-06-30",
                "sol": 1030,
                "total_photos": 208
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-07-01",
                "sol": 1031,
                "total_photos": 244
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-02",
                "sol": 1032,
                "total_photos": 678
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-03",
                "sol": 1033,
                "total_photos": 471
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-07-04",
                "sol": 1034,
                "total_photos": 240
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-05",
                "sol": 1035,
                "total_photos": 248
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-07-06",
                "sol": 1036,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-07",
                "sol": 1037,
                "total_photos": 273
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-08",
                "sol": 1038,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-09",
                "sol": 1039,
                "total_photos": 225
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-10",
                "sol": 1040,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-11",
                "sol": 1041,
                "total_photos": 220
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-12",
                "sol": 1042,
                "total_photos": 168
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-13",
                "sol": 1043,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-14",
                "sol": 1044,
                "total_photos": 529
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-15",
                "sol": 1045,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-16",
                "sol": 1046,
                "total_photos": 150
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-17",
                "sol": 1047,
                "total_photos": 87
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-18",
                "sol": 1048,
                "total_photos": 142
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-19",
                "sol": 1049,
                "total_photos": 321
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-20",
                "sol": 1050,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-21",
                "sol": 1051,
                "total_photos": 217
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-22",
                "sol": 1052,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-23",
                "sol": 1053,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-24",
                "sol": 1054,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-26",
                "sol": 1055,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-27",
                "sol": 1056,
                "total_photos": 122
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-28",
                "sol": 1057,
                "total_photos": 257
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2015-07-29",
                "sol": 1058,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-30",
                "sol": 1059,
                "total_photos": 175
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-07-31",
                "sol": 1060,
                "total_photos": 161
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-01",
                "sol": 1061,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-08-02",
                "sol": 1062,
                "total_photos": 117
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-03",
                "sol": 1063,
                "total_photos": 329
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-04",
                "sol": 1064,
                "total_photos": 213
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-05",
                "sol": 1065,
                "total_photos": 521
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-06",
                "sol": 1066,
                "total_photos": 224
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-07",
                "sol": 1067,
                "total_photos": 165
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-11",
                "sol": 1071,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-12",
                "sol": 1072,
                "total_photos": 231
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-13",
                "sol": 1073,
                "total_photos": 569
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-14",
                "sol": 1074,
                "total_photos": 284
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-15",
                "sol": 1075,
                "total_photos": 18
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-16",
                "sol": 1076,
                "total_photos": 107
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-17",
                "sol": 1077,
                "total_photos": 393
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-18",
                "sol": 1078,
                "total_photos": 164
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-19",
                "sol": 1079,
                "total_photos": 78
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-20",
                "sol": 1080,
                "total_photos": 281
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-21",
                "sol": 1081,
                "total_photos": 452
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-22",
                "sol": 1082,
                "total_photos": 935
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-23",
                "sol": 1083,
                "total_photos": 153
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-08-24",
                "sol": 1084,
                "total_photos": 27
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-25",
                "sol": 1085,
                "total_photos": 335
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-26",
                "sol": 1086,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-27",
                "sol": 1087,
                "total_photos": 831
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-28",
                "sol": 1088,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-29",
                "sol": 1089,
                "total_photos": 218
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-30",
                "sol": 1090,
                "total_photos": 277
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-08-31",
                "sol": 1091,
                "total_photos": 154
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-02",
                "sol": 1092,
                "total_photos": 558
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-03",
                "sol": 1093,
                "total_photos": 199
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-04",
                "sol": 1094,
                "total_photos": 249
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-09-05",
                "sol": 1095,
                "total_photos": 176
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-09-06",
                "sol": 1096,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-07",
                "sol": 1097,
                "total_photos": 170
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-08",
                "sol": 1098,
                "total_photos": 149
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-09",
                "sol": 1099,
                "total_photos": 313
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-10",
                "sol": 1100,
                "total_photos": 1041
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-09-11",
                "sol": 1101,
                "total_photos": 311
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-12",
                "sol": 1102,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-09-13",
                "sol": 1103,
                "total_photos": 75
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-14",
                "sol": 1104,
                "total_photos": 387
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-15",
                "sol": 1105,
                "total_photos": 318
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-16",
                "sol": 1106,
                "total_photos": 412
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-17",
                "sol": 1107,
                "total_photos": 219
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-18",
                "sol": 1108,
                "total_photos": 121
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-19",
                "sol": 1109,
                "total_photos": 162
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-20",
                "sol": 1110,
                "total_photos": 394
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-21",
                "sol": 1111,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-22",
                "sol": 1112,
                "total_photos": 403
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-23",
                "sol": 1113,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-24",
                "sol": 1114,
                "total_photos": 149
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-25",
                "sol": 1115,
                "total_photos": 109
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-26",
                "sol": 1116,
                "total_photos": 78
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-09-27",
                "sol": 1117,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-28",
                "sol": 1118,
                "total_photos": 137
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-29",
                "sol": 1119,
                "total_photos": 159
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-09-30",
                "sol": 1120,
                "total_photos": 162
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-10-01",
                "sol": 1121,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-02",
                "sol": 1122,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-03",
                "sol": 1123,
                "total_photos": 215
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-04",
                "sol": 1124,
                "total_photos": 102
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-10-05",
                "sol": 1125,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-06",
                "sol": 1126,
                "total_photos": 261
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-07",
                "sol": 1127,
                "total_photos": 212
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-09",
                "sol": 1128,
                "total_photos": 137
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-10-10",
                "sol": 1129,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-11",
                "sol": 1130,
                "total_photos": 107
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2015-10-12",
                "sol": 1131,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-13",
                "sol": 1132,
                "total_photos": 113
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-14",
                "sol": 1133,
                "total_photos": 259
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-15",
                "sol": 1134,
                "total_photos": 86
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-17",
                "sol": 1136,
                "total_photos": 135
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-18",
                "sol": 1137,
                "total_photos": 150
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-19",
                "sol": 1138,
                "total_photos": 206
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-20",
                "sol": 1139,
                "total_photos": 126
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-21",
                "sol": 1140,
                "total_photos": 108
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-22",
                "sol": 1141,
                "total_photos": 68
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-23",
                "sol": 1142,
                "total_photos": 278
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-24",
                "sol": 1143,
                "total_photos": 102
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-25",
                "sol": 1144,
                "total_photos": 577
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-10-27",
                "sol": 1146,
                "total_photos": 347
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-10-28",
                "sol": 1147,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-29",
                "sol": 1148,
                "total_photos": 328
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-30",
                "sol": 1149,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-10-31",
                "sol": 1150,
                "total_photos": 349
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-01",
                "sol": 1151,
                "total_photos": 184
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-11-02",
                "sol": 1152,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-03",
                "sol": 1153,
                "total_photos": 197
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-04",
                "sol": 1154,
                "total_photos": 185
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-05",
                "sol": 1155,
                "total_photos": 347
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-11-06",
                "sol": 1156,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-07",
                "sol": 1157,
                "total_photos": 334
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-08",
                "sol": 1158,
                "total_photos": 240
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-09",
                "sol": 1159,
                "total_photos": 23
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-10",
                "sol": 1160,
                "total_photos": 598
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-11-11",
                "sol": 1161,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-12",
                "sol": 1162,
                "total_photos": 408
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-13",
                "sol": 1163,
                "total_photos": 454
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-17",
                "sol": 1166,
                "total_photos": 245
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-18",
                "sol": 1167,
                "total_photos": 321
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-19",
                "sol": 1168,
                "total_photos": 202
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-20",
                "sol": 1169,
                "total_photos": 95
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-11-21",
                "sol": 1170,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-22",
                "sol": 1171,
                "total_photos": 106
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-23",
                "sol": 1172,
                "total_photos": 148
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-24",
                "sol": 1173,
                "total_photos": 382
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-25",
                "sol": 1174,
                "total_photos": 199
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-11-26",
                "sol": 1175,
                "total_photos": 23
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-27",
                "sol": 1176,
                "total_photos": 156
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-11-28",
                "sol": 1177,
                "total_photos": 36
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-29",
                "sol": 1178,
                "total_photos": 63
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-11-30",
                "sol": 1179,
                "total_photos": 148
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-02",
                "sol": 1181,
                "total_photos": 699
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-03",
                "sol": 1182,
                "total_photos": 483
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-04",
                "sol": 1183,
                "total_photos": 313
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-05",
                "sol": 1184,
                "total_photos": 425
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-06",
                "sol": 1185,
                "total_photos": 283
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2015-12-07",
                "sol": 1186,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-08",
                "sol": 1187,
                "total_photos": 319
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-09",
                "sol": 1188,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-10",
                "sol": 1189,
                "total_photos": 195
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-11",
                "sol": 1190,
                "total_photos": 275
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-12",
                "sol": 1191,
                "total_photos": 154
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-13",
                "sol": 1192,
                "total_photos": 249
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-14",
                "sol": 1193,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-15",
                "sol": 1194,
                "total_photos": 316
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-12-16",
                "sol": 1195,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-17",
                "sol": 1196,
                "total_photos": 253
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2015-12-18",
                "sol": 1197,
                "total_photos": 589
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-19",
                "sol": 1198,
                "total_photos": 136
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-20",
                "sol": 1199,
                "total_photos": 61
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-21",
                "sol": 1200,
                "total_photos": 219
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-23",
                "sol": 1201,
                "total_photos": 235
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-24",
                "sol": 1202,
                "total_photos": 384
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-25",
                "sol": 1203,
                "total_photos": 124
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-26",
                "sol": 1204,
                "total_photos": 184
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-12-27",
                "sol": 1205,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-28",
                "sol": 1206,
                "total_photos": 128
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2015-12-29",
                "sol": 1207,
                "total_photos": 48
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-12-30",
                "sol": 1208,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2015-12-31",
                "sol": 1209,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-01",
                "sol": 1210,
                "total_photos": 163
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-02",
                "sol": 1211,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-01-03",
                "sol": 1212,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-01-04",
                "sol": 1213,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-01-05",
                "sol": 1214,
                "total_photos": 142
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-06",
                "sol": 1215,
                "total_photos": 262
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-07",
                "sol": 1216,
                "total_photos": 229
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-01-08",
                "sol": 1217,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-10",
                "sol": 1219,
                "total_photos": 63
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-01-11",
                "sol": 1220,
                "total_photos": 9
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-12",
                "sol": 1221,
                "total_photos": 522
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-13",
                "sol": 1222,
                "total_photos": 124
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-14",
                "sol": 1223,
                "total_photos": 130
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-15",
                "sol": 1224,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-01-16",
                "sol": 1225,
                "total_photos": 53
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-17",
                "sol": 1226,
                "total_photos": 180
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-18",
                "sol": 1227,
                "total_photos": 41
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-19",
                "sol": 1228,
                "total_photos": 346
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-20",
                "sol": 1229,
                "total_photos": 271
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-01-21",
                "sol": 1230,
                "total_photos": 132
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-22",
                "sol": 1231,
                "total_photos": 101
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-01-23",
                "sol": 1232,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-24",
                "sol": 1233,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-25",
                "sol": 1234,
                "total_photos": 254
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-26",
                "sol": 1235,
                "total_photos": 111
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-27",
                "sol": 1236,
                "total_photos": 67
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-29",
                "sol": 1237,
                "total_photos": 98
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-30",
                "sol": 1238,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-01-31",
                "sol": 1239,
                "total_photos": 81
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-02-01",
                "sol": 1240,
                "total_photos": 61
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-02",
                "sol": 1241,
                "total_photos": 201
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-03",
                "sol": 1242,
                "total_photos": 210
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-04",
                "sol": 1243,
                "total_photos": 161
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-05",
                "sol": 1244,
                "total_photos": 178
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-06",
                "sol": 1245,
                "total_photos": 133
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-07",
                "sol": 1246,
                "total_photos": 215
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-08",
                "sol": 1247,
                "total_photos": 81
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-09",
                "sol": 1248,
                "total_photos": 203
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-10",
                "sol": 1249,
                "total_photos": 261
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-11",
                "sol": 1250,
                "total_photos": 151
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-12",
                "sol": 1251,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-13",
                "sol": 1252,
                "total_photos": 147
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-14",
                "sol": 1253,
                "total_photos": 241
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-15",
                "sol": 1254,
                "total_photos": 166
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-16",
                "sol": 1255,
                "total_photos": 135
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-17",
                "sol": 1256,
                "total_photos": 172
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-18",
                "sol": 1257,
                "total_photos": 121
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-19",
                "sol": 1258,
                "total_photos": 77
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-20",
                "sol": 1259,
                "total_photos": 188
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-21",
                "sol": 1260,
                "total_photos": 261
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-22",
                "sol": 1261,
                "total_photos": 105
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-23",
                "sol": 1262,
                "total_photos": 364
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-24",
                "sol": 1263,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-25",
                "sol": 1264,
                "total_photos": 256
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-26",
                "sol": 1265,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-27",
                "sol": 1266,
                "total_photos": 151
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-28",
                "sol": 1267,
                "total_photos": 370
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-02-29",
                "sol": 1268,
                "total_photos": 105
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-01",
                "sol": 1269,
                "total_photos": 206
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-02",
                "sol": 1270,
                "total_photos": 198
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-03",
                "sol": 1271,
                "total_photos": 75
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-04",
                "sol": 1272,
                "total_photos": 548
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-05",
                "sol": 1273,
                "total_photos": 282
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-07",
                "sol": 1274,
                "total_photos": 377
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-08",
                "sol": 1275,
                "total_photos": 696
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-09",
                "sol": 1276,
                "total_photos": 345
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-10",
                "sol": 1277,
                "total_photos": 279
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-11",
                "sol": 1278,
                "total_photos": 468
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2016-03-12",
                "sol": 1279,
                "total_photos": 117
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-13",
                "sol": 1280,
                "total_photos": 177
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-14",
                "sol": 1281,
                "total_photos": 281
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-15",
                "sol": 1282,
                "total_photos": 596
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-16",
                "sol": 1283,
                "total_photos": 302
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-17",
                "sol": 1284,
                "total_photos": 339
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-18",
                "sol": 1285,
                "total_photos": 228
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-19",
                "sol": 1286,
                "total_photos": 261
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-20",
                "sol": 1287,
                "total_photos": 145
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-21",
                "sol": 1288,
                "total_photos": 89
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-22",
                "sol": 1289,
                "total_photos": 208
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-23",
                "sol": 1290,
                "total_photos": 466
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-03-24",
                "sol": 1291,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-25",
                "sol": 1292,
                "total_photos": 416
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-26",
                "sol": 1293,
                "total_photos": 354
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-27",
                "sol": 1294,
                "total_photos": 221
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2016-03-28",
                "sol": 1295,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-29",
                "sol": 1296,
                "total_photos": 306
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-30",
                "sol": 1297,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-03-31",
                "sol": 1298,
                "total_photos": 346
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-01",
                "sol": 1299,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-02",
                "sol": 1300,
                "total_photos": 167
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-03",
                "sol": 1301,
                "total_photos": 560
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-04",
                "sol": 1302,
                "total_photos": 490
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-05",
                "sol": 1303,
                "total_photos": 147
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-06",
                "sol": 1304,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-07",
                "sol": 1305,
                "total_photos": 157
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-08",
                "sol": 1306,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-11",
                "sol": 1309,
                "total_photos": 295
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-13",
                "sol": 1310,
                "total_photos": 200
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-14",
                "sol": 1311,
                "total_photos": 209
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-15",
                "sol": 1312,
                "total_photos": 243
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-16",
                "sol": 1313,
                "total_photos": 139
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-17",
                "sol": 1314,
                "total_photos": 201
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-18",
                "sol": 1315,
                "total_photos": 138
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-19",
                "sol": 1316,
                "total_photos": 209
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-20",
                "sol": 1317,
                "total_photos": 183
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-21",
                "sol": 1318,
                "total_photos": 165
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-22",
                "sol": 1319,
                "total_photos": 140
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-23",
                "sol": 1320,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-24",
                "sol": 1321,
                "total_photos": 262
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-04-25",
                "sol": 1322,
                "total_photos": 13
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-04-26",
                "sol": 1323,
                "total_photos": 51
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-27",
                "sol": 1324,
                "total_photos": 198
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-28",
                "sol": 1325,
                "total_photos": 139
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-29",
                "sol": 1326,
                "total_photos": 388
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-04-30",
                "sol": 1327,
                "total_photos": 197
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-01",
                "sol": 1328,
                "total_photos": 167
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-02",
                "sol": 1329,
                "total_photos": 178
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-03",
                "sol": 1330,
                "total_photos": 202
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-04",
                "sol": 1331,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-05",
                "sol": 1332,
                "total_photos": 162
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-06",
                "sol": 1333,
                "total_photos": 240
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-05-07",
                "sol": 1334,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-05-08",
                "sol": 1335,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-09",
                "sol": 1336,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-10",
                "sol": 1337,
                "total_photos": 229
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-11",
                "sol": 1338,
                "total_photos": 276
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-12",
                "sol": 1339,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-13",
                "sol": 1340,
                "total_photos": 119
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-14",
                "sol": 1341,
                "total_photos": 263
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-15",
                "sol": 1342,
                "total_photos": 174
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-16",
                "sol": 1343,
                "total_photos": 93
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-17",
                "sol": 1344,
                "total_photos": 373
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-05-18",
                "sol": 1345,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-20",
                "sol": 1346,
                "total_photos": 282
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-21",
                "sol": 1347,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-22",
                "sol": 1348,
                "total_photos": 394
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-23",
                "sol": 1349,
                "total_photos": 310
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-24",
                "sol": 1350,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-25",
                "sol": 1351,
                "total_photos": 230
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-26",
                "sol": 1352,
                "total_photos": 469
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-27",
                "sol": 1353,
                "total_photos": 391
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-28",
                "sol": 1354,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-29",
                "sol": 1355,
                "total_photos": 427
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-30",
                "sol": 1356,
                "total_photos": 672
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-05-31",
                "sol": 1357,
                "total_photos": 168
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-01",
                "sol": 1358,
                "total_photos": 139
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-02",
                "sol": 1359,
                "total_photos": 349
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-03",
                "sol": 1360,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-04",
                "sol": 1361,
                "total_photos": 229
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-06-05",
                "sol": 1362,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-06",
                "sol": 1363,
                "total_photos": 122
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-07",
                "sol": 1364,
                "total_photos": 190
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-08",
                "sol": 1365,
                "total_photos": 105
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-09",
                "sol": 1366,
                "total_photos": 186
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-06-10",
                "sol": 1367,
                "total_photos": 382
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-11",
                "sol": 1368,
                "total_photos": 165
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-12",
                "sol": 1369,
                "total_photos": 257
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-06-13",
                "sol": 1370,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-14",
                "sol": 1371,
                "total_photos": 335
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-06-15",
                "sol": 1372,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-16",
                "sol": 1373,
                "total_photos": 309
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-17",
                "sol": 1374,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-18",
                "sol": 1375,
                "total_photos": 278
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-19",
                "sol": 1376,
                "total_photos": 158
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-20",
                "sol": 1377,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-21",
                "sol": 1378,
                "total_photos": 214
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-22",
                "sol": 1379,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-23",
                "sol": 1380,
                "total_photos": 129
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-24",
                "sol": 1381,
                "total_photos": 151
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-06-25",
                "sol": 1382,
                "total_photos": 142
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-27",
                "sol": 1383,
                "total_photos": 206
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-28",
                "sol": 1384,
                "total_photos": 583
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-29",
                "sol": 1385,
                "total_photos": 213
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-06-30",
                "sol": 1386,
                "total_photos": 195
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-01",
                "sol": 1387,
                "total_photos": 191
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-02",
                "sol": 1388,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-12",
                "sol": 1398,
                "total_photos": 391
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-13",
                "sol": 1399,
                "total_photos": 392
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-14",
                "sol": 1400,
                "total_photos": 287
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-15",
                "sol": 1401,
                "total_photos": 229
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-16",
                "sol": 1402,
                "total_photos": 219
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-17",
                "sol": 1403,
                "total_photos": 68
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-07-18",
                "sol": 1404,
                "total_photos": 68
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-19",
                "sol": 1405,
                "total_photos": 284
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-20",
                "sol": 1406,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-21",
                "sol": 1407,
                "total_photos": 228
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-22",
                "sol": 1408,
                "total_photos": 531
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-23",
                "sol": 1409,
                "total_photos": 221
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-24",
                "sol": 1410,
                "total_photos": 235
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-07-25",
                "sol": 1411,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-26",
                "sol": 1412,
                "total_photos": 189
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-27",
                "sol": 1413,
                "total_photos": 162
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-28",
                "sol": 1414,
                "total_photos": 271
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-29",
                "sol": 1415,
                "total_photos": 29
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-30",
                "sol": 1416,
                "total_photos": 196
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-07-31",
                "sol": 1417,
                "total_photos": 309
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-01",
                "sol": 1418,
                "total_photos": 169
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-03",
                "sol": 1419,
                "total_photos": 428
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-04",
                "sol": 1420,
                "total_photos": 196
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-05",
                "sol": 1421,
                "total_photos": 445
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-06",
                "sol": 1422,
                "total_photos": 181
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-08-07",
                "sol": 1423,
                "total_photos": 39
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-08",
                "sol": 1424,
                "total_photos": 81
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-08-09",
                "sol": 1425,
                "total_photos": 108
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-10",
                "sol": 1426,
                "total_photos": 187
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-11",
                "sol": 1427,
                "total_photos": 193
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-12",
                "sol": 1428,
                "total_photos": 193
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-13",
                "sol": 1429,
                "total_photos": 321
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-08-14",
                "sol": 1430,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-15",
                "sol": 1431,
                "total_photos": 276
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-16",
                "sol": 1432,
                "total_photos": 283
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-17",
                "sol": 1433,
                "total_photos": 268
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2016-08-18",
                "sol": 1434,
                "total_photos": 241
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-19",
                "sol": 1435,
                "total_photos": 261
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-20",
                "sol": 1436,
                "total_photos": 161
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-08-21",
                "sol": 1437,
                "total_photos": 35
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-22",
                "sol": 1438,
                "total_photos": 419
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-23",
                "sol": 1439,
                "total_photos": 292
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-24",
                "sol": 1440,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-25",
                "sol": 1441,
                "total_photos": 291
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-26",
                "sol": 1442,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-08-27",
                "sol": 1443,
                "total_photos": 135
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-28",
                "sol": 1444,
                "total_photos": 159
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-29",
                "sol": 1445,
                "total_photos": 119
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-30",
                "sol": 1446,
                "total_photos": 244
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-08-31",
                "sol": 1447,
                "total_photos": 77
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-01",
                "sol": 1448,
                "total_photos": 696
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-02",
                "sol": 1449,
                "total_photos": 21
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-03",
                "sol": 1450,
                "total_photos": 450
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-09-04",
                "sol": 1451,
                "total_photos": 359
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-05",
                "sol": 1452,
                "total_photos": 305
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-09-06",
                "sol": 1453,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-07",
                "sol": 1454,
                "total_photos": 333
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-08",
                "sol": 1455,
                "total_photos": 322
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-09-10",
                "sol": 1456,
                "total_photos": 70
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-11",
                "sol": 1457,
                "total_photos": 147
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-12",
                "sol": 1458,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-13",
                "sol": 1459,
                "total_photos": 298
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-14",
                "sol": 1460,
                "total_photos": 186
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-15",
                "sol": 1461,
                "total_photos": 39
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-16",
                "sol": 1462,
                "total_photos": 337
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-17",
                "sol": 1463,
                "total_photos": 393
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-18",
                "sol": 1464,
                "total_photos": 132
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST"
                ],
                "earth_date": "2016-09-19",
                "sol": 1465,
                "total_photos": 125
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-20",
                "sol": 1466,
                "total_photos": 178
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-09-21",
                "sol": 1467,
                "total_photos": 214
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-22",
                "sol": 1468,
                "total_photos": 310
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-23",
                "sol": 1469,
                "total_photos": 356
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-24",
                "sol": 1470,
                "total_photos": 146
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-25",
                "sol": 1471,
                "total_photos": 294
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2016-09-26",
                "sol": 1472,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-27",
                "sol": 1473,
                "total_photos": 181
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-28",
                "sol": 1474,
                "total_photos": 318
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-29",
                "sol": 1475,
                "total_photos": 289
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-09-30",
                "sol": 1476,
                "total_photos": 51
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-01",
                "sol": 1477,
                "total_photos": 231
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-02",
                "sol": 1478,
                "total_photos": 209
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-10-03",
                "sol": 1479,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-04",
                "sol": 1480,
                "total_photos": 253
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-05",
                "sol": 1481,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-06",
                "sol": 1482,
                "total_photos": 378
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-07",
                "sol": 1483,
                "total_photos": 31
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-08",
                "sol": 1484,
                "total_photos": 158
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-09",
                "sol": 1485,
                "total_photos": 322
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-10",
                "sol": 1486,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-11",
                "sol": 1487,
                "total_photos": 211
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2016-10-12",
                "sol": 1488,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-13",
                "sol": 1489,
                "total_photos": 226
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-14",
                "sol": 1490,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-15",
                "sol": 1491,
                "total_photos": 153
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-17",
                "sol": 1492,
                "total_photos": 435
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-18",
                "sol": 1493,
                "total_photos": 136
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-19",
                "sol": 1494,
                "total_photos": 152
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-20",
                "sol": 1495,
                "total_photos": 138
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-21",
                "sol": 1496,
                "total_photos": 202
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-22",
                "sol": 1497,
                "total_photos": 57
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2016-10-23",
                "sol": 1498,
                "total_photos": 152
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-24",
                "sol": 1499,
                "total_photos": 149
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-25",
                "sol": 1500,
                "total_photos": 217
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-26",
                "sol": 1501,
                "total_photos": 274
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-27",
                "sol": 1502,
                "total_photos": 199
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-28",
                "sol": 1503,
                "total_photos": 192
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-29",
                "sol": 1504,
                "total_photos": 156
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-30",
                "sol": 1505,
                "total_photos": 154
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-10-31",
                "sol": 1506,
                "total_photos": 237
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-01",
                "sol": 1507,
                "total_photos": 223
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-02",
                "sol": 1508,
                "total_photos": 266
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-03",
                "sol": 1509,
                "total_photos": 259
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-11-04",
                "sol": 1510,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-05",
                "sol": 1511,
                "total_photos": 184
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-06",
                "sol": 1512,
                "total_photos": 436
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-07",
                "sol": 1513,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-08",
                "sol": 1514,
                "total_photos": 276
            },
            {
                "cameras": [
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2016-11-09",
                "sol": 1515,
                "total_photos": 27
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-10",
                "sol": 1516,
                "total_photos": 214
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-11",
                "sol": 1517,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-12",
                "sol": 1518,
                "total_photos": 261
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-13",
                "sol": 1519,
                "total_photos": 206
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-14",
                "sol": 1520,
                "total_photos": 106
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-15",
                "sol": 1521,
                "total_photos": 161
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-16",
                "sol": 1522,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-17",
                "sol": 1523,
                "total_photos": 225
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-11-18",
                "sol": 1524,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-19",
                "sol": 1525,
                "total_photos": 266
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-20",
                "sol": 1526,
                "total_photos": 170
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-11-21",
                "sol": 1527,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-23",
                "sol": 1528,
                "total_photos": 155
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-24",
                "sol": 1529,
                "total_photos": 128
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-11-25",
                "sol": 1530,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-26",
                "sol": 1531,
                "total_photos": 124
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-27",
                "sol": 1532,
                "total_photos": 107
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-28",
                "sol": 1533,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-11-29",
                "sol": 1534,
                "total_photos": 125
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-11-30",
                "sol": 1535,
                "total_photos": 161
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-01",
                "sol": 1536,
                "total_photos": 69
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-02",
                "sol": 1537,
                "total_photos": 393
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAST"
                ],
                "earth_date": "2016-12-03",
                "sol": 1538,
                "total_photos": 25
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-12-04",
                "sol": 1539,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-12-05",
                "sol": 1540,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-06",
                "sol": 1541,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-12-07",
                "sol": 1542,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-12-08",
                "sol": 1543,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-09",
                "sol": 1544,
                "total_photos": 126
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-10",
                "sol": 1545,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-11",
                "sol": 1546,
                "total_photos": 32
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-12",
                "sol": 1547,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-12-13",
                "sol": 1548,
                "total_photos": 37
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-12-14",
                "sol": 1549,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2016-12-15",
                "sol": 1550,
                "total_photos": 17
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-16",
                "sol": 1551,
                "total_photos": 78
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-17",
                "sol": 1552,
                "total_photos": 237
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-18",
                "sol": 1553,
                "total_photos": 132
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-19",
                "sol": 1554,
                "total_photos": 21
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-20",
                "sol": 1555,
                "total_photos": 339
            },
            {
                "cameras": [
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-21",
                "sol": 1556,
                "total_photos": 10
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-12-22",
                "sol": 1557,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-12-23",
                "sol": 1558,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-24",
                "sol": 1559,
                "total_photos": 79
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-12-25",
                "sol": 1560,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-26",
                "sol": 1561,
                "total_photos": 48
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-12-27",
                "sol": 1562,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-28",
                "sol": 1563,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2016-12-29",
                "sol": 1564,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2016-12-31",
                "sol": 1565,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-01",
                "sol": 1566,
                "total_photos": 306
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-02",
                "sol": 1567,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-03",
                "sol": 1568,
                "total_photos": 53
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-04",
                "sol": 1569,
                "total_photos": 190
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-05",
                "sol": 1570,
                "total_photos": 203
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-06",
                "sol": 1571,
                "total_photos": 240
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-07",
                "sol": 1572,
                "total_photos": 195
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-08",
                "sol": 1573,
                "total_photos": 86
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-09",
                "sol": 1574,
                "total_photos": 145
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-10",
                "sol": 1575,
                "total_photos": 120
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-11",
                "sol": 1576,
                "total_photos": 177
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-12",
                "sol": 1577,
                "total_photos": 244
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-13",
                "sol": 1578,
                "total_photos": 254
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-15",
                "sol": 1580,
                "total_photos": 147
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-16",
                "sol": 1581,
                "total_photos": 122
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-17",
                "sol": 1582,
                "total_photos": 248
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-18",
                "sol": 1583,
                "total_photos": 185
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-19",
                "sol": 1584,
                "total_photos": 217
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-20",
                "sol": 1585,
                "total_photos": 224
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-21",
                "sol": 1586,
                "total_photos": 140
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-22",
                "sol": 1587,
                "total_photos": 262
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-23",
                "sol": 1588,
                "total_photos": 70
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-24",
                "sol": 1589,
                "total_photos": 313
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-25",
                "sol": 1590,
                "total_photos": 64
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-26",
                "sol": 1591,
                "total_photos": 291
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-27",
                "sol": 1592,
                "total_photos": 171
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-28",
                "sol": 1593,
                "total_photos": 154
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-29",
                "sol": 1594,
                "total_photos": 218
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-30",
                "sol": 1595,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-01-31",
                "sol": 1596,
                "total_photos": 240
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-01",
                "sol": 1597,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-02",
                "sol": 1598,
                "total_photos": 421
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-03",
                "sol": 1599,
                "total_photos": 127
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-04",
                "sol": 1600,
                "total_photos": 252
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-06",
                "sol": 1601,
                "total_photos": 419
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-07",
                "sol": 1602,
                "total_photos": 232
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-08",
                "sol": 1603,
                "total_photos": 405
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-09",
                "sol": 1604,
                "total_photos": 344
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-10",
                "sol": 1605,
                "total_photos": 232
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-11",
                "sol": 1606,
                "total_photos": 117
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-12",
                "sol": 1607,
                "total_photos": 88
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-13",
                "sol": 1608,
                "total_photos": 369
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-14",
                "sol": 1609,
                "total_photos": 230
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-15",
                "sol": 1610,
                "total_photos": 352
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-16",
                "sol": 1611,
                "total_photos": 225
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-17",
                "sol": 1612,
                "total_photos": 175
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-18",
                "sol": 1613,
                "total_photos": 159
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-19",
                "sol": 1614,
                "total_photos": 165
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-20",
                "sol": 1615,
                "total_photos": 68
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-21",
                "sol": 1616,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-22",
                "sol": 1617,
                "total_photos": 189
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-23",
                "sol": 1618,
                "total_photos": 354
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-24",
                "sol": 1619,
                "total_photos": 177
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-25",
                "sol": 1620,
                "total_photos": 149
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-26",
                "sol": 1621,
                "total_photos": 73
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2017-02-27",
                "sol": 1622,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-02-28",
                "sol": 1623,
                "total_photos": 93
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-01",
                "sol": 1624,
                "total_photos": 266
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2017-03-02",
                "sol": 1625,
                "total_photos": 410
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-03",
                "sol": 1626,
                "total_photos": 158
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-04",
                "sol": 1627,
                "total_photos": 190
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-05",
                "sol": 1628,
                "total_photos": 313
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-06",
                "sol": 1629,
                "total_photos": 115
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-07",
                "sol": 1630,
                "total_photos": 209
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-08",
                "sol": 1631,
                "total_photos": 106
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-09",
                "sol": 1632,
                "total_photos": 216
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-10",
                "sol": 1633,
                "total_photos": 116
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-11",
                "sol": 1634,
                "total_photos": 237
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-12",
                "sol": 1635,
                "total_photos": 218
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-13",
                "sol": 1636,
                "total_photos": 163
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-15",
                "sol": 1637,
                "total_photos": 219
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-16",
                "sol": 1638,
                "total_photos": 123
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-17",
                "sol": 1639,
                "total_photos": 215
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-18",
                "sol": 1640,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2017-03-19",
                "sol": 1641,
                "total_photos": 139
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-20",
                "sol": 1642,
                "total_photos": 150
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-21",
                "sol": 1643,
                "total_photos": 246
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-22",
                "sol": 1644,
                "total_photos": 154
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-23",
                "sol": 1645,
                "total_photos": 264
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-24",
                "sol": 1646,
                "total_photos": 255
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-25",
                "sol": 1647,
                "total_photos": 313
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-26",
                "sol": 1648,
                "total_photos": 220
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-27",
                "sol": 1649,
                "total_photos": 139
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-28",
                "sol": 1650,
                "total_photos": 164
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-29",
                "sol": 1651,
                "total_photos": 90
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-30",
                "sol": 1652,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-03-31",
                "sol": 1653,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-04",
                "sol": 1657,
                "total_photos": 71
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-05",
                "sol": 1658,
                "total_photos": 68
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2017-04-06",
                "sol": 1659,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-04-07",
                "sol": 1660,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-08",
                "sol": 1661,
                "total_photos": 64
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-09",
                "sol": 1662,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-04-10",
                "sol": 1663,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-11",
                "sol": 1664,
                "total_photos": 65
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-12",
                "sol": 1665,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-13",
                "sol": 1666,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-14",
                "sol": 1667,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-15",
                "sol": 1668,
                "total_photos": 185
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-16",
                "sol": 1669,
                "total_photos": 148
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-17",
                "sol": 1670,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-18",
                "sol": 1671,
                "total_photos": 72
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-19",
                "sol": 1672,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-20",
                "sol": 1673,
                "total_photos": 115
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-04-22",
                "sol": 1674,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-23",
                "sol": 1675,
                "total_photos": 135
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-24",
                "sol": 1676,
                "total_photos": 28
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-25",
                "sol": 1677,
                "total_photos": 55
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-26",
                "sol": 1678,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-27",
                "sol": 1679,
                "total_photos": 108
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-04-28",
                "sol": 1680,
                "total_photos": 69
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-04-29",
                "sol": 1681,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI"
                ],
                "earth_date": "2017-04-30",
                "sol": 1682,
                "total_photos": 49
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-01",
                "sol": 1683,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-02",
                "sol": 1684,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-03",
                "sol": 1685,
                "total_photos": 79
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-04",
                "sol": 1686,
                "total_photos": 90
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-05-05",
                "sol": 1687,
                "total_photos": 67
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-05-06",
                "sol": 1688,
                "total_photos": 89
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-07",
                "sol": 1689,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-08",
                "sol": 1690,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-09",
                "sol": 1691,
                "total_photos": 127
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ"
                ],
                "earth_date": "2017-05-10",
                "sol": 1692,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-11",
                "sol": 1693,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-05-12",
                "sol": 1694,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-05-13",
                "sol": 1695,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-14",
                "sol": 1696,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-05-15",
                "sol": 1697,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI"
                ],
                "earth_date": "2017-05-16",
                "sol": 1698,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-05-17",
                "sol": 1699,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-18",
                "sol": 1700,
                "total_photos": 30
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-19",
                "sol": 1701,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-20",
                "sol": 1702,
                "total_photos": 149
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2017-05-21",
                "sol": 1703,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2017-05-22",
                "sol": 1704,
                "total_photos": 35
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-23",
                "sol": 1705,
                "total_photos": 63
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-24",
                "sol": 1706,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-25",
                "sol": 1707,
                "total_photos": 137
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-26",
                "sol": 1708,
                "total_photos": 39
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-29",
                "sol": 1710,
                "total_photos": 102
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-30",
                "sol": 1711,
                "total_photos": 57
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-05-31",
                "sol": 1712,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-06-02",
                "sol": 1714,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-03",
                "sol": 1715,
                "total_photos": 96
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-04",
                "sol": 1716,
                "total_photos": 35
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-05",
                "sol": 1717,
                "total_photos": 129
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-06",
                "sol": 1718,
                "total_photos": 102
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-07",
                "sol": 1719,
                "total_photos": 67
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-08",
                "sol": 1720,
                "total_photos": 28
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-09",
                "sol": 1721,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-06-10",
                "sol": 1722,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-06-11",
                "sol": 1723,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-12",
                "sol": 1724,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-06-13",
                "sol": 1725,
                "total_photos": 97
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-14",
                "sol": 1726,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-15",
                "sol": 1727,
                "total_photos": 110
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-16",
                "sol": 1728,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-06-17",
                "sol": 1729,
                "total_photos": 95
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-18",
                "sol": 1730,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-19",
                "sol": 1731,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2017-06-20",
                "sol": 1732,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-21",
                "sol": 1733,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2017-06-22",
                "sol": 1734,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-23",
                "sol": 1735,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-06-24",
                "sol": 1736,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-25",
                "sol": 1737,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-26",
                "sol": 1738,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-27",
                "sol": 1739,
                "total_photos": 246
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-28",
                "sol": 1740,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-06-29",
                "sol": 1741,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2017-06-30",
                "sol": 1742,
                "total_photos": 32
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-01",
                "sol": 1743,
                "total_photos": 83
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-02",
                "sol": 1744,
                "total_photos": 95
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-03",
                "sol": 1745,
                "total_photos": 85
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-04",
                "sol": 1746,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-06",
                "sol": 1747,
                "total_photos": 85
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-07",
                "sol": 1748,
                "total_photos": 88
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-08",
                "sol": 1749,
                "total_photos": 193
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-09",
                "sol": 1750,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-10",
                "sol": 1751,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-11",
                "sol": 1752,
                "total_photos": 58
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-12",
                "sol": 1753,
                "total_photos": 72
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-13",
                "sol": 1754,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-07-14",
                "sol": 1755,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-15",
                "sol": 1756,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2017-07-16",
                "sol": 1757,
                "total_photos": 18
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-07-17",
                "sol": 1758,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-18",
                "sol": 1759,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-19",
                "sol": 1760,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-20",
                "sol": 1761,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-21",
                "sol": 1762,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-22",
                "sol": 1763,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-23",
                "sol": 1764,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-24",
                "sol": 1765,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-25",
                "sol": 1766,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-26",
                "sol": 1767,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-27",
                "sol": 1768,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-28",
                "sol": 1769,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-29",
                "sol": 1770,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-07-30",
                "sol": 1771,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-07-31",
                "sol": 1772,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-08-01",
                "sol": 1773,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-08-02",
                "sol": 1774,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-08-03",
                "sol": 1775,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-08-04",
                "sol": 1776,
                "total_photos": 1
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-08-05",
                "sol": 1777,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-08-06",
                "sol": 1778,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2017-08-07",
                "sol": 1779,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-08-08",
                "sol": 1780,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-09",
                "sol": 1781,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-10",
                "sol": 1782,
                "total_photos": 132
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-12",
                "sol": 1783,
                "total_photos": 100
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2017-08-13",
                "sol": 1784,
                "total_photos": 19
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-14",
                "sol": 1785,
                "total_photos": 156
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-15",
                "sol": 1786,
                "total_photos": 129
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-16",
                "sol": 1787,
                "total_photos": 137
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-17",
                "sol": 1788,
                "total_photos": 98
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-18",
                "sol": 1789,
                "total_photos": 24
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-08-19",
                "sol": 1790,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-08-20",
                "sol": 1791,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-21",
                "sol": 1792,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-22",
                "sol": 1793,
                "total_photos": 144
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-23",
                "sol": 1794,
                "total_photos": 36
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-24",
                "sol": 1795,
                "total_photos": 29
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-25",
                "sol": 1796,
                "total_photos": 80
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-08-26",
                "sol": 1797,
                "total_photos": 74
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-27",
                "sol": 1798,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-08-28",
                "sol": 1799,
                "total_photos": 32
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2017-08-29",
                "sol": 1800,
                "total_photos": 32
            },
            {
                "cameras": [
                    "MARDI",
                    "MAST"
                ],
                "earth_date": "2017-08-30",
                "sol": 1801,
                "total_photos": 5
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2017-08-31",
                "sol": 1802,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-09-01",
                "sol": 1803,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-09-02",
                "sol": 1804,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2017-09-03",
                "sol": 1805,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI"
                ],
                "earth_date": "2017-09-04",
                "sol": 1806,
                "total_photos": 52
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-05",
                "sol": 1807,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-09-06",
                "sol": 1808,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2017-09-07",
                "sol": 1809,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-08",
                "sol": 1810,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-09",
                "sol": 1811,
                "total_photos": 157
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-10",
                "sol": 1812,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-11",
                "sol": 1813,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-12",
                "sol": 1814,
                "total_photos": 106
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-13",
                "sol": 1815,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-14",
                "sol": 1816,
                "total_photos": 69
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-15",
                "sol": 1817,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2017-09-16",
                "sol": 1818,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-18",
                "sol": 1819,
                "total_photos": 151
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-09-20",
                "sol": 1821,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-21",
                "sol": 1822,
                "total_photos": 36
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-23",
                "sol": 1824,
                "total_photos": 81
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-24",
                "sol": 1825,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-09-25",
                "sol": 1826,
                "total_photos": 31
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-26",
                "sol": 1827,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-27",
                "sol": 1828,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-28",
                "sol": 1829,
                "total_photos": 106
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-09-29",
                "sol": 1830,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-09-30",
                "sol": 1831,
                "total_photos": 30
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-10-01",
                "sol": 1832,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-02",
                "sol": 1833,
                "total_photos": 49
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-03",
                "sol": 1834,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-10-05",
                "sol": 1836,
                "total_photos": 90
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-06",
                "sol": 1837,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-10-07",
                "sol": 1838,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-08",
                "sol": 1839,
                "total_photos": 9
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-10-09",
                "sol": 1840,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-10-10",
                "sol": 1841,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-11",
                "sol": 1842,
                "total_photos": 83
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-12",
                "sol": 1843,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-10-13",
                "sol": 1844,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-10-14",
                "sol": 1845,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-15",
                "sol": 1846,
                "total_photos": 114
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-16",
                "sol": 1847,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-17",
                "sol": 1848,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-10-18",
                "sol": 1849,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-19",
                "sol": 1850,
                "total_photos": 286
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-20",
                "sol": 1851,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-21",
                "sol": 1852,
                "total_photos": 166
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2017-10-22",
                "sol": 1853,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-26",
                "sol": 1856,
                "total_photos": 114
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-10-27",
                "sol": 1857,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-28",
                "sol": 1858,
                "total_photos": 23
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-10-29",
                "sol": 1859,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-10-30",
                "sol": 1860,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-10-31",
                "sol": 1861,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-01",
                "sol": 1862,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-02",
                "sol": 1863,
                "total_photos": 139
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-03",
                "sol": 1864,
                "total_photos": 220
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-04",
                "sol": 1865,
                "total_photos": 92
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-05",
                "sol": 1866,
                "total_photos": 284
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-06",
                "sol": 1867,
                "total_photos": 211
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-07",
                "sol": 1868,
                "total_photos": 261
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-08",
                "sol": 1869,
                "total_photos": 130
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-09",
                "sol": 1870,
                "total_photos": 286
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-10",
                "sol": 1871,
                "total_photos": 217
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-11",
                "sol": 1872,
                "total_photos": 213
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-12",
                "sol": 1873,
                "total_photos": 135
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-13",
                "sol": 1874,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-14",
                "sol": 1875,
                "total_photos": 148
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-15",
                "sol": 1876,
                "total_photos": 227
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2017-11-16",
                "sol": 1877,
                "total_photos": 205
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-17",
                "sol": 1878,
                "total_photos": 78
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-11-18",
                "sol": 1879,
                "total_photos": 45
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-11-19",
                "sol": 1880,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-11-20",
                "sol": 1881,
                "total_photos": 19
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-11-21",
                "sol": 1882,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-11-22",
                "sol": 1883,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-11-23",
                "sol": 1884,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-24",
                "sol": 1885,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-25",
                "sol": 1886,
                "total_photos": 101
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-26",
                "sol": 1887,
                "total_photos": 84
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-27",
                "sol": 1888,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-28",
                "sol": 1889,
                "total_photos": 202
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-29",
                "sol": 1890,
                "total_photos": 112
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-11-30",
                "sol": 1891,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-02",
                "sol": 1892,
                "total_photos": 117
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-03",
                "sol": 1893,
                "total_photos": 21
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-04",
                "sol": 1894,
                "total_photos": 243
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-05",
                "sol": 1895,
                "total_photos": 50
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-06",
                "sol": 1896,
                "total_photos": 172
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2017-12-07",
                "sol": 1897,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-08",
                "sol": 1898,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2017-12-09",
                "sol": 1899,
                "total_photos": 21
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-10",
                "sol": 1900,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-11",
                "sol": 1901,
                "total_photos": 82
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2017-12-12",
                "sol": 1902,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-13",
                "sol": 1903,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-14",
                "sol": 1904,
                "total_photos": 124
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-15",
                "sol": 1905,
                "total_photos": 126
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI"
                ],
                "earth_date": "2017-12-16",
                "sol": 1906,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-17",
                "sol": 1907,
                "total_photos": 32
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-18",
                "sol": 1908,
                "total_photos": 47
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2017-12-19",
                "sol": 1909,
                "total_photos": 40
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-20",
                "sol": 1910,
                "total_photos": 123
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2017-12-21",
                "sol": 1911,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-22",
                "sol": 1912,
                "total_photos": 63
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-12-23",
                "sol": 1913,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-24",
                "sol": 1914,
                "total_photos": 95
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-12-25",
                "sol": 1915,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-12-26",
                "sol": 1916,
                "total_photos": 27
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-12-27",
                "sol": 1917,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2017-12-28",
                "sol": 1918,
                "total_photos": 58
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-12-29",
                "sol": 1919,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2017-12-30",
                "sol": 1920,
                "total_photos": 96
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2017-12-31",
                "sol": 1921,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-01",
                "sol": 1922,
                "total_photos": 196
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-02",
                "sol": 1923,
                "total_photos": 143
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-03",
                "sol": 1924,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-04",
                "sol": 1925,
                "total_photos": 192
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-01-05",
                "sol": 1926,
                "total_photos": 49
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-01-06",
                "sol": 1927,
                "total_photos": 174
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-08",
                "sol": 1928,
                "total_photos": 172
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-01-09",
                "sol": 1929,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-10",
                "sol": 1930,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-01-11",
                "sol": 1931,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-12",
                "sol": 1932,
                "total_photos": 115
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-13",
                "sol": 1933,
                "total_photos": 95
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-14",
                "sol": 1934,
                "total_photos": 122
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-15",
                "sol": 1935,
                "total_photos": 48
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-16",
                "sol": 1936,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-17",
                "sol": 1937,
                "total_photos": 143
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-01-18",
                "sol": 1938,
                "total_photos": 49
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-19",
                "sol": 1939,
                "total_photos": 88
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-20",
                "sol": 1940,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-01-21",
                "sol": 1941,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-22",
                "sol": 1942,
                "total_photos": 188
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-23",
                "sol": 1943,
                "total_photos": 243
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-24",
                "sol": 1944,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-25",
                "sol": 1945,
                "total_photos": 63
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-26",
                "sol": 1946,
                "total_photos": 49
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-27",
                "sol": 1947,
                "total_photos": 89
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-01-28",
                "sol": 1948,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-01-29",
                "sol": 1949,
                "total_photos": 151
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-01-30",
                "sol": 1950,
                "total_photos": 77
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-01-31",
                "sol": 1951,
                "total_photos": 9
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-02",
                "sol": 1953,
                "total_photos": 77
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-03",
                "sol": 1954,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-04",
                "sol": 1955,
                "total_photos": 64
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-02-05",
                "sol": 1956,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-06",
                "sol": 1957,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-02-07",
                "sol": 1958,
                "total_photos": 15
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-08",
                "sol": 1959,
                "total_photos": 79
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-09",
                "sol": 1960,
                "total_photos": 115
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-10",
                "sol": 1961,
                "total_photos": 146
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-11",
                "sol": 1962,
                "total_photos": 78
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-12",
                "sol": 1963,
                "total_photos": 93
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2018-02-13",
                "sol": 1964,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-15",
                "sol": 1965,
                "total_photos": 53
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2018-02-16",
                "sol": 1966,
                "total_photos": 83
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2018-02-17",
                "sol": 1967,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-02-18",
                "sol": 1968,
                "total_photos": 4
            },
            {
                "cameras": [
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-02-19",
                "sol": 1969,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-02-20",
                "sol": 1970,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-02-21",
                "sol": 1971,
                "total_photos": 66
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-02-22",
                "sol": 1972,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-02-23",
                "sol": 1973,
                "total_photos": 15
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-02-24",
                "sol": 1974,
                "total_photos": 17
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-02-25",
                "sol": 1975,
                "total_photos": 54
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2018-02-26",
                "sol": 1976,
                "total_photos": 35
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-02-27",
                "sol": 1977,
                "total_photos": 4
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2018-02-28",
                "sol": 1978,
                "total_photos": 24
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-01",
                "sol": 1979,
                "total_photos": 84
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-02",
                "sol": 1980,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-03-03",
                "sol": 1981,
                "total_photos": 72
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-04",
                "sol": 1982,
                "total_photos": 17
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-03-05",
                "sol": 1983,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-03-06",
                "sol": 1984,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-07",
                "sol": 1985,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-08",
                "sol": 1986,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2018-03-09",
                "sol": 1987,
                "total_photos": 9
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-03-10",
                "sol": 1988,
                "total_photos": 4
            },
            {
                "cameras": [
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-03-11",
                "sol": 1989,
                "total_photos": 26
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2018-03-12",
                "sol": 1990,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-03-13",
                "sol": 1991,
                "total_photos": 51
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-14",
                "sol": 1992,
                "total_photos": 32
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-15",
                "sol": 1993,
                "total_photos": 24
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-03-16",
                "sol": 1994,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-03-17",
                "sol": 1995,
                "total_photos": 22
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-18",
                "sol": 1996,
                "total_photos": 158
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-03-19",
                "sol": 1997,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-20",
                "sol": 1998,
                "total_photos": 107
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-21",
                "sol": 1999,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-22",
                "sol": 2000,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-24",
                "sol": 2001,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-03-25",
                "sol": 2002,
                "total_photos": 79
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-26",
                "sol": 2003,
                "total_photos": 88
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-27",
                "sol": 2004,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI"
                ],
                "earth_date": "2018-03-28",
                "sol": 2005,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-29",
                "sol": 2006,
                "total_photos": 18
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-30",
                "sol": 2007,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-03-31",
                "sol": 2008,
                "total_photos": 113
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-01",
                "sol": 2009,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-04-02",
                "sol": 2010,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ"
                ],
                "earth_date": "2018-04-03",
                "sol": 2011,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-04",
                "sol": 2012,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-05",
                "sol": 2013,
                "total_photos": 276
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-06",
                "sol": 2014,
                "total_photos": 84
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-04-07",
                "sol": 2015,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-04-08",
                "sol": 2016,
                "total_photos": 181
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-09",
                "sol": 2017,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI"
                ],
                "earth_date": "2018-04-10",
                "sol": 2018,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-11",
                "sol": 2019,
                "total_photos": 212
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2018-04-12",
                "sol": 2020,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-04-13",
                "sol": 2021,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-04-14",
                "sol": 2022,
                "total_photos": 101
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-15",
                "sol": 2023,
                "total_photos": 115
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-16",
                "sol": 2024,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-04-17",
                "sol": 2025,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2018-04-18",
                "sol": 2026,
                "total_photos": 31
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-04-19",
                "sol": 2027,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2018-04-20",
                "sol": 2028,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-21",
                "sol": 2029,
                "total_photos": 84
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-22",
                "sol": 2030,
                "total_photos": 114
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-23",
                "sol": 2031,
                "total_photos": 21
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-24",
                "sol": 2032,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-04-25",
                "sol": 2033,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-26",
                "sol": 2034,
                "total_photos": 140
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-27",
                "sol": 2035,
                "total_photos": 85
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-04-28",
                "sol": 2036,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-04-29",
                "sol": 2037,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-01",
                "sol": 2038,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-02",
                "sol": 2039,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-03",
                "sol": 2040,
                "total_photos": 183
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-04",
                "sol": 2041,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-05",
                "sol": 2042,
                "total_photos": 121
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-06",
                "sol": 2043,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-07",
                "sol": 2044,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-08",
                "sol": 2045,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-05-09",
                "sol": 2046,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-10",
                "sol": 2047,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-11",
                "sol": 2048,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI"
                ],
                "earth_date": "2018-05-12",
                "sol": 2049,
                "total_photos": 71
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-05-13",
                "sol": 2050,
                "total_photos": 33
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-14",
                "sol": 2051,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-15",
                "sol": 2052,
                "total_photos": 28
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2018-05-16",
                "sol": 2053,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-17",
                "sol": 2054,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-18",
                "sol": 2055,
                "total_photos": 86
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-19",
                "sol": 2056,
                "total_photos": 29
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-20",
                "sol": 2057,
                "total_photos": 19
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2018-05-21",
                "sol": 2058,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-22",
                "sol": 2059,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-23",
                "sol": 2060,
                "total_photos": 19
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-05-24",
                "sol": 2061,
                "total_photos": 24
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-25",
                "sol": 2062,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-05-26",
                "sol": 2063,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2018-05-27",
                "sol": 2064,
                "total_photos": 10
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-28",
                "sol": 2065,
                "total_photos": 22
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-05-29",
                "sol": 2066,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-30",
                "sol": 2067,
                "total_photos": 112
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-05-31",
                "sol": 2068,
                "total_photos": 17
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-06-01",
                "sol": 2069,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-06-02",
                "sol": 2070,
                "total_photos": 10
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-03",
                "sol": 2071,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-04",
                "sol": 2072,
                "total_photos": 13
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-05",
                "sol": 2073,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-06-07",
                "sol": 2074,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-06-08",
                "sol": 2075,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-06-09",
                "sol": 2076,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-10",
                "sol": 2077,
                "total_photos": 28
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-11",
                "sol": 2078,
                "total_photos": 68
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2018-06-12",
                "sol": 2079,
                "total_photos": 1
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-06-13",
                "sol": 2080,
                "total_photos": 27
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-06-14",
                "sol": 2081,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-15",
                "sol": 2082,
                "total_photos": 146
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2018-06-16",
                "sol": 2083,
                "total_photos": 47
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-17",
                "sol": 2084,
                "total_photos": 33
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-18",
                "sol": 2085,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-19",
                "sol": 2086,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-20",
                "sol": 2087,
                "total_photos": 89
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-21",
                "sol": 2088,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-22",
                "sol": 2089,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-23",
                "sol": 2090,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2018-06-24",
                "sol": 2091,
                "total_photos": 5
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-25",
                "sol": 2092,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-06-26",
                "sol": 2093,
                "total_photos": 51
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-27",
                "sol": 2094,
                "total_photos": 31
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-06-28",
                "sol": 2095,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MARDI",
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2018-06-29",
                "sol": 2096,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-06-30",
                "sol": 2097,
                "total_photos": 11
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-01",
                "sol": 2098,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-02",
                "sol": 2099,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-07-03",
                "sol": 2100,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-07-04",
                "sol": 2101,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-05",
                "sol": 2102,
                "total_photos": 74
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-07-06",
                "sol": 2103,
                "total_photos": 3
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-07",
                "sol": 2104,
                "total_photos": 32
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2018-07-08",
                "sol": 2105,
                "total_photos": 212
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-07-09",
                "sol": 2106,
                "total_photos": 1
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-10",
                "sol": 2107,
                "total_photos": 73
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-11",
                "sol": 2108,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-12",
                "sol": 2109,
                "total_photos": 110
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-14",
                "sol": 2110,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-15",
                "sol": 2111,
                "total_photos": 34
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-16",
                "sol": 2112,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-17",
                "sol": 2113,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-18",
                "sol": 2114,
                "total_photos": 109
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-19",
                "sol": 2115,
                "total_photos": 68
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-20",
                "sol": 2116,
                "total_photos": 32
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-07-21",
                "sol": 2117,
                "total_photos": 4
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-07-22",
                "sol": 2118,
                "total_photos": 1
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-23",
                "sol": 2119,
                "total_photos": 98
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-24",
                "sol": 2120,
                "total_photos": 129
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-25",
                "sol": 2121,
                "total_photos": 58
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2018-07-26",
                "sol": 2122,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-27",
                "sol": 2123,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-28",
                "sol": 2124,
                "total_photos": 27
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-29",
                "sol": 2125,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-07-30",
                "sol": 2126,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-07-31",
                "sol": 2127,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-01",
                "sol": 2128,
                "total_photos": 16
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-08-02",
                "sol": 2129,
                "total_photos": 10
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2018-08-03",
                "sol": 2130,
                "total_photos": 31
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-08-04",
                "sol": 2131,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-08-05",
                "sol": 2132,
                "total_photos": 66
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2018-08-06",
                "sol": 2133,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-07",
                "sol": 2134,
                "total_photos": 67
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-08",
                "sol": 2135,
                "total_photos": 17
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-09",
                "sol": 2136,
                "total_photos": 42
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-08-10",
                "sol": 2137,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-11",
                "sol": 2138,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-12",
                "sol": 2139,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-13",
                "sol": 2140,
                "total_photos": 33
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-14",
                "sol": 2141,
                "total_photos": 24
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-08-15",
                "sol": 2142,
                "total_photos": 13
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-08-16",
                "sol": 2143,
                "total_photos": 18
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-17",
                "sol": 2144,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-08-18",
                "sol": 2145,
                "total_photos": 31
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-19",
                "sol": 2146,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-21",
                "sol": 2147,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-22",
                "sol": 2148,
                "total_photos": 33
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-08-23",
                "sol": 2149,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-24",
                "sol": 2150,
                "total_photos": 17
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-25",
                "sol": 2151,
                "total_photos": 5
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-26",
                "sol": 2152,
                "total_photos": 23
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-27",
                "sol": 2153,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-28",
                "sol": 2154,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-29",
                "sol": 2155,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-30",
                "sol": 2156,
                "total_photos": 113
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-08-31",
                "sol": 2157,
                "total_photos": 39
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-09-01",
                "sol": 2158,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-09-02",
                "sol": 2159,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-09-03",
                "sol": 2160,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-04",
                "sol": 2161,
                "total_photos": 79
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ"
                ],
                "earth_date": "2018-09-05",
                "sol": 2162,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-06",
                "sol": 2163,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2018-09-07",
                "sol": 2164,
                "total_photos": 11
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-08",
                "sol": 2165,
                "total_photos": 34
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-09",
                "sol": 2166,
                "total_photos": 137
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-10",
                "sol": 2167,
                "total_photos": 73
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-11",
                "sol": 2168,
                "total_photos": 88
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-12",
                "sol": 2169,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-13",
                "sol": 2170,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-09-14",
                "sol": 2171,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-09-15",
                "sol": 2172,
                "total_photos": 51
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2018-09-16",
                "sol": 2173,
                "total_photos": 41
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2018-09-17",
                "sol": 2174,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-10-13",
                "sol": 2199,
                "total_photos": 6
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-10-20",
                "sol": 2206,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-10-23",
                "sol": 2209,
                "total_photos": 42
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-10-24",
                "sol": 2210,
                "total_photos": 11
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-10-25",
                "sol": 2211,
                "total_photos": 50
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-10-26",
                "sol": 2212,
                "total_photos": 10
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2018-10-27",
                "sol": 2213,
                "total_photos": 104
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-10-28",
                "sol": 2214,
                "total_photos": 42
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-10-29",
                "sol": 2215,
                "total_photos": 11
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-10-30",
                "sol": 2216,
                "total_photos": 15
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-10-31",
                "sol": 2217,
                "total_photos": 180
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-01",
                "sol": 2218,
                "total_photos": 163
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-03",
                "sol": 2219,
                "total_photos": 50
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-04",
                "sol": 2220,
                "total_photos": 98
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-05",
                "sol": 2221,
                "total_photos": 58
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-06",
                "sol": 2222,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-07",
                "sol": 2223,
                "total_photos": 75
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-08",
                "sol": 2224,
                "total_photos": 15
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-09",
                "sol": 2225,
                "total_photos": 52
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-11-10",
                "sol": 2226,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-11-11",
                "sol": 2227,
                "total_photos": 15
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-11-12",
                "sol": 2228,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-13",
                "sol": 2229,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-14",
                "sol": 2230,
                "total_photos": 70
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-15",
                "sol": 2231,
                "total_photos": 58
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-11-16",
                "sol": 2232,
                "total_photos": 2
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-11-17",
                "sol": 2233,
                "total_photos": 20
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2018-11-18",
                "sol": 2234,
                "total_photos": 11
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-11-19",
                "sol": 2235,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-11-20",
                "sol": 2236,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-11-21",
                "sol": 2237,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-22",
                "sol": 2238,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-23",
                "sol": 2239,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-24",
                "sol": 2240,
                "total_photos": 34
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-11-25",
                "sol": 2241,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-26",
                "sol": 2242,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-27",
                "sol": 2243,
                "total_photos": 21
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2018-11-28",
                "sol": 2244,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-29",
                "sol": 2245,
                "total_photos": 90
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-11-30",
                "sol": 2246,
                "total_photos": 25
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-01",
                "sol": 2247,
                "total_photos": 143
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-02",
                "sol": 2248,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2018-12-03",
                "sol": 2249,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-04",
                "sol": 2250,
                "total_photos": 247
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-05",
                "sol": 2251,
                "total_photos": 31
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-06",
                "sol": 2252,
                "total_photos": 100
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-07",
                "sol": 2253,
                "total_photos": 65
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-08",
                "sol": 2254,
                "total_photos": 130
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-09",
                "sol": 2255,
                "total_photos": 209
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-11",
                "sol": 2256,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-12",
                "sol": 2257,
                "total_photos": 115
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2018-12-13",
                "sol": 2258,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-14",
                "sol": 2259,
                "total_photos": 106
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2018-12-15",
                "sol": 2260,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-16",
                "sol": 2261,
                "total_photos": 15
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-17",
                "sol": 2262,
                "total_photos": 127
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-18",
                "sol": 2263,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-19",
                "sol": 2264,
                "total_photos": 21
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-20",
                "sol": 2265,
                "total_photos": 15
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2018-12-31",
                "sol": 2276,
                "total_photos": 71
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-01",
                "sol": 2277,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-01-02",
                "sol": 2278,
                "total_photos": 4
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2019-01-03",
                "sol": 2279,
                "total_photos": 17
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-04",
                "sol": 2280,
                "total_photos": 113
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-01-05",
                "sol": 2281,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-06",
                "sol": 2282,
                "total_photos": 77
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-07",
                "sol": 2283,
                "total_photos": 55
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-01-08",
                "sol": 2284,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-09",
                "sol": 2285,
                "total_photos": 127
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-01-10",
                "sol": 2286,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-11",
                "sol": 2287,
                "total_photos": 41
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-12",
                "sol": 2288,
                "total_photos": 69
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-13",
                "sol": 2289,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-14",
                "sol": 2290,
                "total_photos": 87
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-15",
                "sol": 2291,
                "total_photos": 140
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-17",
                "sol": 2292,
                "total_photos": 26
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-18",
                "sol": 2293,
                "total_photos": 50
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-19",
                "sol": 2294,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-20",
                "sol": 2295,
                "total_photos": 72
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-01-21",
                "sol": 2296,
                "total_photos": 101
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-22",
                "sol": 2297,
                "total_photos": 49
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-23",
                "sol": 2298,
                "total_photos": 188
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-24",
                "sol": 2299,
                "total_photos": 204
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-25",
                "sol": 2300,
                "total_photos": 187
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-26",
                "sol": 2301,
                "total_photos": 128
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-27",
                "sol": 2302,
                "total_photos": 18
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2019-01-28",
                "sol": 2303,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2019-01-29",
                "sol": 2304,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-30",
                "sol": 2305,
                "total_photos": 36
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-01-31",
                "sol": 2306,
                "total_photos": 33
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-01",
                "sol": 2307,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-02",
                "sol": 2308,
                "total_photos": 57
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2019-02-03",
                "sol": 2309,
                "total_photos": 11
            },
            {
                "cameras": [
                    "MAST"
                ],
                "earth_date": "2019-02-04",
                "sol": 2310,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-05",
                "sol": 2311,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-06",
                "sol": 2312,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-02-07",
                "sol": 2313,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-08",
                "sol": 2314,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-02-09",
                "sol": 2315,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-10",
                "sol": 2316,
                "total_photos": 159
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-11",
                "sol": 2317,
                "total_photos": 51
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-12",
                "sol": 2318,
                "total_photos": 126
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-13",
                "sol": 2319,
                "total_photos": 109
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-02-14",
                "sol": 2320,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-02-28",
                "sol": 2333,
                "total_photos": 151
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2019-03-01",
                "sol": 2334,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-05",
                "sol": 2338,
                "total_photos": 140
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-03-06",
                "sol": 2339,
                "total_photos": 9
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-13",
                "sol": 2346,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2019-03-14",
                "sol": 2347,
                "total_photos": 32
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2019-03-15",
                "sol": 2348,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-03-16",
                "sol": 2349,
                "total_photos": 21
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-03-17",
                "sol": 2350,
                "total_photos": 19
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-03-18",
                "sol": 2351,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-19",
                "sol": 2352,
                "total_photos": 308
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-20",
                "sol": 2353,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2019-03-21",
                "sol": 2354,
                "total_photos": 21
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2019-03-22",
                "sol": 2355,
                "total_photos": 17
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-23",
                "sol": 2356,
                "total_photos": 176
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-24",
                "sol": 2357,
                "total_photos": 181
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-25",
                "sol": 2358,
                "total_photos": 75
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-26",
                "sol": 2359,
                "total_photos": 155
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-27",
                "sol": 2360,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-28",
                "sol": 2361,
                "total_photos": 171
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-29",
                "sol": 2362,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-30",
                "sol": 2363,
                "total_photos": 48
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-03-31",
                "sol": 2364,
                "total_photos": 145
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-02",
                "sol": 2365,
                "total_photos": 144
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-03",
                "sol": 2366,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-04",
                "sol": 2367,
                "total_photos": 53
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-05",
                "sol": 2368,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-06",
                "sol": 2369,
                "total_photos": 32
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-07",
                "sol": 2370,
                "total_photos": 31
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-08",
                "sol": 2371,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-09",
                "sol": 2372,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-04-10",
                "sol": 2373,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-04-11",
                "sol": 2374,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2019-04-12",
                "sol": 2375,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-13",
                "sol": 2376,
                "total_photos": 48
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-04-14",
                "sol": 2377,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-15",
                "sol": 2378,
                "total_photos": 33
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-16",
                "sol": 2379,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-17",
                "sol": 2380,
                "total_photos": 53
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-18",
                "sol": 2381,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-19",
                "sol": 2382,
                "total_photos": 56
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-21",
                "sol": 2384,
                "total_photos": 55
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-04-22",
                "sol": 2385,
                "total_photos": 35
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-23",
                "sol": 2386,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-04-24",
                "sol": 2387,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-04-25",
                "sol": 2388,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-26",
                "sol": 2389,
                "total_photos": 45
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-04-27",
                "sol": 2390,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-04-28",
                "sol": 2391,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-29",
                "sol": 2392,
                "total_photos": 21
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-04-30",
                "sol": 2393,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-01",
                "sol": 2394,
                "total_photos": 61
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-02",
                "sol": 2395,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-03",
                "sol": 2396,
                "total_photos": 43
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-05-04",
                "sol": 2397,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-05-05",
                "sol": 2398,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-06",
                "sol": 2399,
                "total_photos": 39
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-07",
                "sol": 2400,
                "total_photos": 113
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-09",
                "sol": 2401,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-10",
                "sol": 2402,
                "total_photos": 89
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-11",
                "sol": 2403,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2019-05-12",
                "sol": 2404,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-13",
                "sol": 2405,
                "total_photos": 165
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-14",
                "sol": 2406,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-15",
                "sol": 2407,
                "total_photos": 138
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-16",
                "sol": 2408,
                "total_photos": 148
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2019-05-17",
                "sol": 2409,
                "total_photos": 32
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2019-05-18",
                "sol": 2410,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-19",
                "sol": 2411,
                "total_photos": 14
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-20",
                "sol": 2412,
                "total_photos": 93
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-21",
                "sol": 2413,
                "total_photos": 75
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-22",
                "sol": 2414,
                "total_photos": 126
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-23",
                "sol": 2415,
                "total_photos": 87
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-24",
                "sol": 2416,
                "total_photos": 130
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2019-05-25",
                "sol": 2417,
                "total_photos": 24
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2019-05-26",
                "sol": 2418,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-05-27",
                "sol": 2419,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-05-28",
                "sol": 2420,
                "total_photos": 33
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-29",
                "sol": 2421,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-05-30",
                "sol": 2422,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-05-31",
                "sol": 2423,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-06-01",
                "sol": 2424,
                "total_photos": 22
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-02",
                "sol": 2425,
                "total_photos": 167
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "MAHLI"
                ],
                "earth_date": "2019-06-03",
                "sol": 2426,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-04",
                "sol": 2427,
                "total_photos": 238
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-05",
                "sol": 2428,
                "total_photos": 19
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-06",
                "sol": 2429,
                "total_photos": 175
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-07",
                "sol": 2430,
                "total_photos": 22
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-06-08",
                "sol": 2431,
                "total_photos": 145
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-09",
                "sol": 2432,
                "total_photos": 194
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-10",
                "sol": 2433,
                "total_photos": 207
            },
            {
                "cameras": [
                    "FHAZ"
                ],
                "earth_date": "2019-06-11",
                "sol": 2434,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-12",
                "sol": 2435,
                "total_photos": 155
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-13",
                "sol": 2436,
                "total_photos": 138
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-14",
                "sol": 2437,
                "total_photos": 273
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-16",
                "sol": 2438,
                "total_photos": 45
            },
            {
                "cameras": [
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-06-17",
                "sol": 2439,
                "total_photos": 82
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-18",
                "sol": 2440,
                "total_photos": 75
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-19",
                "sol": 2441,
                "total_photos": 59
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-20",
                "sol": 2442,
                "total_photos": 96
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-06-21",
                "sol": 2443,
                "total_photos": 4
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2019-06-22",
                "sol": 2444,
                "total_photos": 2
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-06-23",
                "sol": 2445,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-06-24",
                "sol": 2446,
                "total_photos": 10
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM"
                ],
                "earth_date": "2019-06-25",
                "sol": 2447,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-26",
                "sol": 2448,
                "total_photos": 175
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-27",
                "sol": 2449,
                "total_photos": 87
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2019-06-28",
                "sol": 2450,
                "total_photos": 13
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "RHAZ"
                ],
                "earth_date": "2019-06-29",
                "sol": 2451,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-06-30",
                "sol": 2452,
                "total_photos": 156
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-01",
                "sol": 2453,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-02",
                "sol": 2454,
                "total_photos": 85
            },
            {
                "cameras": [
                    "CHEMCAM"
                ],
                "earth_date": "2019-07-03",
                "sol": 2455,
                "total_photos": 8
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-07-04",
                "sol": 2456,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-07-05",
                "sol": 2457,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-07-06",
                "sol": 2458,
                "total_photos": 148
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM"
                ],
                "earth_date": "2019-07-07",
                "sol": 2459,
                "total_photos": 44
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-08",
                "sol": 2460,
                "total_photos": 21
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "NAVCAM"
                ],
                "earth_date": "2019-07-09",
                "sol": 2461,
                "total_photos": 50
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-10",
                "sol": 2462,
                "total_photos": 111
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-11",
                "sol": 2463,
                "total_photos": 352
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-12",
                "sol": 2464,
                "total_photos": 233
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-13",
                "sol": 2465,
                "total_photos": 361
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-14",
                "sol": 2466,
                "total_photos": 546
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-15",
                "sol": 2467,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-16",
                "sol": 2468,
                "total_photos": 371
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-17",
                "sol": 2469,
                "total_photos": 281
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-18",
                "sol": 2470,
                "total_photos": 216
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-19",
                "sol": 2471,
                "total_photos": 334
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-20",
                "sol": 2472,
                "total_photos": 566
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-21",
                "sol": 2473,
                "total_photos": 208
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-23",
                "sol": 2474,
                "total_photos": 535
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-24",
                "sol": 2475,
                "total_photos": 226
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-25",
                "sol": 2476,
                "total_photos": 353
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-26",
                "sol": 2477,
                "total_photos": 266
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-27",
                "sol": 2478,
                "total_photos": 201
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-28",
                "sol": 2479,
                "total_photos": 431
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-29",
                "sol": 2480,
                "total_photos": 517
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-30",
                "sol": 2481,
                "total_photos": 576
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-07-31",
                "sol": 2482,
                "total_photos": 256
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-01",
                "sol": 2483,
                "total_photos": 240
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-02",
                "sol": 2484,
                "total_photos": 304
            },
            {
                "cameras": [
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-08-03",
                "sol": 2485,
                "total_photos": 255
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-04",
                "sol": 2486,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-08-05",
                "sol": 2487,
                "total_photos": 138
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-06",
                "sol": 2488,
                "total_photos": 63
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-08-07",
                "sol": 2489,
                "total_photos": 67
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-08",
                "sol": 2490,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-08-09",
                "sol": 2491,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-10",
                "sol": 2492,
                "total_photos": 334
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-11",
                "sol": 2493,
                "total_photos": 68
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-08-12",
                "sol": 2494,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-13",
                "sol": 2495,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-08-14",
                "sol": 2496,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-08-15",
                "sol": 2497,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-16",
                "sol": 2498,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-08-17",
                "sol": 2499,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-08-18",
                "sol": 2500,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-19",
                "sol": 2501,
                "total_photos": 91
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-08-20",
                "sol": 2502,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-21",
                "sol": 2503,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-22",
                "sol": 2504,
                "total_photos": 106
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-23",
                "sol": 2505,
                "total_photos": 103
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-24",
                "sol": 2506,
                "total_photos": 102
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-08-25",
                "sol": 2507,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-08-26",
                "sol": 2508,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-27",
                "sol": 2509,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-29",
                "sol": 2510,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-30",
                "sol": 2511,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-08-31",
                "sol": 2512,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-01",
                "sol": 2513,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-02",
                "sol": 2514,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-03",
                "sol": 2515,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-04",
                "sol": 2516,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-05",
                "sol": 2517,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-06",
                "sol": 2518,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-07",
                "sol": 2519,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-08",
                "sol": 2520,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-09",
                "sol": 2521,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-10",
                "sol": 2522,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-11",
                "sol": 2523,
                "total_photos": 253
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-12",
                "sol": 2524,
                "total_photos": 119
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-13",
                "sol": 2525,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-14",
                "sol": 2526,
                "total_photos": 77
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-15",
                "sol": 2527,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-16",
                "sol": 2528,
                "total_photos": 175
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-17",
                "sol": 2529,
                "total_photos": 54
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-18",
                "sol": 2530,
                "total_photos": 125
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-09-19",
                "sol": 2531,
                "total_photos": 12
            },
            {
                "cameras": [
                    "MAST",
                    "NAVCAM"
                ],
                "earth_date": "2019-09-20",
                "sol": 2532,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-22",
                "sol": 2534,
                "total_photos": 65
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-23",
                "sol": 2535,
                "total_photos": 30
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-09-24",
                "sol": 2536,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-25",
                "sol": 2537,
                "total_photos": 11
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-09-26",
                "sol": 2538,
                "total_photos": 13
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-27",
                "sol": 2539,
                "total_photos": 166
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-09-28",
                "sol": 2540,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-09-29",
                "sol": 2541,
                "total_photos": 118
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-09-30",
                "sol": 2542,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-10-01",
                "sol": 2543,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-02",
                "sol": 2544,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2019-10-06",
                "sol": 2547,
                "total_photos": 30
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-07",
                "sol": 2548,
                "total_photos": 97
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-08",
                "sol": 2549,
                "total_photos": 67
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-09",
                "sol": 2550,
                "total_photos": 102
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-10",
                "sol": 2551,
                "total_photos": 198
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-11",
                "sol": 2552,
                "total_photos": 81
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-12",
                "sol": 2553,
                "total_photos": 222
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-13",
                "sol": 2554,
                "total_photos": 167
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-14",
                "sol": 2555,
                "total_photos": 334
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-15",
                "sol": 2556,
                "total_photos": 181
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-16",
                "sol": 2557,
                "total_photos": 181
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-17",
                "sol": 2558,
                "total_photos": 198
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-18",
                "sol": 2559,
                "total_photos": 380
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-19",
                "sol": 2560,
                "total_photos": 302
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-20",
                "sol": 2561,
                "total_photos": 182
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-21",
                "sol": 2562,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-22",
                "sol": 2563,
                "total_photos": 167
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-23",
                "sol": 2564,
                "total_photos": 249
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-24",
                "sol": 2565,
                "total_photos": 266
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-25",
                "sol": 2566,
                "total_photos": 40
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-26",
                "sol": 2567,
                "total_photos": 212
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-27",
                "sol": 2568,
                "total_photos": 519
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-28",
                "sol": 2569,
                "total_photos": 379
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-29",
                "sol": 2570,
                "total_photos": 386
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-30",
                "sol": 2571,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-10-31",
                "sol": 2572,
                "total_photos": 284
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-01",
                "sol": 2573,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-02",
                "sol": 2574,
                "total_photos": 284
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-03",
                "sol": 2575,
                "total_photos": 788
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-04",
                "sol": 2576,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-05",
                "sol": 2577,
                "total_photos": 246
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-06",
                "sol": 2578,
                "total_photos": 372
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-07",
                "sol": 2579,
                "total_photos": 494
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-08",
                "sol": 2580,
                "total_photos": 91
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-09",
                "sol": 2581,
                "total_photos": 470
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-10",
                "sol": 2582,
                "total_photos": 617
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-12",
                "sol": 2583,
                "total_photos": 113
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-13",
                "sol": 2584,
                "total_photos": 270
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-14",
                "sol": 2585,
                "total_photos": 442
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-15",
                "sol": 2586,
                "total_photos": 418
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-16",
                "sol": 2587,
                "total_photos": 195
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-17",
                "sol": 2588,
                "total_photos": 330
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-18",
                "sol": 2589,
                "total_photos": 274
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-19",
                "sol": 2590,
                "total_photos": 356
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-20",
                "sol": 2591,
                "total_photos": 320
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-21",
                "sol": 2592,
                "total_photos": 356
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-22",
                "sol": 2593,
                "total_photos": 198
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-23",
                "sol": 2594,
                "total_photos": 204
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-24",
                "sol": 2595,
                "total_photos": 365
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-25",
                "sol": 2596,
                "total_photos": 128
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-26",
                "sol": 2597,
                "total_photos": 1108
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-27",
                "sol": 2598,
                "total_photos": 49
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-11-28",
                "sol": 2599,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-29",
                "sol": 2600,
                "total_photos": 1097
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-11-30",
                "sol": 2601,
                "total_photos": 1542
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-01",
                "sol": 2602,
                "total_photos": 1484
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-12-02",
                "sol": 2603,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-03",
                "sol": 2604,
                "total_photos": 376
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-04",
                "sol": 2605,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-05",
                "sol": 2606,
                "total_photos": 663
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-06",
                "sol": 2607,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-07",
                "sol": 2608,
                "total_photos": 259
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-08",
                "sol": 2609,
                "total_photos": 703
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-09",
                "sol": 2610,
                "total_photos": 361
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-10",
                "sol": 2611,
                "total_photos": 581
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-11",
                "sol": 2612,
                "total_photos": 91
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-12",
                "sol": 2613,
                "total_photos": 554
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-13",
                "sol": 2614,
                "total_photos": 65
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-12-14",
                "sol": 2615,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-15",
                "sol": 2616,
                "total_photos": 395
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-16",
                "sol": 2617,
                "total_photos": 372
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-17",
                "sol": 2618,
                "total_photos": 345
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2019-12-18",
                "sol": 2619,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-20",
                "sol": 2620,
                "total_photos": 472
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2019-12-21",
                "sol": 2621,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-26",
                "sol": 2626,
                "total_photos": 106
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2019-12-31",
                "sol": 2631,
                "total_photos": 310
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-01",
                "sol": 2632,
                "total_photos": 1099
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-02",
                "sol": 2633,
                "total_photos": 458
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-03",
                "sol": 2634,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-04",
                "sol": 2635,
                "total_photos": 371
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-05",
                "sol": 2636,
                "total_photos": 197
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-06",
                "sol": 2637,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-07",
                "sol": 2638,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-08",
                "sol": 2639,
                "total_photos": 483
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-09",
                "sol": 2640,
                "total_photos": 228
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-10",
                "sol": 2641,
                "total_photos": 477
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-11",
                "sol": 2642,
                "total_photos": 534
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-12",
                "sol": 2643,
                "total_photos": 438
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-13",
                "sol": 2644,
                "total_photos": 71
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-14",
                "sol": 2645,
                "total_photos": 542
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-15",
                "sol": 2646,
                "total_photos": 97
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-16",
                "sol": 2647,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-17",
                "sol": 2648,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-22",
                "sol": 2653,
                "total_photos": 237
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-23",
                "sol": 2654,
                "total_photos": 808
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-24",
                "sol": 2655,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-26",
                "sol": 2656,
                "total_photos": 227
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-27",
                "sol": 2657,
                "total_photos": 1067
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-28",
                "sol": 2658,
                "total_photos": 664
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-29",
                "sol": 2659,
                "total_photos": 440
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-30",
                "sol": 2660,
                "total_photos": 200
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-01-31",
                "sol": 2661,
                "total_photos": 489
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-01",
                "sol": 2662,
                "total_photos": 272
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-02",
                "sol": 2663,
                "total_photos": 499
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-03",
                "sol": 2664,
                "total_photos": 151
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-04",
                "sol": 2665,
                "total_photos": 406
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-05",
                "sol": 2666,
                "total_photos": 310
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-06",
                "sol": 2667,
                "total_photos": 112
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-07",
                "sol": 2668,
                "total_photos": 49
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-08",
                "sol": 2669,
                "total_photos": 79
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-09",
                "sol": 2670,
                "total_photos": 206
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-10",
                "sol": 2671,
                "total_photos": 788
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-11",
                "sol": 2672,
                "total_photos": 46
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-02-12",
                "sol": 2673,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-13",
                "sol": 2674,
                "total_photos": 132
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-02-14",
                "sol": 2675,
                "total_photos": 35
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-02-15",
                "sol": 2676,
                "total_photos": 18
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-02-16",
                "sol": 2677,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-02-17",
                "sol": 2678,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-18",
                "sol": 2679,
                "total_photos": 583
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-19",
                "sol": 2680,
                "total_photos": 391
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-20",
                "sol": 2681,
                "total_photos": 81
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-02-21",
                "sol": 2682,
                "total_photos": 16
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-02-22",
                "sol": 2683,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-23",
                "sol": 2684,
                "total_photos": 142
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-24",
                "sol": 2685,
                "total_photos": 105
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-25",
                "sol": 2686,
                "total_photos": 354
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-26",
                "sol": 2687,
                "total_photos": 407
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-27",
                "sol": 2688,
                "total_photos": 100
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-28",
                "sol": 2689,
                "total_photos": 85
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-02-29",
                "sol": 2690,
                "total_photos": 110
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-01",
                "sol": 2691,
                "total_photos": 238
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-03",
                "sol": 2692,
                "total_photos": 317
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-04",
                "sol": 2693,
                "total_photos": 139
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-05",
                "sol": 2694,
                "total_photos": 152
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-06",
                "sol": 2695,
                "total_photos": 1133
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-07",
                "sol": 2696,
                "total_photos": 494
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-08",
                "sol": 2697,
                "total_photos": 145
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-09",
                "sol": 2698,
                "total_photos": 301
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-10",
                "sol": 2699,
                "total_photos": 586
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-11",
                "sol": 2700,
                "total_photos": 1260
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-12",
                "sol": 2701,
                "total_photos": 172
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-13",
                "sol": 2702,
                "total_photos": 231
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-14",
                "sol": 2703,
                "total_photos": 183
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-15",
                "sol": 2704,
                "total_photos": 75
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-16",
                "sol": 2705,
                "total_photos": 328
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-17",
                "sol": 2706,
                "total_photos": 286
            },
            {
                "cameras": [
                    "MAHLI"
                ],
                "earth_date": "2020-03-18",
                "sol": 2707,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-21",
                "sol": 2710,
                "total_photos": 150
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-22",
                "sol": 2711,
                "total_photos": 341
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-23",
                "sol": 2712,
                "total_photos": 241
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-24",
                "sol": 2713,
                "total_photos": 73
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-25",
                "sol": 2714,
                "total_photos": 116
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-03-26",
                "sol": 2715,
                "total_photos": 65
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-27",
                "sol": 2716,
                "total_photos": 387
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-28",
                "sol": 2717,
                "total_photos": 509
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-03-29",
                "sol": 2718,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-30",
                "sol": 2719,
                "total_photos": 278
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-03-31",
                "sol": 2720,
                "total_photos": 165
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-01",
                "sol": 2721,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-02",
                "sol": 2722,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-03",
                "sol": 2723,
                "total_photos": 123
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-04",
                "sol": 2724,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-05",
                "sol": 2725,
                "total_photos": 77
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-06",
                "sol": 2726,
                "total_photos": 254
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-07",
                "sol": 2727,
                "total_photos": 344
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-08",
                "sol": 2728,
                "total_photos": 167
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-10",
                "sol": 2729,
                "total_photos": 339
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-11",
                "sol": 2730,
                "total_photos": 51
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-12",
                "sol": 2731,
                "total_photos": 70
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-13",
                "sol": 2732,
                "total_photos": 313
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-14",
                "sol": 2733,
                "total_photos": 129
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-15",
                "sol": 2734,
                "total_photos": 203
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-16",
                "sol": 2735,
                "total_photos": 115
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-17",
                "sol": 2736,
                "total_photos": 133
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-18",
                "sol": 2737,
                "total_photos": 255
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-19",
                "sol": 2738,
                "total_photos": 113
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-20",
                "sol": 2739,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-21",
                "sol": 2740,
                "total_photos": 61
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-22",
                "sol": 2741,
                "total_photos": 232
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-23",
                "sol": 2742,
                "total_photos": 282
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-24",
                "sol": 2743,
                "total_photos": 63
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-25",
                "sol": 2744,
                "total_photos": 49
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-26",
                "sol": 2745,
                "total_photos": 299
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-27",
                "sol": 2746,
                "total_photos": 10
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-28",
                "sol": 2747,
                "total_photos": 153
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-29",
                "sol": 2748,
                "total_photos": 35
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-04-30",
                "sol": 2749,
                "total_photos": 183
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-01",
                "sol": 2750,
                "total_photos": 428
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-05-02",
                "sol": 2751,
                "total_photos": 423
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2020-05-03",
                "sol": 2752,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-04",
                "sol": 2753,
                "total_photos": 191
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-05",
                "sol": 2754,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-06",
                "sol": 2755,
                "total_photos": 367
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-07",
                "sol": 2756,
                "total_photos": 366
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-08",
                "sol": 2757,
                "total_photos": 274
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-05-09",
                "sol": 2758,
                "total_photos": 282
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-05-10",
                "sol": 2759,
                "total_photos": 13
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-11",
                "sol": 2760,
                "total_photos": 94
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-12",
                "sol": 2761,
                "total_photos": 386
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-13",
                "sol": 2762,
                "total_photos": 398
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-14",
                "sol": 2763,
                "total_photos": 50
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-15",
                "sol": 2764,
                "total_photos": 283
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-17",
                "sol": 2765,
                "total_photos": 305
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-05-18",
                "sol": 2766,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-19",
                "sol": 2767,
                "total_photos": 272
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-20",
                "sol": 2768,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-05-21",
                "sol": 2769,
                "total_photos": 36
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-22",
                "sol": 2770,
                "total_photos": 217
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-24",
                "sol": 2772,
                "total_photos": 76
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-25",
                "sol": 2773,
                "total_photos": 308
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-26",
                "sol": 2774,
                "total_photos": 235
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-27",
                "sol": 2775,
                "total_photos": 90
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-28",
                "sol": 2776,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-29",
                "sol": 2777,
                "total_photos": 152
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-30",
                "sol": 2778,
                "total_photos": 166
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-05-31",
                "sol": 2779,
                "total_photos": 61
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-01",
                "sol": 2780,
                "total_photos": 166
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-02",
                "sol": 2781,
                "total_photos": 551
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-03",
                "sol": 2782,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-04",
                "sol": 2783,
                "total_photos": 305
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-05",
                "sol": 2784,
                "total_photos": 191
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-06",
                "sol": 2785,
                "total_photos": 176
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-07",
                "sol": 2786,
                "total_photos": 610
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-08",
                "sol": 2787,
                "total_photos": 29
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-09",
                "sol": 2788,
                "total_photos": 317
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-10",
                "sol": 2789,
                "total_photos": 336
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-11",
                "sol": 2790,
                "total_photos": 297
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-12",
                "sol": 2791,
                "total_photos": 131
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-13",
                "sol": 2792,
                "total_photos": 116
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-14",
                "sol": 2793,
                "total_photos": 396
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-15",
                "sol": 2794,
                "total_photos": 287
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-16",
                "sol": 2795,
                "total_photos": 658
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-17",
                "sol": 2796,
                "total_photos": 85
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-18",
                "sol": 2797,
                "total_photos": 387
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-19",
                "sol": 2798,
                "total_photos": 28
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-20",
                "sol": 2799,
                "total_photos": 801
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-21",
                "sol": 2800,
                "total_photos": 126
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-23",
                "sol": 2801,
                "total_photos": 372
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-24",
                "sol": 2802,
                "total_photos": 250
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-25",
                "sol": 2803,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-26",
                "sol": 2804,
                "total_photos": 298
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-06-30",
                "sol": 2808,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-01",
                "sol": 2809,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-03",
                "sol": 2811,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-04",
                "sol": 2812,
                "total_photos": 162
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-05",
                "sol": 2813,
                "total_photos": 571
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-07-07",
                "sol": 2815,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-08",
                "sol": 2816,
                "total_photos": 191
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-09",
                "sol": 2817,
                "total_photos": 333
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-10",
                "sol": 2818,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-11",
                "sol": 2819,
                "total_photos": 318
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-12",
                "sol": 2820,
                "total_photos": 289
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-13",
                "sol": 2821,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-14",
                "sol": 2822,
                "total_photos": 176
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-15",
                "sol": 2823,
                "total_photos": 231
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-16",
                "sol": 2824,
                "total_photos": 424
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-17",
                "sol": 2825,
                "total_photos": 61
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-18",
                "sol": 2826,
                "total_photos": 304
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-19",
                "sol": 2827,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-20",
                "sol": 2828,
                "total_photos": 105
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-21",
                "sol": 2829,
                "total_photos": 305
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-22",
                "sol": 2830,
                "total_photos": 27
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-23",
                "sol": 2831,
                "total_photos": 429
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-24",
                "sol": 2832,
                "total_photos": 27
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-25",
                "sol": 2833,
                "total_photos": 465
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-07-26",
                "sol": 2834,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-28",
                "sol": 2836,
                "total_photos": 57
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-29",
                "sol": 2837,
                "total_photos": 201
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-07-31",
                "sol": 2838,
                "total_photos": 147
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-01",
                "sol": 2839,
                "total_photos": 77
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-08-02",
                "sol": 2840,
                "total_photos": 518
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-03",
                "sol": 2841,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-04",
                "sol": 2842,
                "total_photos": 301
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-05",
                "sol": 2843,
                "total_photos": 68
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-08-06",
                "sol": 2844,
                "total_photos": 12
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-07",
                "sol": 2845,
                "total_photos": 393
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-08-08",
                "sol": 2846,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-09",
                "sol": 2847,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-10",
                "sol": 2848,
                "total_photos": 79
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-11",
                "sol": 2849,
                "total_photos": 50
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-12",
                "sol": 2850,
                "total_photos": 300
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-13",
                "sol": 2851,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-14",
                "sol": 2852,
                "total_photos": 178
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-15",
                "sol": 2853,
                "total_photos": 275
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-16",
                "sol": 2854,
                "total_photos": 53
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-08-17",
                "sol": 2855,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-18",
                "sol": 2856,
                "total_photos": 47
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2020-08-19",
                "sol": 2857,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-20",
                "sol": 2858,
                "total_photos": 65
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-21",
                "sol": 2859,
                "total_photos": 50
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-08-22",
                "sol": 2860,
                "total_photos": 137
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-23",
                "sol": 2861,
                "total_photos": 295
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-24",
                "sol": 2862,
                "total_photos": 225
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-25",
                "sol": 2863,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-26",
                "sol": 2864,
                "total_photos": 279
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-27",
                "sol": 2865,
                "total_photos": 114
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-28",
                "sol": 2866,
                "total_photos": 140
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-29",
                "sol": 2867,
                "total_photos": 277
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-08-30",
                "sol": 2868,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-08-31",
                "sol": 2869,
                "total_photos": 184
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-01",
                "sol": 2870,
                "total_photos": 109
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-02",
                "sol": 2871,
                "total_photos": 330
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-09-03",
                "sol": 2872,
                "total_photos": 32
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-04",
                "sol": 2873,
                "total_photos": 317
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-06",
                "sol": 2874,
                "total_photos": 191
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-09-07",
                "sol": 2875,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-09-08",
                "sol": 2876,
                "total_photos": 43
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-09",
                "sol": 2877,
                "total_photos": 272
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-10",
                "sol": 2878,
                "total_photos": 355
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-09-11",
                "sol": 2879,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-12",
                "sol": 2880,
                "total_photos": 51
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-13",
                "sol": 2881,
                "total_photos": 52
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-14",
                "sol": 2882,
                "total_photos": 304
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-15",
                "sol": 2883,
                "total_photos": 112
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-16",
                "sol": 2884,
                "total_photos": 178
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-09-17",
                "sol": 2885,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-18",
                "sol": 2886,
                "total_photos": 54
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-19",
                "sol": 2887,
                "total_photos": 52
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-09-20",
                "sol": 2888,
                "total_photos": 26
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-21",
                "sol": 2889,
                "total_photos": 262
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-22",
                "sol": 2890,
                "total_photos": 59
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-23",
                "sol": 2891,
                "total_photos": 377
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2020-09-24",
                "sol": 2892,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-25",
                "sol": 2893,
                "total_photos": 204
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-26",
                "sol": 2894,
                "total_photos": 67
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-27",
                "sol": 2895,
                "total_photos": 112
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-28",
                "sol": 2896,
                "total_photos": 26
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-29",
                "sol": 2897,
                "total_photos": 24
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-09-30",
                "sol": 2898,
                "total_photos": 211
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-01",
                "sol": 2899,
                "total_photos": 8
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-02",
                "sol": 2900,
                "total_photos": 110
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-03",
                "sol": 2901,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-04",
                "sol": 2902,
                "total_photos": 76
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-05",
                "sol": 2903,
                "total_photos": 116
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-06",
                "sol": 2904,
                "total_photos": 242
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-07",
                "sol": 2905,
                "total_photos": 45
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-08",
                "sol": 2906,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-09",
                "sol": 2907,
                "total_photos": 363
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-10",
                "sol": 2908,
                "total_photos": 66
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-11",
                "sol": 2909,
                "total_photos": 221
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-12",
                "sol": 2910,
                "total_photos": 116
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-14",
                "sol": 2911,
                "total_photos": 202
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-15",
                "sol": 2912,
                "total_photos": 31
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-16",
                "sol": 2913,
                "total_photos": 108
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-17",
                "sol": 2914,
                "total_photos": 297
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-18",
                "sol": 2915,
                "total_photos": 40
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-19",
                "sol": 2916,
                "total_photos": 318
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-20",
                "sol": 2917,
                "total_photos": 34
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2020-10-21",
                "sol": 2918,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-22",
                "sol": 2919,
                "total_photos": 98
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-23",
                "sol": 2920,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-24",
                "sol": 2921,
                "total_photos": 93
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-25",
                "sol": 2922,
                "total_photos": 286
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-26",
                "sol": 2923,
                "total_photos": 278
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-27",
                "sol": 2924,
                "total_photos": 438
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-28",
                "sol": 2925,
                "total_photos": 141
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-29",
                "sol": 2926,
                "total_photos": 271
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-30",
                "sol": 2927,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-10-31",
                "sol": 2928,
                "total_photos": 120
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-01",
                "sol": 2929,
                "total_photos": 411
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-02",
                "sol": 2930,
                "total_photos": 51
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-03",
                "sol": 2931,
                "total_photos": 366
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-04",
                "sol": 2932,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-05",
                "sol": 2933,
                "total_photos": 549
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-06",
                "sol": 2934,
                "total_photos": 71
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-07",
                "sol": 2935,
                "total_photos": 118
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-08",
                "sol": 2936,
                "total_photos": 341
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-09",
                "sol": 2937,
                "total_photos": 292
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-10",
                "sol": 2938,
                "total_photos": 675
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-11",
                "sol": 2939,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-12",
                "sol": 2940,
                "total_photos": 503
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-13",
                "sol": 2941,
                "total_photos": 97
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-14",
                "sol": 2942,
                "total_photos": 171
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-15",
                "sol": 2943,
                "total_photos": 767
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-16",
                "sol": 2944,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-17",
                "sol": 2945,
                "total_photos": 610
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-18",
                "sol": 2946,
                "total_photos": 215
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-20",
                "sol": 2947,
                "total_photos": 541
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-21",
                "sol": 2948,
                "total_photos": 23
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-22",
                "sol": 2949,
                "total_photos": 131
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-23",
                "sol": 2950,
                "total_photos": 669
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-24",
                "sol": 2951,
                "total_photos": 637
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-25",
                "sol": 2952,
                "total_photos": 20
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-26",
                "sol": 2953,
                "total_photos": 35
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-27",
                "sol": 2954,
                "total_photos": 223
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-28",
                "sol": 2955,
                "total_photos": 171
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-29",
                "sol": 2956,
                "total_photos": 512
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-11-30",
                "sol": 2957,
                "total_photos": 31
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-01",
                "sol": 2958,
                "total_photos": 542
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-02",
                "sol": 2959,
                "total_photos": 173
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-03",
                "sol": 2960,
                "total_photos": 29
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-04",
                "sol": 2961,
                "total_photos": 53
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-05",
                "sol": 2962,
                "total_photos": 33
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-06",
                "sol": 2963,
                "total_photos": 36
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-07",
                "sol": 2964,
                "total_photos": 191
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-08",
                "sol": 2965,
                "total_photos": 528
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-09",
                "sol": 2966,
                "total_photos": 108
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-10",
                "sol": 2967,
                "total_photos": 701
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-11",
                "sol": 2968,
                "total_photos": 80
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-12",
                "sol": 2969,
                "total_photos": 154
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-13",
                "sol": 2970,
                "total_photos": 388
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-14",
                "sol": 2971,
                "total_photos": 11
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-15",
                "sol": 2972,
                "total_photos": 410
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-16",
                "sol": 2973,
                "total_photos": 16
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-17",
                "sol": 2974,
                "total_photos": 270
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-18",
                "sol": 2975,
                "total_photos": 314
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-19",
                "sol": 2976,
                "total_photos": 34
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-20",
                "sol": 2977,
                "total_photos": 200
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-21",
                "sol": 2978,
                "total_photos": 74
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-22",
                "sol": 2979,
                "total_photos": 462
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-23",
                "sol": 2980,
                "total_photos": 49
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2020-12-29",
                "sol": 2985,
                "total_photos": 51
            },
            {
                "cameras": [
                    "NAVCAM"
                ],
                "earth_date": "2020-12-30",
                "sol": 2986,
                "total_photos": 14
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-02",
                "sol": 2989,
                "total_photos": 155
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-03",
                "sol": 2990,
                "total_photos": 344
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-04",
                "sol": 2991,
                "total_photos": 318
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-05",
                "sol": 2992,
                "total_photos": 436
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-06",
                "sol": 2993,
                "total_photos": 139
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-07",
                "sol": 2994,
                "total_photos": 150
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-08",
                "sol": 2995,
                "total_photos": 224
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-01-09",
                "sol": 2996,
                "total_photos": 6
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-10",
                "sol": 2997,
                "total_photos": 149
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-11",
                "sol": 2998,
                "total_photos": 156
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-12",
                "sol": 2999,
                "total_photos": 187
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-13",
                "sol": 3000,
                "total_photos": 216
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-14",
                "sol": 3001,
                "total_photos": 287
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-15",
                "sol": 3002,
                "total_photos": 84
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-16",
                "sol": 3003,
                "total_photos": 46
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-17",
                "sol": 3004,
                "total_photos": 103
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-18",
                "sol": 3005,
                "total_photos": 627
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-19",
                "sol": 3006,
                "total_photos": 20
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-20",
                "sol": 3007,
                "total_photos": 163
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-21",
                "sol": 3008,
                "total_photos": 659
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-22",
                "sol": 3009,
                "total_photos": 29
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-23",
                "sol": 3010,
                "total_photos": 343
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-24",
                "sol": 3011,
                "total_photos": 465
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-25",
                "sol": 3012,
                "total_photos": 72
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-26",
                "sol": 3013,
                "total_photos": 479
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-27",
                "sol": 3014,
                "total_photos": 102
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-28",
                "sol": 3015,
                "total_photos": 505
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-29",
                "sol": 3016,
                "total_photos": 143
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-30",
                "sol": 3017,
                "total_photos": 477
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-01-31",
                "sol": 3018,
                "total_photos": 699
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-02-01",
                "sol": 3019,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-03",
                "sol": 3020,
                "total_photos": 438
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-04",
                "sol": 3021,
                "total_photos": 235
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-05",
                "sol": 3022,
                "total_photos": 637
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-06",
                "sol": 3023,
                "total_photos": 190
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-07",
                "sol": 3024,
                "total_photos": 190
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-08",
                "sol": 3025,
                "total_photos": 473
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-09",
                "sol": 3026,
                "total_photos": 404
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-10",
                "sol": 3027,
                "total_photos": 497
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-11",
                "sol": 3028,
                "total_photos": 523
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-12",
                "sol": 3029,
                "total_photos": 39
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-13",
                "sol": 3030,
                "total_photos": 534
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-14",
                "sol": 3031,
                "total_photos": 181
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-15",
                "sol": 3032,
                "total_photos": 443
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-16",
                "sol": 3033,
                "total_photos": 44
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-17",
                "sol": 3034,
                "total_photos": 272
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-18",
                "sol": 3035,
                "total_photos": 177
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-19",
                "sol": 3036,
                "total_photos": 391
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-20",
                "sol": 3037,
                "total_photos": 201
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-21",
                "sol": 3038,
                "total_photos": 236
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-22",
                "sol": 3039,
                "total_photos": 294
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-23",
                "sol": 3040,
                "total_photos": 485
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-24",
                "sol": 3041,
                "total_photos": 55
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-25",
                "sol": 3042,
                "total_photos": 333
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-26",
                "sol": 3043,
                "total_photos": 115
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-27",
                "sol": 3044,
                "total_photos": 373
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-02-28",
                "sol": 3045,
                "total_photos": 462
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-01",
                "sol": 3046,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-02",
                "sol": 3047,
                "total_photos": 661
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-03",
                "sol": 3048,
                "total_photos": 187
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-04",
                "sol": 3049,
                "total_photos": 547
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-05",
                "sol": 3050,
                "total_photos": 112
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-06",
                "sol": 3051,
                "total_photos": 456
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-07",
                "sol": 3052,
                "total_photos": 185
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-03-08",
                "sol": 3053,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-09",
                "sol": 3054,
                "total_photos": 235
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-10",
                "sol": 3055,
                "total_photos": 188
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-12",
                "sol": 3056,
                "total_photos": 60
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-13",
                "sol": 3057,
                "total_photos": 417
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-14",
                "sol": 3058,
                "total_photos": 237
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-15",
                "sol": 3059,
                "total_photos": 457
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-16",
                "sol": 3060,
                "total_photos": 261
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-17",
                "sol": 3061,
                "total_photos": 228
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-18",
                "sol": 3062,
                "total_photos": 134
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-19",
                "sol": 3063,
                "total_photos": 122
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-03-20",
                "sol": 3064,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-21",
                "sol": 3065,
                "total_photos": 40
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-22",
                "sol": 3066,
                "total_photos": 199
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-23",
                "sol": 3067,
                "total_photos": 124
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-24",
                "sol": 3068,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-25",
                "sol": 3069,
                "total_photos": 216
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-26",
                "sol": 3070,
                "total_photos": 128
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-27",
                "sol": 3071,
                "total_photos": 90
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-28",
                "sol": 3072,
                "total_photos": 379
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-29",
                "sol": 3073,
                "total_photos": 70
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-30",
                "sol": 3074,
                "total_photos": 219
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-03-31",
                "sol": 3075,
                "total_photos": 23
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-01",
                "sol": 3076,
                "total_photos": 586
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-02",
                "sol": 3077,
                "total_photos": 37
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-03",
                "sol": 3078,
                "total_photos": 173
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-04",
                "sol": 3079,
                "total_photos": 373
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-05",
                "sol": 3080,
                "total_photos": 41
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-06",
                "sol": 3081,
                "total_photos": 531
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-07",
                "sol": 3082,
                "total_photos": 42
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-08",
                "sol": 3083,
                "total_photos": 452
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-09",
                "sol": 3084,
                "total_photos": 53
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-10",
                "sol": 3085,
                "total_photos": 331
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-11",
                "sol": 3086,
                "total_photos": 508
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-04-12",
                "sol": 3087,
                "total_photos": 4
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-13",
                "sol": 3088,
                "total_photos": 425
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-14",
                "sol": 3089,
                "total_photos": 48
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-15",
                "sol": 3090,
                "total_photos": 245
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-16",
                "sol": 3091,
                "total_photos": 296
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-18",
                "sol": 3092,
                "total_photos": 337
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-19",
                "sol": 3093,
                "total_photos": 293
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-20",
                "sol": 3094,
                "total_photos": 111
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-21",
                "sol": 3095,
                "total_photos": 215
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-22",
                "sol": 3096,
                "total_photos": 357
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-04-23",
                "sol": 3097,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2021-04-24",
                "sol": 3098,
                "total_photos": 12
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2021-04-25",
                "sol": 3099,
                "total_photos": 330
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-26",
                "sol": 3100,
                "total_photos": 342
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-27",
                "sol": 3101,
                "total_photos": 444
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-28",
                "sol": 3102,
                "total_photos": 128
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-29",
                "sol": 3103,
                "total_photos": 277
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-04-30",
                "sol": 3104,
                "total_photos": 56
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-01",
                "sol": 3105,
                "total_photos": 107
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-02",
                "sol": 3106,
                "total_photos": 178
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-03",
                "sol": 3107,
                "total_photos": 68
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-04",
                "sol": 3108,
                "total_photos": 140
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-05",
                "sol": 3109,
                "total_photos": 215
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-06",
                "sol": 3110,
                "total_photos": 400
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-07",
                "sol": 3111,
                "total_photos": 57
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-08",
                "sol": 3112,
                "total_photos": 259
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-09",
                "sol": 3113,
                "total_photos": 293
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-10",
                "sol": 3114,
                "total_photos": 33
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-11",
                "sol": 3115,
                "total_photos": 340
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-12",
                "sol": 3116,
                "total_photos": 47
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-13",
                "sol": 3117,
                "total_photos": 234
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-14",
                "sol": 3118,
                "total_photos": 140
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-15",
                "sol": 3119,
                "total_photos": 450
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-16",
                "sol": 3120,
                "total_photos": 386
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-17",
                "sol": 3121,
                "total_photos": 38
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-18",
                "sol": 3122,
                "total_photos": 241
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-19",
                "sol": 3123,
                "total_photos": 64
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2021-05-20",
                "sol": 3124,
                "total_photos": 62
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-21",
                "sol": 3125,
                "total_photos": 389
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-05-22",
                "sol": 3126,
                "total_photos": 70
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-23",
                "sol": 3127,
                "total_photos": 117
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-24",
                "sol": 3128,
                "total_photos": 194
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-05-26",
                "sol": 3129,
                "total_photos": 4
            },
            {
                "cameras": [
                    "FHAZ",
                    "RHAZ"
                ],
                "earth_date": "2021-05-27",
                "sol": 3130,
                "total_photos": 88
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-28",
                "sol": 3131,
                "total_photos": 100
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-29",
                "sol": 3132,
                "total_photos": 38
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-30",
                "sol": 3133,
                "total_photos": 18
            },
            {
                "cameras": [
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-05-31",
                "sol": 3134,
                "total_photos": 33
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "RHAZ"
                ],
                "earth_date": "2021-06-01",
                "sol": 3135,
                "total_photos": 6
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-02",
                "sol": 3136,
                "total_photos": 379
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-03",
                "sol": 3137,
                "total_photos": 369
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-04",
                "sol": 3138,
                "total_photos": 303
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-05",
                "sol": 3139,
                "total_photos": 276
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-06",
                "sol": 3140,
                "total_photos": 369
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-07",
                "sol": 3141,
                "total_photos": 104
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-08",
                "sol": 3142,
                "total_photos": 176
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-09",
                "sol": 3143,
                "total_photos": 312
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-10",
                "sol": 3144,
                "total_photos": 233
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-11",
                "sol": 3145,
                "total_photos": 427
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-12",
                "sol": 3146,
                "total_photos": 145
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAHLI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-13",
                "sol": 3147,
                "total_photos": 445
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-14",
                "sol": 3148,
                "total_photos": 62
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-15",
                "sol": 3149,
                "total_photos": 502
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-16",
                "sol": 3150,
                "total_photos": 119
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-17",
                "sol": 3151,
                "total_photos": 484
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-18",
                "sol": 3152,
                "total_photos": 127
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "MAST",
                    "RHAZ"
                ],
                "earth_date": "2021-06-19",
                "sol": 3153,
                "total_photos": 427
            },
            {
                "cameras": [
                    "FHAZ",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-20",
                "sol": 3154,
                "total_photos": 676
            },
            {
                "cameras": [
                    "FHAZ",
                    "MARDI",
                    "MAST",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-21",
                "sol": 3155,
                "total_photos": 156
            },
            {
                "cameras": [
                    "CHEMCAM",
                    "FHAZ",
                    "NAVCAM",
                    "RHAZ"
                ],
                "earth_date": "2021-06-22",
                "sol": 3156,
                "total_photos": 181
            }
        ],
        "status": "active",
        "total_photos": 501811
    }
}

