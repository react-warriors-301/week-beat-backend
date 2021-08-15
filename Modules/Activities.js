const axios = require('axios');

async function getActivity(req, res) {
    const type = req.query.type;
    const min =req.query.minprice/100;
    const max =req.query.maxprice/100;





    const URL = `http://www.boredapi.com/api/activity?type=${type}&minprice=${min}&maxprice=${max}`;
    axios
        .get(URL)
        .then(result => {
            let activityArray = result.data
            console.log('inside promise');
            console.log(URL)
            res.send(activityArray);
        })
        .catch(err => {
            res.status(500).json({ message: "some reason error message", err: 400 })
        })
    console.log('outside promise');

}




module.exports = getActivity;