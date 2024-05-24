// Load from the folder posts all the JSON data to render posts
function showPost(index)
{
   // Load posts from JSON files
    let data = {"name", "contents"};
   // Uso a fetch API Promise for load the JSON
   fetch("https://nicopauer.github.io/blog/posts.json")
   .then(response => response.json())
   .then(url => {
      // Turn into url the index using JSON
      fetch(url["1"])
      .then(getURL => getURL.json())   
      .then(post => {
         data.name = post.name;
         data.author = post.author;
         data.date = post.date;
         data.contents = post.contents;
         data.contacts = post.contacts;
         data.tags = post.tags;
         data.template = post.template;
      }).catch(error => alert(error));
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
   console.log(data["name"]);
   view.innerHTML = ("<h1><u>" + data["name"] + "</u></h1><sup>" + data["author"] + "</sup><sub>" + data["date"] + "</sub>" + content + tags + contacts);
}
