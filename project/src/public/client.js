let store = {
    user: { name: "Student" },
    apod: '',
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
                <p>Date: <input type="date" id="date"></p>
                <p>Choose a rover:</p>
                <select id="rover" class="form-field__full" name="rover">
                    ${RoverOptions()}
                </select>
                <div id="btn">Fetch photos</div>
            </div>
        </form>
    <!-- .grid to attach tiles to -->
    <main id="grid"></main>

        <footer></footer>
    `
}

// listening for load event because page should load before any JS is called
window.addEventListener('load', async () => {
    d.log('load - render');
    await render(root, store);
    const btn = document.getElementById('btn');
    d.log('binding btn event');
    if (btn != null) {
        btn.addEventListener('click', (function() {
            return function() {
                const formData = new FormData(document.getElementById('mars'));
                const h = {}
                for (const pair of formData.entries()) {
                    h[pair[0]] = pair[1];
                }
                d.log(h.date, d.rover);
            };
        })());
            
    }

})

// ------------------------------------------------------  COMPONENTS

const RoverOptions = () => {
    const rovers = store.rovers;
    const options = rovers.map((rover) => `<option>${rover}</option>`);
    return options.join('');
}

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

