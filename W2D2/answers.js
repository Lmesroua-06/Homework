////////////////////////////////
// Easy Going
////////////////////////////////
//for(let i = 1 ; i<= 20 ; i++){
//    console.log(i);
//};

////////////////////////////////
// Get Even
////////////////////////////////
//for(i = 0 ; i <= 200 ; i++){
//    if(i %2 ===0){
//        console.log(i);
//    }
//};

////////////////////////////////
// Fizz Buzz
////////////////////////////////
//for(i = 1 ; i <= 100 ; i++){
//    if( i % 15 === 0){
//        console.log('FizzBuzz');
//    }else if(i % 3 === 0){
//        console.log('Fizz');
//    }else if( i % 5 === 0){
//        console.log('Buzz');
//    }else {
//        console.log(i);
//    }
//};

////////////////////////////////
// Wild Wild Life
////////////////////////////////
//const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
//const sharky = ["Sharky", "shark", 20, "Left Coast"]
//const plantee = ["Plantee", "plant",  5000 , "Mordor"]
//const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
//const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//
//plantee[2] = 5001;
//wolfy[3] = 'Gotham City';
//dart.push('Hawkins');
//wolfy[0] = 'Gameboy';
//console.log(plantee[2]);
//console.log(wolfy[3]);
//console.log(dart[4]);
//console.log(wolfy[0]);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
//let trt = ['Donatello' , 'Leonardo' , 'Raphael' , 'Michaelangelo']
//
//trt = trt.map(function(i){
//    console.log(i.toUpperCase());
//});


////////////////////////////////
// Methods, Revisited
////////////////////////////////
//let favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
//'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
//'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//
//console.log(favMovies[8]);
//favMovies.sort();
//favMovies.pop();
//favMovies.reverse();
//favMovies.shift(); // shift method will remove the first element not the last element of the array
//favMovies.unshift(); // add elements to the beginning of an array
//console.log(favMovies.indexOf('Django Unchained'));
//favMovies.splice(3,0, "Avatar");
//console.log(favMovies.length);
//let secFav = favMovies.slice(0, 10);
//
//console.log(secFav);
//console.log(favMovies);


////////////////////////////////
// Where is Waldo
////////////////////////////////
//const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                    ["Lucinda", "Jacc", "Neff", "Snoop"],
//                    ["Petunia", ["Baked Goods", "Waldo"]]];
//
////console.log(whereIsWaldo);
////whereIsWaldo.splice(1,1);
//
//whereIsWaldo[[2][2]] = 'No One';
//
//for (let i = 0; i < whereIsWaldo.length; i++){
//    console.log(whereIsWaldo[3][1][2]);
//}


////////////////////////////////
//  Excited Kitten
////////////////////////////////
let kitten = ['Love me, pet me! HSSSSSS!' , '...human...why you taking pictures of me?...']; 

 for (let i = 0; i <= 20 ; i++){
    if(i % 2 ===0){
        console.log('...human...why you taking pictures of me?...');
    }else {
        console.log('Love me, pet me! HSSSSSS!');
    }

 };

 ////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
let med = Math.floor(nums.length / 2);
console.log(med);
