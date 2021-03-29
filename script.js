var friendsList = [ 
  {
    friendName: "Michele",
    friendImg: "img/avatar_2.jpg",
    friendMessagges: [],
  },
  {
    friendName: "Fabio",
    friendImg: "img/avatar_3.jpg",
    friendMessagges: [],
  },
  {
    friendName: "Samuele",
    friendImg: "img/avatar_4.jpg",
    friendMessagges: [],
  },
  {
    friendName: "Luisa",
    friendImg: "img/avatar_5.jpg",
    friendMessagges: [],
  },
];

function filterNames(obj) {
  let arr = obj.filter(e => e.friendName.toLowerCase().startsWith("m"))
  return arr
}

console.log(filterNames(friendsList))