var listOfSongs = new Map();
listOfSongs.set("happy", ["happy1.mp3", "happy2.mp3", "happy3.mp3", "happy4.mp3", "happy5.mp3"]);
listOfSongs.set("love", ["love1.mp3", "love2.mp3", "love3.mp3", "love4.mp3", "love5.mp3"]);
listOfSongs.set("sad", ["sad1.mp3", "sad2.mp3", "sad3.mp3", "sad4.mp3", "sad5.mp3"]);
listOfSongs.set("chill", ["chill1.mp3", "chill2.mp3", "chill3.mp3", "chill4.mp3", "chill5.mp3"]);
listOfSongs.set("lonely", ["lonely1.mp3", "lonely2.mp3", "lonely3.mp3", "lonely4.mp3", "lonely5.mp3"]);
listOfSongs.set("travel", ["travel1.mp3", "travel2.mp3", "travel3.mp3", "travel4.mp3", "travel5.mp3"]);
var song1 = new Audio('music/happy/happy1.mp3');
function playSong(mood,index){
  console.log(listOfSongs);
  song1.pause();
  song1= new Audio("music/" + mood + "/" + (listOfSongs.get(mood))[index]);
  song1.play();
}
