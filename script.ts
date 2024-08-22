const commentDatabase: Record<string, { date: Date, comment: string }[]> = {};

//Comments limit per day set as 10 comments for a user. 
export const commentsLimitPerDay = (userEmail: string): Boolean => {
    const comments = commentDatabase[userEmail] || [];
    //to make the date timestamp value a string for easier comparison with the commentsMadeToday variable
    const currentDate = new Date().toDateString();
    const commentsMadeToday = comments.filter(comment => new Date(comment.date).toDateString() === currentDate);
    //Boonean value to check whether comments made by the day exceeds 10(comments).
    return commentsMadeToday.length < 10;
};

//Create Comments
export const createComment = (userEmail: string, comment: string): string => {
    if (!commentsLimitPerDay(userEmail)) {
        return "You have reached the comments limit for today";
    }
    // Initialize an empty array for the user if one hasn't made any comments yet.
    if (!commentDatabase[userEmail]) {
        commentDatabase[userEmail] = [];
    }

    commentDatabase[userEmail].push({ date: new Date(), comment });
    return "Comment added successfully";
};

// Usage:
console.log(createComment("user@example.com", "comment 1"));
console.log(createComment("user@example.com", "comment 2"));
console.log(createComment("user@example.com", "comment 3"));
console.log(createComment("user@example.com", "comment 4"));
console.log(createComment("user@example.com", "comment 5"));
console.log(createComment("user@example.com", "comment 6"));
console.log(createComment("user@example.com", "comment 7"));
console.log(createComment("user@example.com", "comment 8"));
console.log(createComment("user@example.com", "comment 9"));
console.log(createComment("user@example.com", "comment 10"));
console.log(createComment("user@example.com", "comment 11"));



/*
Example Database Structure:

const commentDatabase: Record<string, { date: Date, comment: string }[]> = {
    "user1@example.com": [
        { date: new Date(), comment: "This is the first comment." },
        { date: new Date(), comment: "This is another comment." }
    ],
    "user2@example.com": [
        { date: new Date(), comment: "This is user2's comment." }
    ]
};

*/
