# Celebrity Tribute (JavaScript Edition)


Your clients at the NewForce Tribute Agency were so happy with the last website you built for them that they've asked you to build them another, similar website about Lin Manuel Miranda. The specs are almost exactly the same, except this time you should use JavaScript to build your HTML components and insert them into the DOM.

You should start by copying and pasting the following boilerplate code between the `body` tags of your `index.html` file:

```html
    <nav>
      <a href="#executive-summary">Executive Summary</a>
      <a href="#personal-life">Personal</a> 
      <a href="#news-feed">News Feecd</a>
      <a href="#career">Career</a>
    </nav>

    <section id="executive-summary"></section>
    <section id="personal-life"></section>
    <section id="news-feed"></section>
    <section id="career"></section>
```


Next, copy and past the following data into your JavaScript file:

```js
const linData = {
  newsfeed: [
    {
      title: "Lin Manuel Miranda Working on Moana Sequel",
      url: "https://www.cinemablend.com/news/2465663/is-lin-manuel-miranda-working-on-a-moana-sequel",
      date: "1/23/19"
    },
    {
      title: "Lin-Manuel Miranda is peeved about this year’s Oscars",
      url: "https://pagesix.com/2019/01/25/lin-manuel-miranda-is-peeved-about-this-years-oscars/",
      date: "1/25/19",
    },
    {
      title: "Lin-Manuel Miranda in Talks to Write Disney's First Latina Disney Princess",
      url: "https://www.thedailybeast.com/lin-manuel-miranda-in-talks-to-write-disneys-first-latina-princess",
      date: "1/25/19",
    },
    {
      title: "Puerto Rico Gives Lin-Manuel Miranda a Hero's Welcome at Hamilton Opening Weekend: 'I Felt It'",
      url: "  https://people.com/theater/lin-manuel-miranda-hamilton-puerto-rico-standing-ovation/",
      date: "1/25/19"
    },
    {
      title: "See Lin-Manuel Miranda, ‘Hamilton’ Cast Perform ‘The Story of Tonight’ With Jimmy Fallon",
      url: "  https://www.rollingstone.com/tv/tv-news/lin-manuel-miranda-hamilton-jimmy-fallon-779743/",
      date: "1/16/19"
    },
    {
      title: "Lin-Manuel Miranda And 'Hamilton' Partners Save A Manhattan Theater Bookstore",
      url: "https://www.npr.org/2019/01/08/683284098/lin-manuel-miranda-and-hamilton-partners-save-a-manhattan-theater-bookstore",
      date: "1/8/19"
    }

  ],
  personalLife: {
    birthDate: "January 16, 1980",
    birthLocation: "New York City",
    cityOfResidence: "New York City",
    nationality: "Puerto Rican, American",
    family: {
      spouse: "Vanessa Nada",
      kids: ["Sebastian Miranda",
        "Francisco Miranda"
      ],
      parents: ["Luis A. Miranda, Jr.",
        "Luz Towns-Miranda"],
      pets: ["Tobillo", "Toby"]
    }
  },
  career: {
    shortIntro: "Lin-Manuel Miranda has written and performed in many successful musicals and movies since 2002. His most recent               musical being Hamilton: An American Musical. He recently starred in the movie, Mary Poppins Returns.",
    MusicalsWritten: ["In The Heights", "Bring It On: The Musical", "Hamilton: An American Musical"],
    notableRoles: ["Usnavi", "Alexander Hamilton"],
    notableSongs: ["In The Heights", "My Shot", "Alexander Hamilton"],
    awards: ["Multiple, Grammy Awards", "Multiple Tony Awards", "An Emmy Award"]
  },
  executiveSummary: {
    knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee Elise Goldsberry", "Phillipa Soo"],
    image: {
      photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
      caption: "Lin Manuel Miranda Headshot"
    },
    listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
    countryOfResidence: "United States"
  }
}

```
## This is your introduction to Single Page Applications.
In your last project, you created seperate HTML files for each section of content (executive summary, career, etc). This time, you should only create one HTML file (`index.html`). You'll use JavaScript to dynamically populate different sections in your HTML file. You might notice that your boilerplate code includes a nav bar and it looks a little different than what you might have seen before. That's because this nav bar is set up to link to different sections on your web page by their `id` attribute. You shouldn't have to change anything in the boilerplate nav bar- it should work for you right out of the box.

## Your job is to use JavaScript to:
- Build HTML strings to represent the data you've been given about Lin Manuel Miranda
- Insert those HTML strings into their corresponding sections in the DOM

## Keep in mind:
- Your objective for this group project is to practice JavaScript, not produce a super awesome web page. 
- You should challenge yourself to incorporate what you've learned so far (functions, loops, conditionals, etc) wherever possible.
- Save styling for last!





