// Load from the folder posts all the JSON data to render posts
function showPosts(index)
{
   // Load posts from JSON files
    data = {1 : "Research get data from a JSON file"};
  // Render the post in HTML
    let view = document.querySelector("#post-view");
    view.innerHTML += ("<h1>${data[1]}</h1>");
}
