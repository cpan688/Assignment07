//STEP 1 - Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'The Firm', 'Oppenheimer'];
// console.log(`The second movie in the Step 1 movie array is ${movieList[1]}.`);


//STEP 2 - Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
//  Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
//  Then, use the console to display the first movie in your array. 
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'The Firm', 'Oppenheimer'];
// let movies = new Array(5);
// movies = Array.from(movieList);
// console.log(`The first movie in the Step 2 movie array is ${movies[0]}.`);


//STEP 3 - Copy your code from step 2. Add a new movie into the 3 position within your array. 
//  Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'The Firm', 'Oppenheimer'];
// let movies = new Array(5);
// movies = Array.from(movieList);
// movies.splice(2, 0, 'New Movie');
// console.log(`After adding a new movie, the array length is now ${movies.length}`);


//STEP 4 - Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
//   Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'The Firm', 'Oppenheimer'];
// let movies = [];
// for (let i=0; i<movieList.length; i++) {    // copy movies from movieList to movies array
//     movies[i] = movieList[i];
// }
// movies.shift();                             // remove the first movie in the movies array
// console.log(`After the first movie is removed, the remaining movies are: ${movies}`);


//STEP 5 - Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
//   Now, use a for/in loop to iterate through the array and display each movie within the console window.
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Maestro', 'Origin'];
// for (movie in movieList) {                      // use for/in loop to display each movie in the movieList array
//     console.log(movieList[movie]);
// }


//STEP 6 - Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Maestro', 'Origin'];
// for (movie of movieList) {                      // use for/of loop to display each movie in the movieList array
//     console.log(movie);
// }


//STEP 7 - Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Maestro', 'Origin'];
// movieList.sort();                               // sort the movieList array
// for (movie of movieList) {                      // use for/of loop to display each movie in the movieList array
//     console.log(movie);
// }


//STEP 8 - Copy the code from step 5. Under the existing array, create a new array called leastFavMovies . 
// Populate the array with the 3 movies that you regret watching. Display both arrays within the console window and format it
//
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Living', 'Origin']
// let leastFavMovies = ['Maestro', 'A Star is Born', 'Moneyball']
// console.log("Movies I like:")
// console.log(" ")
// movieList.forEach((movie) => {
//     console.log(movie)
// })
// console.log(" ")
// console.log("Movies I regret watching:")
// console.log(" ")
// leastFavMovies.forEach((movie) => {
//     console.log(movie)
// })


//STEP 9 - concat two arrays into movies array, display movies in reverse sorted order
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Living', 'Origin']
// let leastFavMovies = ['Maestro', 'A Star is Born', 'Moneyball']
// let movies = movieList.concat(leastFavMovies);
// movies.sort().reverse();             // need to sort first, then reverse
// movies.forEach((movie) => {
//     console.log(movie)
// })


//STEP 10
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Living', 'Origin']
// let leastFavMovies = ['Maestro', 'A Star is Born', 'Moneyball']
// let movies = movieList.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies.pop());


//STEP 11
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Living', 'Origin']
// let leastFavMovies = ['Maestro', 'A Star is Born', 'Moneyball']
// let movies = movieList.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies.shift());


//STEP 12 - Programmatically retrieve the movies in your array that you do not like and return their indices. 
//   Then, using those indices, programmatically add movies that you do like.
// let movieList = ['Dune', 'Serendipity', 'Reds', 'Avatar', 'Oppenheimer', 'Living', 'Origin']
// let leastFavMovies = ['Maestro', 'A Star is Born', 'Moneyball']
// let otherFavMovies = ['Mission Impossible', '007', 'Star Wars']
// let movies = movieList.concat(leastFavMovies);          // combined all movies into one array
// console.log(`Current Movie List: ${movies}`)
// let j = 0;
// for (let i=0; i<movies.length; i++) {                   // replace the least favorite movies with new favorites
//     if (leastFavMovies.includes(movies[i])) {
//         movies[i] = otherFavMovies[j];
//         j++;
//     }
// }
// console.log(`Least Favorite Movies: ${leastFavMovies}`)
// console.log(`Replaced Movie List: ${movies}`)


//STEP 13 - loop thru the array and use filter() function to display movie names
// movies = [['Oppenheimer', 1], ['Reds', 2], ['Dune', 3], ['Avatar', 4], ['Serendipity', 5]];
// movies.forEach(movie => {
//     console.log(movie.filter(item => typeof item === 'string'))
// })


//STEP 14 - showEmployee anonymous function - pass in employees array as a parameter
// const showEmployee = function(arr) {
//     console.log('Employees:', '\n\n')
//     arr.forEach(item => console.log(item));
// };
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];
// showEmployee (employees);


//STEP 15 - filterValues function - filter false, null, 0 and blank values from an array
// function filterValues(array) {
//     let filteredArray = array.filter((item) => {
//         return (((typeof item === 'string') && (item != "")) || ((typeof item === 'number') && (item != 0)) || (item === true))
//     })
//     return filteredArray;
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))


//STEP 16 - function to get a random item from an array - test with a numeric array with 10 numbers
// let randomIndex;
// function getRandomNumber(array) {
//     randomIndex = Math.floor(Math.random() * 10);
//     return(array[randomIndex]);
// }
// numArray = [34, 12, 332, 773, 23, 11, 90, 101, 987, 678];
// console.log(`Array values are: ${numArray}`);
// console.log(`A random number from the Array is: ${getRandomNumber(numArray)}`);


//STEP 17 - function to get the largest number from a numeric array
// function getMaxNumber(array) {
//     maxNum = array[0];
//     for (let i=1; i<array.length; i++) {
//         if (array[i] > maxNum) {
//             maxNum = array[i]
//         } 
//     }
//     return maxNum;
// }
// numArray = [34, 56, 12, 332, 773, 23, 11, 20, 90, 101, 987, 678];
// console.log(`Array values are: ${numArray}`);
// console.log(`The largest number from the Array is: ${getMaxNumber(numArray)}`);




