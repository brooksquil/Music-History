"use strict";
console.log("Main.js");



var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// console.log(songs);


// Add one song to the beginning (unshift()):
let newSong = "The Story - by Brandi Carlile on the album The Story";
let addSongFront = songs.unshift(newSong);
console.log("Song Added to Beggining of Array:", songs);

//and the end of the array (push()): 
let newSong2 = "Jackie's Strength by Tori Amos on the album Choir Girl Hotel ";
let addSongEnd = songs.push(newSong2);
console.log("Song Added to End of Array", songs);



//Find and replace the > character in each item with a - character.

for (let i = 0; i <= songs.length; i++) {
    songs[i] = songs[i].replace(/>/g, "-");
    console.log("Removed '>' replace with '-':", songs);
    //Loop over the array, and remove any words or characters that obviously don't belong:
    songs[i] = songs[i].replace(/[*/]/g, "");
    songs[i] = songs[i].replace(/[(/]/g, "");
    songs[i] = songs[i].replace(/[!/]/g, "");
    console.log("Removed Special Characters:", songs);
};



var mySongs = [];

mySongs[mySongs.length] = {
        song: "The Story",
        name: "Brandi Carlile",
        album: "The Story",
        genre: "|  Folk"
    },
    mySongs[mySongs.length] = {
        song: "Best Imitation of Myself",
        name: "Ben Fold's Five",
        album: "Whatever and Amen",
        genre: "|  Aleternative"
    },
    mySongs[mySongs.length] = {
        song: "Hello",
        name: "Adele",
        album: "25",
        genre: "|  Pop"
    },
    mySongs[mySongs.length] = {
        song: "Both Hands",
        name: "Ani Difranco",
        album: "Living in Clip",
        genre: "|  Folk"
    },
    mySongs[mySongs.length] = {
        song: "Joanne",
        name: "Lady Gaga",
        album: "Joanne",
        genre: "|  Pop"
    },
    mySongs[mySongs.length] = {
        song: "A Million Reasons",
        name: "Lady Gaga",
        album: "Joanne",
        genre: "|  Pop"
    },
    mySongs[mySongs.length] = {
        song: "Blackbird",
        name: "Sara Mclachlan",
        album: "I Am Sam",
        genre: "|  Soundtrack"
    };
console.log("My Song Array", mySongs);


for (let i = 0; i <= mySongs.length; i++) {

    let printToDom = `<div id="song-array">
<h4>${mySongs.name}</h4>
<p>By ${name} from the ${album} album  ${genre}</p>
</div>`
    var getDiv = document.getElementById('right');

};
getDiv.innerHTML = printToDom;
//Add each string to the DOM in index.html in the main content area. Example output:
// {Song name} by {Artist} on the album {Album}