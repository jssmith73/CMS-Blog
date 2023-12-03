const newFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the new post form
    const title = document.querySelector("input[name='post-title']").value;
    const content = document.querySelector("textarea[name='post-content']").value;
    // Send a POST request to the API endpoint. If successful, redirect to the dashboard page. Otherwise, display the error.
   if (title && content) {
    const newComment = await Post.create({
        title: req.body.content,
        // user_id,
        content: req.body.content
       });
       
       if (response.ok) {
           document.location.replace('/dashboard');
       } else {
           alert(response.statusText);
       }
   }
};

document
    .querySelector('#new-post')
    .addEventListener('submit', newFormHandler);