function request(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 & xhr.status == 200) {
      cb(JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
}

function createDomTable(data) {
  var spots = data;
  var table = document.getElementById('spotsTable');
  spots.forEach(function (spot) {
    var row = document.createElement('tr');
    var name = document.createElement('td');
    name.textContent = spot.dog_name;
    row.appendChild(name);
    var breed = document.createElement('td');
    breed.textContent = spot.dog_breed;
    row.appendChild(breed);
    var park = document.createElement('td');
    park.textContent = spot.park_name;
    row.appendChild(park);
    table.appendChild(row);
  })
}

request('/spots', createDomTable);