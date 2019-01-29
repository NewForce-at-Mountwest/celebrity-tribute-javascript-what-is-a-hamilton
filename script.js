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
const createListComponent = (listInfo, listClass) => {
  let unorderedListBuild = ""

  for(let i=0; i < listInfo.length; i++){

   unorderedListBuild += li(listInfo[i], listClass)
}
return `<ul class="list">${unorderedListBuild}</ul>`
}

// run below this to check functionality
// document.querySelector("#career").innerHTML = createListComponent(linData.career.awards, "shortIntro")


// Div container function for extras page
  const divExtras = (style, insideDivTitle, url, altText) => {
    return `<div class="${style}">
    ${h4 (insideDivTitle)}
    ${a (url, altText)}
    </div>`
}
// Div container function for news feed page
const divNews = (style, insideDivTitle, url, altText, text) => {
  return `<div class="${style}">
    ${h4 (insideDivTitle)}
    ${a (url, altText)}
    ${p (text)}
    </div>`
}
//link-functions
const a = (url, altText) => {
  return `<a href=${url} target="_blank">${altText}</a>`
}
//How to call the function (insert your section into ("#sectionName"):
//document.querySelector("#personal-life").innerHTML = links("https://en.wikipedia.org/wiki/Puerto_Rican_citizenship","PR citizenship", "green-background")

// This function creates a paragraph element with text and a user-defined style
  const P = (text) => {
    return `<p>${text}</p>`
}

//H-elements
const h1 = (title) => {
  return `<h1>${title}</h1>`
}
//How to call the function:
// document.querySelector("#container").innerHTML =
//     h1("Marcus Fulbright", "xx-large")
const h2 = (pageName) => {
  return `<h2>${pageName}</h2>`
}
const h3 = (contentTitle) => {
  return `<h3>${contentTitle}</h3>`
}

const h4 = (insideDivTitle) => {
  return `<h4>${insideDivTitle}</h4>`
}

const img = (imageURL, altText) => {
  return `<img src="${imageURL}" alt="${altText}">`
}
  

const summarySection1 = (name,listComponent, aliasList) => {
    
        return `${h3(name)}
        ${createListComponent(listComponent, aliasList)} `}
    //  document.querySelector("#Aliases").innerHTML = summarySection1("Aliases", "AliasList")
    const aliases = summarySection1("Aliases",linData.executiveSummary.listOfAliases, "AliasList")
    document.querySelector("#executive-summary").innerHTML = aliases;

const summarySection2 = (name, listComponent, collaboratorsList) => {
  return `${h3(name)}
  ${createListComponent(listComponent, collaboratorsList)}`}
  const collaborators = summarySection2("Known Collaborators", linData.executiveSummary.knownCollaborations, "collaborationsList" )
  document.querySelector("#executive-summary").innerHTML = collaborators;

 const summaryPageFunction = (title, Alias, url, altText, Collaborations) => {
  return `${h1(title)}
          ${Alias}
          ${img(url,altText)}
          ${Collaborations}`}
  
const summaryPage = summaryPageFunction("Lin Manuel Miranda", aliases, linData.executiveSummary.image.photURL, linData.executiveSummary.image.caption, collaborators)
document.querySelector("#executive-summary").innerHTML = summaryPage;
  

// Need to build loop so the add to each other?!




  // career: {
//   shortIntro: "Lin-Manuel Miranda has written and performed in many successful musicals and movies since 2002. His most recent               musical being Hamilton: An American Musical. He recently starred in the movie, Mary Poppins Returns.",
//   MusicalsWritten: ["In The Heights", "Bring It On: The Musical", "Hamilton: An American Musical"],
//   notableRoles: ["Usnavi", "Alexander Hamilton"],
//   notableSongs: ["In The Heights", "My Shot", "Alexander Hamilton"],
//   awards: ["Multiple, Grammy Awards", "Multiple Tony Awards", "An Emmy Award"]
// },




// Finished Career Page Function
const careerPageHTML = (career,shortIntroHeader,shortIntroLocation, musicalsWrittenHeader, musicalsWrittenLocation, notableRolesHeader, notableRolesLocation, notableSongs, notableSongsLocation, awards, awardsLocation) => 
  `
    ${h2(career)}
    ${h3(shortIntroHeader)}
    ${P(shortIntroLocation)}
    ${h3(musicalsWrittenHeader)}  
    ${createListComponent(musicalsWrittenLocation, "list_child")}
    ${h3(notableRolesHeader)}
    ${createListComponent(notableRolesLocation, "list_child")}
    ${h3(notableSongs)}
    ${createListComponent(notableSongsLocation, "list_child")}
    ${h3(awards)}
    ${createListComponent(awardsLocation, "list_child")}
  `

const finishedCareerPageHTML = careerPageHTML("Career", "Intro:", linData.career.shortIntro, "Musicals Written:", linData.career.MusicalsWritten, "Notable Roles:", linData.career.notableRoles, "Notable Songs:", linData.career.notableSongs, "Awards", linData.career.awards)

document.querySelector("#career").innerHTML = finishedCareerPageHTML



const personalBuilder=(personalLife, birthDate, date, birthLocation, location, cityOfResidence, city, nationality, natLocs, family, spouseLable, spouse, parentsLable, parents, kidsLable, kids, petsLable, pets ) => `${h2(personalLife)}
${h3(birthDate)}
${P(date)}
${h3(birthLocation)}
${P(location)}
${h3(cityOfResidence)}
${P(city)}
${h3(nationality)}
${P(natLocs)}
${h3(family)}
${ul(spouseLable)}
${li(spouse)}
${ul(parentsLable)}
${createListComponent(parents)}
${ul(kidsLable)}
${createListComponent(kids)}
${ul(petsLable)}
${createListComponent(pets)}
`

document.querySelector("#personal-life").innerHTML = personalBuilder(
"Personal Life", "Birth Date:", linData.personalLife.birthDate, "Birth Location:", linData.personalLife.birthLocation, "City of Residence:", linData.personalLife.cityOfResidence, "Nationality:", linData.personalLife.nationality, "Family:", "Spouse:", linData.personalLife.family.spouse, "Parents:", linData.personalLife.family.parents, "Kids:", linData.personalLife.family.kids, "Pets:", linData.personalLife.family.pets)

//**************************************************************************************************/
// start creating functions to make sections for extras page
//build a function that can make section for online resources and Places to View

const buildSectionExtras = (style, array, header, sectionClass)=>{
  let buildString = ""
  for(let i=0;i<array.length; i++){
    // call and loop through divExtras function
   let HTMLString = divExtras(style, array[i].name, array[i].url, "Link")  
   buildString = `${buildString}${HTMLString}`
  //  console.log("this is the string it is building in online res", buildString)
  }
  //add header to string
  buildString = `${h3(header)}<section class =${sectionClass}>${buildString}</section>`
  //return HTML string 
  return buildString;
  }
  const onlineResourcesString = buildSectionExtras("divStyle", linData.extrasReport.onlineResources, "Online Resources", "extras-section")
  const placesToViewString = buildSectionExtras("divStyle", linData.extrasReport.placesToViewWork, "Places to View", "extras-section")
  // console.log("online resources string", onlineResourcesString) 
  
  // build a section for past show dates   
  const buildSectionShowDates = (array, listClass) => {
    let buildString = "";
    buildString = buildString + createListComponent(array, listClass)
    buildString = `<h3>Past Show Dates</h3> ${buildString}`
  return buildString;
  }
    
 const showDatesString = buildSectionShowDates(linData.extrasReport.pastShowDates, "list")
 
 document.querySelector("#extras-report").innerHTML = `${h2("Extras")}${onlineResourcesString}${placesToViewString}${showDatesString}`







