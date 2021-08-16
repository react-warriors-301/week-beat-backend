
const axios = require('axios');

async function getEvents(req, res) {
    const country = req.query.country;
    const URL = `https://serpapi.com/search.json?engine=google_events&q=Events+in+${country}&hl=en&gl=us&api_key=${process.env.EVENT_API}`;

    
    axios
        .get(URL)
        .then(result => {
            let eventsArray = result.data
            console.log('inside promise');
            console.log(URL)
            res.send(eventsObject(eventsArray));
        })
        .catch(err => {
            res.status(500).json({ message: "some reason error message", err: 400 })
        })
    console.log('outside promise');

}


const eventsObject = (eventsArr) => {
    const eventsObj = [];

    let event = eventsArr.events_results;
    event.map((element => {
        console.log(element);
        let title = element.title
        let date = element.date;
        let address = element.address;
        let link = element.link;
        let thumbnail = element.thumbnail;
        eventsObj.push(new Event(title, date, address, link, thumbnail));

    }))
 return eventsObj;

};

class Event {
    constructor(title, date, address, link, thumbnail) {

        this.title = title,
            this.date = date,
            this.address = address,
            this.link = link,
            this.thumbnail = thumbnail
    }
}

module.exports = getEvents;