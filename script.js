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
      knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee         Elise Goldsberry", "Phillipa Soo"],
      image: {
        photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
        caption: "Lin Manuel Miranda Headshot"
      },
      listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
      countryOfResidence: "United States"
    },
    extrasReport: {
        onlineResources: [
            {
                name: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Lin-Manuel_Miranda"
            },
            {
                name: "Official Website",
                url: "http://www.linmanuel.com/"
            },
            {
                name: "Fan Website",
                url: "https://linmiranda.com/"
            }
        ],
        placesToViewWork: [
            {
                name: "Youtube",
                url: ""
            },
            {
                name: "Broadway",
                url: ""
            }
        ],
        pastShowDates: ["January 15, 2019", "December 12, 2018", "October 7, 2018", "September 4, 2018", "August 1, 2018", "July 19, 2018", "July 2, 2018", "June 18, 2018", ]
    }
  }
// function for <ul></ul> 
  const ul = (title, style) => {
    return `<ul class="${style}">${title}</ul>`
}
// function for <li></li>
  const li = (title, style) => {
    return `<li class="${style}">${title}</li>`
}
// function for full list component
let unorderedListBuild = ""
const createListComponent = (listInfo, listClass) => {
  
  for(let i=0; i < listInfo.length; i++){

   unorderedListBuild += li(listInfo[i], listClass)
}
return `<ul id="list">${unorderedListBuild}</ul>`
}



// run below this to check functionality
// document.querySelector("#career").innerHTML = createListComponent(linData.career.awards, "shortIntro")







// Div container function for extras page
  const divExtras = (style, insideDivTitle, style1, url, altText, style2) => {
    return `<section div="${style}">
    ${h4 (insideDivTitle, style1)}
    ${a (url, altText, style2)}
    </div>`
}

// Div container function for news feed page

const divNews = (style, insideDivTitle, style1, url, altText, style2, text, style3) => {
  return `<section div="${style}">
    ${h4 (insideDivTitle, style1)}
    ${a (url, altText, style2)}
    ${p (text, style3)}
    </div>`
}
//link-functions
const links = (url, altText, style) => {
  return `<a href=${url} target="_blank" class=${style}>${altText}</a>`
}
//How to call the function (insert your section into ("#sectionName"):
//document.querySelector("#personal-life").innerHTML = links("https://en.wikipedia.org/wiki/Puerto_Rican_citizenship","PR citizenship", "green-background");



  // This function creates a paragraph element with text and a user-defined style
  const P = (text, style) => {
    return `<p class="${style}">${text}</p>`
}
  

//H-elements
const h1 = (title, style) => {
  return `<h1 class="${style}">${title}</h1>`
}
//How to call the function:
// document.querySelector("#container").innerHTML =
//     h1("Marcus Fulbright", "xx-large")

const h2 = (pageName, style) => {
  return `<h2 class="${style}">${pageName}</h2>`
}

const h3 = (contentTitle, style) => {
  return `<h3 class="${style}">${contentTitle}</h3>`
}

const h4 = (insideDivTitle, style) => {
  return `<h4 class="${style}">${insideDivTitle}</h4>`
}



