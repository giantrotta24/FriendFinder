const path = require('path');

const friendData = require("../data/friends");


module.exports = (app) => {
    
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        console.log(newFriend);
        let userAnswers = newFriend.scores;
        console.log(userAnswers);

        //matchup
        let name = '';
        let photo = '';
        let totalDifference = 10000;

        for (let i = 0; i < friendData.length; i++) {
            let difference = 0;
            for (let x = 0; x < userAnswers.length; x++) {
                difference += Math.abs(friendData[i].scores[x] - userAnswers[x]);
            }

            if (difference < totalDifference) {
                console.log(friendData[i]);
                totalDifference = difference;
                name = friendData[i].name;
                photo = friendData[i].photo;
            }
        }

        friendData.push(newFriend);
        res.json({status: 'OK', name: name, photo: photo});
    });

}
