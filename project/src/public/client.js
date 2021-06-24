let store = {
    user: { name: "Student" },
    apod: '',
    date: false,
    rover: false,
    images: [],
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
}

// for debugging
const d = (function () {
    const debug = true;

    function log(message, level=0) {
        if (debug) {
            const styles = [
                'border: 1px solid #3E0E02'
                , 'color: white'
                , 'display: block'
                , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
                , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
                , 'line-height: 20px'
                , 'text-align: center'
                , 'font-weight: bold'
            ];
    
            if (level==0) {
                styles.push('background: linear-gradient(#060dd3, #040647)');
            } else {
                styles.push('background: linear-gradient(#D33106, #571402)');
            }
            
            const _styles = styles.join(';');
            console.log(`%c ${message}`, _styles);        }
    }

    function group(groupName = 'default') {
        if (debug) {
            console.group(groupName);
        }
    }

    function groupEnd() {
        if (debug) {
            console.groupEnd();
        }
    }

    function table(obj) {
        if (debug) {
            console.table(obj);
        }
    }
        
    return {
        log: log,
        group: group,
        groupEnd: groupEnd,
        table: table

    };
})();


// add our markup to the page
const root = document.getElementById('root')

const updateStore = (store, newState) => {
    d.group('updateStore');
    d.table(newState);
    store = Object.assign(store, newState)
    render(root, store)
    d.groupEnd();
}

const render = async (root, state) => {
    d.log('render');
    root.innerHTML = App(state)
}


// create content
const App = (state) => {
    const { rovers, apod, images, rover, date } = state

    d.group('App');
    
    d.group('apod');
    d.table(apod);
    d.groupEnd();
    
    d.group('images');
    d.table(images);
    d.groupEnd();

    d.groupEnd();

    return `
        <header>
            <h1>Mars Rovers Explorer</h1> 
        </header>
        <main>
            <section>
                ${ImageOfTheDay(apod)}
            </section>
        </main>
        ${RoverTabs(rovers)}
        <form id="mars">
            <div class="form-container">
                <p>Date: 
                  ${SelectDate()}
                </p>
            </div>
        </form>
        <section>
            ${Rover(rover, date)}
        </section>

    <!-- .grid to attach tiles to -->
    <section id="grid">
        ${Images(images)}
    </section>

        <footer></footer>
    `
}

function getFormData() {
    d.group('getFormData');
    const form = document.getElementById('mars');
    const formData = new FormData(form);
    const entries = formData.entries();
    const data = {}
    for (const pair of formData.entries()) {
        data[pair[0]] = pair[1];
    }
    d.table(data);
    updateStore(store, data);
    getRoverImages(store);
    d.groupEnd();
}

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
    d.log('load - render');
    render(root, store);
})

function padZero(s, length) {
    return (`0` + s).slice(-length);
}

function selectRover(rover) {
    d.group('selectRover');
    updateStore(store, {rover: rover});
    getRoverImages(store);
    d.groupEnd();
}
// ------------------------------------------------------  COMPONENTS

const Images = (images) => {
    if (images.size > 0) {
        const shortImages = images.filter((img, index) => index < 9);
        const _images = shortImages.map((img) => {
            const {camera, earth_date, img_src, rover, sol} = img;
            return `<div class="grid-item"><img src="${img_src}"><p>${camera.full_name}</p></div>`;
        });
        return _images.join('');
    } 
    return '<p>No photos</p>';
    // sample item in list    
    // {
    //     "camera": {
    //         "full_name": "Front Hazard Avoidance Camera",
    //         "id": 20,
    //         "name": "FHAZ",
    //         "rover_id": 5
    //     },
    //     "earth_date": "2021-06-01",
    //     "id": 840263,
    //     "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03135/opgs/edr/fcam/FLB_675798054EDR_F0880366FHAZ00302M_.JPG",
    //     "rover": {
    //         "id": 5,
    //         "landing_date": "2012-08-06",
    //         "launch_date": "2011-11-26",
    //         "name": "Curiosity",
    //         "status": "active"
    //     },
    //     "sol": 3135
    // },
}

const SelectDate = () => {
    const defaultDate = store.date ? store.date : new Date().toISOString().split('T')[0];
    return `<input type="date" name='date' id="date" value="${defaultDate}" onchange="getFormData()"></input>`;
}

const SelectedDate = (selectedDate) => {
    if (selectedDate) {
        const date = new Date(selectedDate);
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1, 2)
        const day = padZero(date.getDate(), 2);
        return `<h1>${year} ${month} ${day}</h1>`        
    }
    return '';
}

const RoverTabs = (rovers) => {
    const selectedRover = store.rover;
    const buttons = rovers.map((rover) => {
        const active = rover == selectRover ? 'active' : '';
        return `<button class="tabllinks ${active}" onclick="selectRover('${rover}')">${rover}</button>`
    });
    return buttons.join(' '); 
}

const Rover = (rover, date) => {
    if (rover && date) {
        return `<h1>${rover} photos ${date}</h1>`;   
    }
    return '';
}

const RoverOptions = () => {
    const rovers = store.rovers;
    const rover = store.rover;
    d.log(rover);
    const options = rovers.map((_rover) => {
        const select = _rover == rover ? 'selected="selected"' : '';
        return `<option ${select}>${_rover}</option>`
    });
    return options.join('');
}

// Pure function that renders conditional information -- THIS IS JUST AN EXAMPLE, you can delete it.
const Greeting = (name) => {
    if (store.rover) {
        return ''
    } else {

        if (name) {
            return `
                <h1>Welcome, ${name}!</h1>
            `
        }

        return `
            <h1>Hello!</h1>
        `
    }
}

// Example of a pure function that renders infomation requested from the backend
const ImageOfTheDay = (apod) => {
    if (store.rover) {
        return '';
    } else {

        d.group('ImageOfTheDay');
        d.table(apod);
        // If image does not already exist, or it is not from today -- request it again
        const today = new Date()
        const photodate = new Date(apod.date)
        d.log(photodate.getDate(), today.getDate());

        d.log(photodate.getDate() === today.getDate());
        if (!apod || apod.date === today.getDate() ) {
            getImageOfTheDay(store)
        }
        d.group('apod.image');
        d.table(apod.image);
        if (apod.image) {
            const mediaType = apod.image.media_type;
            const url = apod.image.url;
            d.log(`url ${url}`);
            // check if the photo of the day is actually type video!
            if (apod.image.media_type === "video") {
                return (`
                    <p>See today's featured video <a href="${url}">here</a></p>
                    <p>${apod.image.title}</p>
                    <p>${apod.image.explanation}</p>
                `)
            } else {
                return (`
                    <img src="${url}" height="350px" width="100%" />
                    <p>${apod.image.explanation}</p>
                `)
            }
        }

        d.groupEnd();
        d.groupEnd();
    }

}

// ------------------------------------------------------  API CALLS

// Example API call
const getImageOfTheDay = (state) => {
    const { apod } = state

    fetch(`http://localhost:3000/apod`)
        .then(res => res.json())
        .then(apod => updateStore(store, { apod }))

}

const getRoverImages = (state) => {
    d.group('getRoverImages');
    const { rover, date } = state;
    fetch(`http://localhost:3000/images?rover=${store.rover}&date=${store.date}`)
        .then(res => res.json())
        .then( json => {
            const {photos} = json;
            if (photos) {
                d.log(`there are ${photos.length} photos`);
                const _photos = Immutable.List(photos);
                updateStore(store, {images: _photos});
            }
        });
    d.groupEnd();
}

