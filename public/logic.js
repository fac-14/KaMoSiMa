function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 & xhr.status == 200) {
            cb(null, JSON.parse(xhr.responseText));
        } else {
            cb("Error", xhr.responseType);
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

function createDomTable(err, data) {
    if (err) {
        console.log('Error: ', err);
    } else {
        var spots = data;
        var table = document.getElementById('spotsTable');
        spots.forEach(function(spot) {
            var row = document.createElement('tr');
            var name = document.createElement('td');
            name.textContent = spots.dog_name;
            row.appendChild(name);
            var breed = document.createElement('td');
            breed.textContent = spots.dog_breed;
            row.appendChild(breed);
            var park = document.createElement('td');
            park.textContent = spots.park_name;
            row.appendChild(park);
            table.appendChild(row);
        })
    }
}

request('/spots', createDomTable);