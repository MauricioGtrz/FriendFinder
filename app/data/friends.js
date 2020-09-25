// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// ===============================================================================

var friends = [
  {
    name: "SpongeBob",
    photo:
      "https://vignette.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190921125147",
    scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"],
  },
  {
    name: "Squidward",
    photo:
      "https://vignette.wikia.nocookie.net/spongebob/images/0/05/Squidward_stock_art.png/revision/latest?cb=20190921125123",
    scores: ["4", "2", "5", "1", "3", "2", "2", "1", "3", "2"],
  },
  {
    name: "Plankton",
    photo:
      "https://vignette.wikia.nocookie.net/spongebob/images/7/77/Plankton_stock_art.png/revision/latest?cb=20181202012432",
    scores: ["5", "2", "2", "2", "4", "1", "3", "2", "5", "5"],
  },
  {
    name: "Sandy Cheeks",
    photo:
      "https://vignette.wikia.nocookie.net/spongebob/images/8/84/Sandy_stock_art.png/revision/latest?cb=20200407131514",
    scores: ["3", "3", "4", "2", "2", "1", "3", "2", "2", "3"],
  },
  {
    name: "Patrick",
    photo:
      "https://vignette.wikia.nocookie.net/spongebob/images/5/5d/Patrick_stock_art.png/revision/latest?cb=20181202012306",
    scores: ["4", "3", "4", "1", "5", "2", "5", "3", "1", "4"],
  },
  {
    name: "Gary",
    photo:
      "https://vignette.wikia.nocookie.net/spongebob/images/9/9e/Gary_looking_up_stock_art.png/revision/latest?cb=20181227162221",
    scores: ["4", "4", "2", "3", "2", "2", "3", "2", "4", "5"],
  },
];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
