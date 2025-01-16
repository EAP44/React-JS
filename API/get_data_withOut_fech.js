const https = require('https');

async function getTotalGoals(team, year) {
    const fetchData = (url) =>
        new Promise((resolve, reject) => {
            https.get(url, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            }).on('error', (err) => {
                reject(err);
            });
        });

    let totalGoals = 0;

    try {
        for (let page = 1; ; page++) {
            const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${page}`;
            const data = await fetchData(url);

            if (data.data.length === 0) break;

            totalGoals += data.data.reduce((sum, match) => sum + parseInt(match.team1goals, 10), 0);
        }

        for (let page = 1; ; page++) {
            const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${page}`;
            const data = await fetchData(url);

            if (data.data.length === 0) break;

            totalGoals += data.data.reduce((sum, match) => sum + parseInt(match.team2goals, 10), 0);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return totalGoals;
}
