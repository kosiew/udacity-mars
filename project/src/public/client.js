let store = {
    user: { name: "Student" },
    apod: '',
    rover: false,
    images: {},
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
    let { rovers, apod } = state

    d.group('App');
    d.table(apod);
    d.groupEnd();

    return `
        <header>
            <h1>Mars Rovers Explorer</h1> 
        </header>
        <main>
            ${Greeting(store.user.name)}
            <section>
                ${ImageOfTheDay(apod)}
            </section>
        </main>
        <form id="mars">
            <div class="form-container">
                <p>Date: 
                  ${SelectDate()}
                </p>
                <p>Choose a rover:</p>
                <select id="rover" class="form-field__full" name="rover">
                    ${RoverOptions()}
                </select>
                <div id="btn" onclick="getFormData()">Fetch photos</div>
            </div>
        </form>
        <section>
            ${Rover()}
        </section>
        <section>
            ${SelectedDate()}
        </section>

    <!-- .grid to attach tiles to -->
    <main id="grid"></main>

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
    d.groupEnd();
    updateStore(store, data);
    getRoverImages(store);
}

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
    d.log('load - render');
    render(root, store);
})

function padZero(s, length) {
    return (`0` + s).slice(-length);
}
// ------------------------------------------------------  COMPONENTS
const SelectDate = () => {
    const defaultDate = store.date ? store.date : new Date().toISOString().split('T')[0];
    return `<input type="date" name='date' id="date" value="${defaultDate}"></input>`;
}

const SelectedDate = () => {
    const selectedDate = store.date;
    if (selectedDate) {
        const date = new Date(selectedDate);
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1, 2)
        const day = padZero(date.getDate(), 2);
        return `<h1>${year} ${month} ${day}</h1>`        
    }
    return '';
}

const Rover = () => {
    const rover = store.rover;
    if (rover) {
        return `<h1>${rover}</h1>`;   
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
    let { apod } = state

    fetch(`http://localhost:3000/apod`)
        .then(res => res.json())
        .then(apod => updateStore(store, { apod }))

}

const getRoverImages = (state) => {
    const { rover, date } = state;
    fetch(`https://localhost:3000/rover?rover=${store.rover}&date=${store.date}`)
        .then(res => res.json())
        .then( images => updateStore(store, { images }));
}

