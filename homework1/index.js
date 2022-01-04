import getData, {getMessage} from "./app.js";

getMessage();
getData(2)
    .then(r => console.log(r));