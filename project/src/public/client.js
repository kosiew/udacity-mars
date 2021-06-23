let store = {
    user: { name: "Student" },
    apod: '',
    rovers: ['Curiosity', 'Opportunity', 'Spirit'],
}

const d = (function () {
    const debug = false;

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
            console.log(`%c message`, _styles);        }
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
            <h2>Mars Rovers Explorer</h2> 
        </header>
        <main>
            ${Greeting(store.user.name)}
            <section>
                <h3>Put things on the page!</h3>
                <p>Here is an example section.</p>
                <p>
                    One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of
                    the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.
                    This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other
                    applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image
                    explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds;
                    but generally help with discoverability of relevant imagery.
                </p>
                ${ImageOfTheDay(apod)}
            </section>
        </main>
        <form id="dino-compare">
            <div class="form-container">
                <p>Name:</p>
                <input id="name" class="form-field__full" type="name" name="name">
                <p>Height</p>
                <label>Feet: <input id="feet" class="form-field__short" type="number" name="feet"></label>
                <label>inches: <input id="inches" class="form-field__short" type="number" name="inches"></label>
                <p>Weight:</p>
                <label><input id="weight" class="form-field__full" type="number" name="weight">lbs</label>
                <p>Diet:</p>
                <select id="diet" class="form-field__full" name="diet">
                    <option>Herbavor</option>
                    <option>Omnivor</option>
                    <option>Carnivor</option>
                </select>
                <div id="btn">Compare Me!</div>
            </div>
        </form>
    <!-- .grid to attach tiles to -->
    <main id="grid"></main>

        <footer></footer>
    `
}

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
    render(root, store)
})

// ------------------------------------------------------  COMPONENTS

// Pure function that renders conditional information -- THIS IS JUST AN EXAMPLE, you can delete it.
const Greeting = (name) => {
    if (name) {
        return `
            <h1>Welcome, ${name}!</h1>
        `
    }

    return `
        <h1>Hello!</h1>
    `
}

// Example of a pure function that renders infomation requested from the backend
const ImageOfTheDay = (apod) => {
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
    const mediaType = apod.image.media_type;
    const url = apod.image.url;
    d.log(`url ${url}`);

    d.groupEnd();
    d.groupEnd();

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

// ------------------------------------------------------  API CALLS

// Example API call
const getImageOfTheDay = (state) => {
    let { apod } = state

    fetch(`http://localhost:3000/apod`)
        .then(res => res.json())
        .then(apod => updateStore(store, { apod }))

}
