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

function createSpotsTable(data) {
  var element = document.getElementById("table-div");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  var spots = data;
  var table = document.createElement('table');
  table.setAttribute('id', 'spotsTable');
  var tableDiv = document.getElementById('table-div');
  tableDiv.appendChild(table);
  var headingRow = document.createElement('tr');
  table.appendChild(headingRow);
  var dogName = document.createElement('th');
  dogName.textContent = "Dog name";
  headingRow.appendChild(dogName);
  var dogBreed = document.createElement('th');
  dogBreed.textContent = "Dog breed";
  headingRow.appendChild(dogBreed);
  var parkName = document.createElement('th');
  parkName.textContent = "Location";
  headingRow.appendChild(parkName);
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

function createBreedsTable(data) {
  var element = document.getElementById("table-div");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  var table = document.createElement('table');
  table.setAttribute('id', 'BreedsTable');
  var tableDiv = document.getElementById('table-div');
  tableDiv.appendChild(table);
  var headingRow = document.createElement('tr');
  table.appendChild(headingRow);
  var breedName = document.createElement('th');
  breedName.textContent = "Breed name";
  headingRow.appendChild(breedName);
  var breedCount = document.createElement('th');
  breedCount.textContent = "Number of dogs";
  headingRow.appendChild(breedCount);
  data.forEach(function (data) {
    var row = document.createElement('tr');
    var breed = document.createElement('td');
    breed.textContent = data.dog_breed;
    row.appendChild(breed);
    var count = document.createElement('td');
    count.textContent = data.count;
    row.appendChild(count);
    table.appendChild(row);
  })
}

window.onload = request('/spots', createSpotsTable);