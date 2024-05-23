// Load from the folder posts all the JSON data to render posts
function showPost(index)
{
   // Load posts from JSON files
    let data =   {
                   "name" : "Research get data from a JSON file",
                   "author" : "",
                   "date" : "22/05/2024",
                   "content" : ["text_1", "text_2"],
                   "contacts" : [],
                   "tags" : [1, 2, 3],
                   "template" : "default.css"
                 };
   // Summarize the content of the post
   
   let content = ('<br /><style src = "' + data["template" ] + '" type = "text/css"></style><section id = "post-' + index + '">');
   
   for (let text in data["content"])
   {
      content += ("<p>" + text + "</p>");
   }
  
   content += "</section><br />";
   // List of tags
   let tags = '<h2>Categories:</h2><br /><ul id = "tags">';

   for (let item in data["tags"])
   {
      tags += ('<li>' + item + '</li>');
   }

   tags += "</ul><br />";
   // List of E-mail contacts
   let contacts = '<h3>Contacts:</h3><br /><ol id = "contacts">';

   for (let contact in data["contacts"])
   {
      contacts += ('<li><a href = "mailto:' + contact + '"</a>' + contact + '</li>');
   }
   
   contacts += "</ul><br />";
  // Render the post in HTML
   let view = document.querySelector("#post-view");
   view.innerHTML = ("<h1><u>" + data["name"] + "</u></h1><sup>" + data["author"] + "</sup><sub>" + data["date"] + "</sub>" + content + tags + contacts);
}
