// Name : Kaung Hset Aung 
// Class: DCITP/1A/06
// Adm : 2340698

var input=require('readline-sync');                                                                     //Program require prompting user input.
var Movie = require('./2340698_KaungHsetAung_Stage2_ClassModules')
var genre=["Adventure","Action","Drama","Fantasy","Sci-Fi","Thriller","Crime","Mystery","Horror"];      //Declaring a string array for genre that contains the various genres of the movies.
var movie1 = new Movie ("Black Panther: Wakanda Forever 2022", [genre[0],genre[1],genre[2],genre[3],genre[4],genre[5]], 161, "11 Nov 2022", [9,42])
var movie2 = new Movie ("Avatar: The Way of Water", [genre[0],genre[4]], 192, "16 Dec 2022", [4,15]);
var movie3 = new Movie ("Fast X", [genre[6],genre[1],genre[7],genre[5]], 43, "19 May 2023", [28,60]);
var movie4 = new Movie ("Ant-Man and the Wasp: Quantumania", [genre[0],genre[1]], 120, "16 Feb 2023", [18,80]);
var movie5 = new Movie ("M3GAN", [genre[8],genre[7],genre[5]], 102, "6 Jan 2023", [20,70]);             // Initalizing five given movies using the Class created above.
var movieList = [movie1, movie2, movie3, movie4, movie5];                                               // A main array to store all the movies.


console.log('Welcome to Silver Vintage Movie Review Program');
var userName=input.question('Please enter your name: ');                                                // Prompting the user to input user's name.

do {                                                                                                    // Start of main do-while loop.
    console.log ('\nHi ' + userName + ', please select your choice:\n\t1. Display All Movies\n\t2. Add Movie\n\t3. Add Rating\n\t4. Lastest 3 Release Date\n\t5. Filter by Genre\n\t6. 3 Most Popular Movies\n\t7. Exit');
    var userChoice=input.question('\t>>');                                                              // Display the 1 to 7 menu options and prompt user to input choice of option from the menu until option 7 (EXIT) is entered, by using main "do-while" loop.
    
    switch (userChoice) {
    case '1' :                                                                                          // When option 1 is entered it displays all the movie details and re-prompt user for another input.
        for (var x=0; x < movieList.length; x++){                                                       // Using for loop and displayMovieDetail function to display all the movie details without HARDCODING the desired output.
            movieList[x].displayMovieDetails()
        };
    break;


    case '2' :                                                                                          // When option 2 is entered, allow user to add a new movie.
        var nameList = [];                                                                              // Creating an array that contains only the names of the existing movies.
        for(var i = 0; i < movieList.length; i++)  
            nameList.push(movieList[i].name.toUpperCase());
        do {                                                                                            // Start of do-while loop for adding newName.
            var newName = input.question ("\n\tPlease enter Movie's name: ");                           // Allow user to input newName
                if ( (nameList.includes(newName.toUpperCase())) || newName.length == 0) {
                     console.log ('\tPlease enter a unique movie name!')                                // Display this message when user add a movie name that is already in the application.
                }
            
        } while (nameList.includes(newName.toUpperCase()) == true || newName.length == 0)               // End of do-while loop for adding newName where the loop will exit when a unique movie name is added.
    
    
        function genreMenu () {                                                                         // New function to create a genre menu for prompting user to select the genre of the new movie.
            console.log("\n\tPlease enter Movie's genre(s):");
            for (y=1; y <= genre.length ; y++)                      
                console.log('\t' + y + ") " + genre[y-1]); 
        };
        do {                                                                                            // Start of do-while loop for choosing newGenre.
            genreMenu();                                                                                // The genre menu created above is displayed.
            var inputIndex = input.question ('\t>>');                                                   // Allow user to input newGenre. 
            inputIndex.toString();                                                                      // Make sure that the input is a string data type.
            var newGenreIndex = inputIndex.replace(/\s/g,'');                                           // Removing the space and indent from the input.
            var newGenreIndexSplit = newGenreIndex.split(",");                                          // Spliting the input genre and store as an array.
                newGenreIndexSplit.sort();                                                              // Sorted the genre list to help in further validation.
            var outOfRange = [];                                                                        // Initalizing two array to validate genre not to be out of the genre list or duplicating.
            var duplicatating = [];
            for (var d=0 ; d < newGenreIndexSplit.length-1 ; d++) {                                     // Push 'duplicating' into duplicating array if there is a genre duplication in the input.
                if (newGenreIndexSplit[d] == newGenreIndexSplit[d+1])
                    duplicatating.push("duplicating");
            }
            if (duplicatating[0] == 'duplicating'){                                                     // If the array 'duplicating' is not empty (ie. duplication occurs), consider the input as invalid and allow user to reprompt a valid input.
                console.log('\tPlease enter valid genre option(s)!');
            }
            else {                                                                                      // If duplicate validation pass, move on to outOfRange validation.
                for (x=0; x< newGenreIndexSplit.length ; x++){                                          // Push 'outOfRange' into 'outOfRange' array if input is not within the range of given genre menu.
                    if (newGenreIndexSplit[x] > 9 || newGenreIndexSplit[x] <= 0 || isNaN(newGenreIndexSplit[x]) || newGenreIndexSplit[x]%1 != 0 ) {
                        outOfRange.push("outOfRange")
                        console.log('\tPlese enter valid genre option(s)!');
                        break;
                    }
                    else {                                                                              // If both validations pass, the input is accepted and taken as 'newGenre'
                        duplicatating = [];                                                             // When a valid input is finally entered, the two arrays used for validation are convered back as an empty array. 
                        outOfRange = [];
                        var newGenre = [];
                        for (z=0; z < newGenreIndexSplit.length ; z++)                                  // The input that pass the desired validation is accepted and pushed into 'newGenre' array.
                            newGenre.push(genre[newGenreIndexSplit[z]-1]);
                    }
                }
            }
        } while (outOfRange[0] == 'outOfRange' || duplicatating[0] == 'duplicating')                    // End of do-while loop for adding newGenre where the loop will exit when the two arrays used for validation are empty.
    
        var newDate = input.question ("\n\tPlese enter Movie's release date: ");                        // Prompt user to enter the movie release date. Release date is assumed that the user will always enter a valid release date in the correct format ONLY.
    
        var inputNewTime = 0;                                                                           // Initalize inputNewTime as integer.
            do {                                                                                        // Start of do-while loop for newTime
                inputNewTime = input.question ("\n\tPlease enter Movie's running time (mins): ");       // Allow user to add the movie running time in minute.
                if (inputNewTime <= 0 || isNaN(inputNewTime) || inputNewTime %1 !=0 ) {                 // Validate the input runtime with if-else.
                    console.log ('\tPlease enter a valid running time!')
                }
                else if (!(inputNewTime <= 0 || isNaN(inputNewTime) || inputNewTime %1 !=0 ))           // Take the inputNewTime as newTime if the input passes the validation.
                    var newTime= inputNewTime
            } while (inputNewTime <= 0 || isNaN(inputNewTime) || inputNewTime %1 !=0 );                 // End of do-while loop for newTime where the loop will exit when the running time user prompt pass the desired validation.
    
        var newRating = [0,0];                                                                          // Assign the rating for the newly added movie as 0 by defult since there is no voters yet. 
        
        movieList.push(new Movie(newName, newGenre, newTime, newDate, newRating));
    break;


    case '3' :                                                                                          // When option 3 is entered, allows user to select an existing movie to add rating.
        function getMovieNames() {                                                                      // New function to create a list of existing movies for prompting user to select and rate.
            console.log('\n\tSelect the movie to add a rating: ')
            for (x=0 ; x < movieList.length ; x ++) {
                console.log ('\t'+(x+1) + ') ' + movieList[x].name); 
            }
            console.log('\t' + (x+1) + ') ' + 'Go Back to Main Menu' );
    
        }
 
        do {                                                                                            // Start of do-while loop to add rating.
            getMovieNames();                                                                            // The list of names created above is displayed.
            var chosenName = input.question ("\t>>")                                                    // Prompt user to select a VALID movie from the list and add a VALID rating.
            if (chosenName > 0 && chosenName <= x && chosenName%1 == 0) {
                do{
                    newRating1=input.question('\n\tEnter your rating for "' + movieList[(chosenName-1)].name + '" (1 to 5 inclusive): ');
                    if (newRating1 >=1 && newRating1 <=5) {
                        parseFloat(movieList[(chosenName-1)].rating[1]);
                        movieList[(chosenName-1)].rating[0]++;
                        movieList[(chosenName-1)].rating[1] += parseFloat(newRating1);
                    }
                    else {console.log('\n\tEnter a valid rating!')}
                    
                }
                while (!(newRating1 >= 1 && newRating1 <=5))
            } 
            else if (chosenName != (x+1))
                console.log('\n\tKindly enter a valid input!');
        } while (chosenName != (x+1));                                                                  // End of do-while loop to add rating when 'Go Back to Main Menu' option form the menu list is slelcted.
    ;     
    break;

        
    case '4' :                                                                                          // When option 4 is entered, shows the user the last three released movies.
        var releaseDate = [];                                                                           // Initiate two arrays to sort the release date.
        var releaseDate2 = [];
        var releaseName = [];
        for (i = 0 ; i < movieList.length ; i ++ ) {                                                    // Push release date of string data type into 'releaseDate' array and Date data type into 'releaseDate2'.
            releaseDate.push(movieList[i].date) 
            releaseDate2.push(Date.parse(movieList[i].date))
            releaseName.push(movieList[i].name)
        };
        releaseDate2.sort();          
        // console.log(releaseDate2);
        // console.log(movieList[2].rating);                                                                  // Sort the 'releaseDate2' array to get the latest date to earliest date.
        releaseDate2.reverse();
        var dateSorted = [];                                                                            // Initiate two arrays to match the name of the movie that corrosponds to a specific release date.
        var nameSorted = [];
        if (releaseDate2[0]==releaseDate2[1] || releaseDate2[1] == releaseDate2[2]){

            for( x = 0 ; x < releaseDate.length ; x++) {
                if(releaseDate2[0] == Date.parse(releaseDate[x])) {
                    nameSorted[x] = (movieList[x].name);
                    dateSorted[x] = (movieList[x].date);
                }
                if(releaseDate2[2] == Date.parse(releaseDate[x])) {
                    nameSorted.splice(2,0, (movieList[x].name));
                    dateSorted.splice(2,0, (movieList[x].date));
                }
            };
            var arr1 = dateSorted.filter(n => n);
            var arr2 = nameSorted.filter(n => n);
            console.log (arr1 , arr2)
        }

        else {

        }


            // for (x=0; x < releaseDate.length ; x ++) {          
            //                               // Push the three latest release dates into 'dateSorted' array, and their respective movie names into 'nameSorted' array.
            //     if (releaseDate2[0] == Date.parse(releaseDate[x])) {
            //        
            //         dateSorted[0] = releaseDate[x];
            //         nameSorted[0] = releaseName[x];
            //         // releaseDate[x] = '1 Jan 1000';
            //     };
            //     //  console.log (releaseDate)
          
            //     //  console.log(releaseDate[1])
            //     // console.log(Date.parse(releaseDate[1])) 
             
            //     if (releaseDate2[1] == Date.parse(releaseDate[x])) {

            //             dateSorted[1] = releaseDate[x];
            //             nameSorted[1] = releaseName[x];
            //             // releaseDate[x] = '1 Jan 1000';
                    
            //     };
          
            //     if (releaseDate2[2] == Date.parse(releaseDate[x])) {
            //         dateSorted[2] = releaseDate[x];
            //         nameSorted[2] = releaseName[x];
            //         // releaseDate[x] = '1 Jan 1000';
            //     }};
// console.log (releaseDate, "release date")
// console.log (releaseDate2 , "release date2")
// console.log (releaseName, "release name")
// console.log (dateSorted , "date sort")
// console.log (nameSorted, "name srot")
// console.log(Date.parse("11 nov 2022"))
// console.log(Date.parse('16 Dec 2022'))
// console.log(Date.parse('1 Jan 1000'))
// console.log(Date.parse('6 Jan 2023'))



        function lastest () {                                                                            // A new function that outputs the list of three lastest movies back to user.
            console.log('\n\tThe lastest 3 movies are:\n\t')                                                                           
            for (i=0 ; i < 3 ; i++) {
                console.log ("\t" + (i+1) + ') ' + arr1[i] + ' - ' + arr2[i] );
            }
        } 
        lastest();                                                                                       // The list created by 'lastest' function is displayed. 
    ;     
    break;

    case '5' :                                                                                           // When option 5 is entered allows user to filter by genre.
        var genreListforFBG = genre.sort();                                                                  
        function genreMenuList () {                                                                      // New function 'genreListforFBG' is used to create a sorted list of genre.
            console.log ('\n\tPlease select a genre: ')
            for (i=0 ; i < genreListforFBG.length ; i++)
                console.log('\t' + (i+1) + ') ' + genreListforFBG[i]);
        }
        function genreFilterDisplay (genreOfChoice) {                                                    // New function 'genreFilterDisplay' is used to filter the movies with the selected genre.
            var indexxx = genreOfChoice-1
                console.log('\n\tYou have selected "' + genreListforFBG[indexxx] + '" genre');
            var listnumber = 1;
            for (x = 0 ; x < movieList.length ; x ++) 
                if (movieList[x].genre.includes(genreListforFBG[indexxx]))
                    console.log('\t' + (listnumber++) + ') ' + movieList[x].name);
        }

        do{                                                                                              // Start of do-while loop to let user enter a genre to filter.
            genreMenuList()
            var genreChoice = 0;
                genreChoice = input.question ('\t>>');
                    if (genreChoice >0 && genreChoice <= genreListforFBG.length && !isNaN(genreChoice) && genreChoice%1 == 0) {
                        genreFilterDisplay(genreChoice);
                        }
                    else {console.log('\tPlease enter a valid genre input!')};      
        } while (!(genreChoice >0 && genreChoice <= genreListforFBG.length && !isNaN(genreChoice) && genreChoice%1 == 0));                // End of do-while loop for filter by genre when a valid input is entered.
    ;         
    break;
    
    case '6' :                                                                                           // When option 6 is entered, displays user the three top rated movies as the most popular movies. 
        var popular = [];                                                                                // Initiate two arrays to filter the three top rated movies.
        var popularsorted = [];
        for (i = 0 ; i < movieList.length ; i++) {                                                       // Ratings of all movies in float data type is pushed into the two arrays.
            popular.push(parseFloat(movieList[i].rating2()));
            popularsorted.push(parseFloat(movieList[i].rating2()));
        }
        popularsorted.sort()                                                                             // The array 'popularsorted' is sorted from highest to lowest.
        popularsorted.reverse()
        var nameOfPopular = [];
        for (i=0 ; i< popular.length ; i ++ ) {                                                          // The unsorted array 'popular' is used to find the respective names of the sorted top three movies.
            if (popularsorted[0] == popular[i]) {
                nameOfPopular[0] = movieList[i].name;
            }
            if (popularsorted[1] == popular[i]) {
                nameOfPopular[1] = movieList[i].name;
            }
            if (popularsorted[2] == popular[i]) {
                nameOfPopular[2] = movieList[i].name;
            }
        }
    
        function newfeature () {                                                                         // A new function 'newfeature' is used to list the top rated three movies.
            console.log('\n\tThe three most popular movies are:\n\t');
            for (i=0 ; i < nameOfPopular.length ; i++) {
                console.log ("\t" + (i+1) + ') ' + nameOfPopular[i] + ' (' +  'Rating : '+ popularsorted[i] + ')')
            }
        } 
        newfeature();                                                                                    // The most popular movies list created by 'newfeature' function is displayed to user.
    break;

    case '7' : console.log('Thank you & goodbye!');                                                      //When option 7 is entered it displays the message "Thank you & goodbye!" (exit from main do-while loop and program is terminated).
    break;

    default : console.log('Please enter a valid input.');                                                //When an invalid input is entered, it displays the message "Please enter a valid input." and re-prompt user for a valid input.
    }
} while (userChoice!=7);                                                                                 //End of main do-while loop. Exit "do-while" loop when user enter option 7 (EXIT), and program terminates.