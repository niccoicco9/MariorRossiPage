var Name = {
    title: 'mr.',
    first: 'Mario',
    last: 'Rossi'
}

var Location = {
    street: 'Corso como',
    city: 'Milano',
    state: 'Italia',
    postcode: 20100
}

var Login = {
    username: 'mario',
    password: '1234',
    salt: 'gaegaegadvaasf',
    md5: 6342234,
    sha1: 'bvsbwr4345653',
    sha256: 'sdgsntdhergwefa34'
}

var Id = {
    name: 'mrx',
    value: '34'
}
var Picture = {
    large: "https://randomuser.me/api/portraits/men/83.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
}
var Persona = {
    gender: 'male',
    name: Name,
    location: Location,
    email: 'mariorossi@gmail.com',
    login: Login,
    dob: '1995-03-12 07:29:45',
    registered: '2005-03-12 07:29:45',
    phone: '+39 02 4882705',
    cell: '+39 331 4885634',
    id: Id,
    picture: Picture,
    nat: 'It',
    setNation: function(nazione){
        this.nat= nazione;
    }
}

var getRandomUser = function (nazione){
    var tempP= Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;
}
console.log(getRandomUser('uk').nat);

function extractRandomUser(nazione) {
    var tempP= Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;
}
