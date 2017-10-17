
const {createStore} = window.Redux;
const {Provider} = window.ReactRedux;

// specify the application title
const APPLICATION_TITLE = "React Task List LENZ";

// acclaim debug console and set page title
console.log(APPLICATION_TITLE);
document.title = APPLICATION_TITLE;

// create reducer store
const store = createStore(taskListReducer);

store.dispatch(createAction("Milch kaufen"));
store.dispatch(createAction("Brownies backen"));
store.dispatch(createAction("Wäsche waschen"));
store.dispatch(createAction("Workshop vorbereiten"));

// reference the main container
let mainContainer = document.getElementById("mainContainer");

// render the App component into the main container
ReactDOM.render(

    <Provider store={store}>

        <App
            title={APPLICATION_TITLE}
        />

    </Provider>,
    mainContainer
);
