document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the comment value
    const comment = document.getElementById('comment').value;
    
    // Create a new paragraph element
    const newComment = document.createElement('p');
    newComment.textContent = comment;
    
    // Append the new comment to the comments display section
    document.getElementById('commentsDisplay').appendChild(newComment);
    
    // Clear the textarea
    document.getElementById('comment').value = '';
});

document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    alert(`Thank you for your gift of ${amount} ${currency}!`);
});
