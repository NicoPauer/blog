// Format JSON externally for better copy process for don't be null
var data = {"name" : "", "date" : "", "author" : "", "contents" : [], "contacts" : [], "tags" : [], "template" : ""};
// Load from the folder posts all the JSON data to render posts
function showPost(index)
{
   // Load posts from JSON files
  // Load JSON  
     fetch("https://nicopauer.github.io/blog/posts.json")
   .then(response => response.json())
   .then(url => {
      // Turn into url the index using JSON
      fetch(url[index])   
      .then(post => {
        // Copy data from JSON 
       cosole.log(url[index]);  
       data = post.json();  
      }).catch(error => alert("404 POST NOT FOUND: IT DOESN'T EXIST YET"));
   }).catch(error => alert("404 POST NOT FOUND: IT DOESN'T EXIST YET"));

   // Summarize the content of the post
   
   let content = ('<br /><style src = "' + data["template" ] + '" type = "text/css"></style><section id = "post-' + index + '">');
   
   for (let text in data["contents"])
   {
      content += ("<p>" + data["contents"][text] + "</p>");
   }
  
   content += "</section><br />";
   // List of tags
   let tags = '<h2>Categories:</h2><br /><ul id = "tags">';

   for (let item in data["tags"])
   {
      tags += ('<li>' + data["tags"][item] + '</li>');
   }

   tags += "</ul><br />";
   // List of E-mail contacts
   let contacts = '<h3>Contacts:</h3><br /><ol id = "contacts">';

   for (let contact in data["contacts"])
   {
      contacts += ('<li><a href = "mailto:' + data["contacts"][contact] + '"</a>' + data["contacts"][contact] + '</li>');
   }
   
   contacts += "</ol><br />";
  // Render the post in HTML
   let view = document.querySelector("#post-view");
   view.innerHTML = ("<h1><u>" + data["name"] + "</u></h1><sup>" + data["author"] + "</sup><sub>" + data["date"] + "</sub>" + content + tags + contacts);
}
