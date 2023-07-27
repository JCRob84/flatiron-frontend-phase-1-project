Project Requirements
Your app must be an HTML/CSS/JS frontend that accesses data from a public API or from your own API built using json-server and a db.json file. 
Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. 
All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. 
If you do want to use a public API, you can check out this list of public APIsLinks to an external site.. Try to use one that has HTTPs but doesn’t require Auth or CORs. You should see that information listed alongside the API.
Try to avoid using an API that requires a key. APIs that require no authorization will be easiest to use.
Do not use APIs that require a credit card to sign up.
What Happens When Your Secret API Key is Stolen and Used By OthersLinks to an external site. 
A Very Expensive AWS MistakeLinks to an external site. (note: the fix mentioned is in Ruby - a backend language that we will not be learning. You cannot fully hide API keys in a Front End project. For these projects, the fix is to not use a paid API.)
Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.
Use at least 2 distinct event listenersLinks to an external site. (2 events of different types) that enable interactivity. 
What this means is that, if you had 2 click events, that would only count as 1 distinct event and you would need to add at least 1 more - a keydown or mouseenter event, for example.  The DOMContentLoaded event does not count toward the total.
Here’s a list of available eventsLinks to an external site., for inspiration. 
Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. 
Events embedded into HTML elements and CSS will not count toward the total. The events must be in your JavaScript file (such as index.js).
Please post a question on Piazza or book a lab help session if you have questions regarding this requirement.
Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Interacting with your API data in some way should present an opportunity to use array iteration.
Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
Here are some resources we recommend reviewing regarding best practices: Front End GuidelinesLinks to an external site. and Clean Code JavaScriptLinks to an external site.. 
We also expect you to complete the following items prior to turning in your project:
[GITHUB REPOSITORY]: A well-written informative README.md file. This is the business card of your project and you really want it to look great! A template can be found here: makeareadme.comLinks to an external site.. Some additional considerations:
If you used someone else's pictures or material please make sure you give them credit in your README.
If you think your blog post and/or video are really good and would add value, add them to your README.md.
If you want to go above and beyond, record a few seconds of yourself navigating the app and turn it into a gif. Then, add the gif in your README.md. That way anyone can get a sense of how your app works without leaving the README's page on GitHub!
[GITHUB REPOSITORY]: A detailed commit history (30+ commits is your minimum goal). Committing frequently is a fundamental best practice that you want to acquire as soon as possible. One day you will be collaborating on projects and you'll notice the importance of committing even more. Commit messages should be in the present tense, 50 characters or less and they should describe the changes you are committing.
A video walkthrough of your app — MUST be no longer than 3 minutes. In the video try to sound as professional as possible and walk through the functionality you built. A common way to record the video is to open a zoom meeting, share your screen, and then hit "record". Once the recording has been downloaded to your computer, upload it to YouTube Studio as "unlisted". That way only people with the link will be able to watch it. You don't have to share the video with anyone other than your instructors if you don't feel comfortable.
A blog post about this phase of the curriculum. This will serve as one of the four blogs you are required to complete to graduate. Please use these blogging guidelinesLinks to an external site. as you start your first blog.
Stretch Goals
Use json-serverLinks to an external site. in your project to persist your app's interactivity.
Use 3 or more event listeners.