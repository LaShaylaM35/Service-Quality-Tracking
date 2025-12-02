let input = require('prompt-sync')();

let feedbackComments = [];
let satisfactionRatings = [];
let continuedLoop = "yes";

while (continuedLoop == "yes") {

    let comment = input("Please enter your feedback comment: ");
    let rating = input("Please rate your satisfaction from 1 to 5: ");
    satisfactionRatings.push(rating);
    feedbackComments.push(comment);

    continuedLoop = input("Would you like to provide more feedback? (yes/no): ");
} 


console.log("Feedback Comments:", feedbackComments);
console.log("Satisfaction Ratings:", satisfactionRatings);