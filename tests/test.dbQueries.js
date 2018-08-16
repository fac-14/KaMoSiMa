const tape = require('tape');
const dbQuery = require('../src/dbQueries.js');

const dbBuild = require('../db/db_build');

tape('check tape is working', (t) => {
    t.equal(2 + 2, 4, '2+2=4');
    t.end();
});

tape("getData", t => {
    dbBuild((err, res) => {
        t.error(err, 'No error');

        dbQuery.getDoggo((err, res) => {
            if (err) { console.log("Balls!"); }
            let actual = res.rows;
            let expected = [{
                dog_name: 'Fenton',
                dog_breed: 'Labrador',
                park_name: 'Richmond Park'
            },
            {
                dog_name: 'Mackerel',
                dog_breed: 'Beagle',
                park_name: 'Victoria Park'
            },
            {
                dog_name: 'Mackerel',
                dog_breed: 'Beagle',
                park_name: 'Finsbury Park'
            },
            {
                dog_name: 'Spot',
                dog_breed: 'Beagle',
                park_name: 'Hampstead Heath'
            }];
            t.deepEqual(actual, expected, "Returned Four Great Dogs!");
            t.end();
        })
    });
});

tape("getData", t => {
    dbBuild((err, res) => {
        t.error(err, 'No error');
        dbQuery.storePassword('monika', true, 'wehey', 'monika@monika.com')
        console.log(res);
        t.end();
    })
})