import { atom } from "recoil"

export const projectState = atom({
  key: "projectState",
  default: {
    title: "Newsfeed",
    description:
      "En NewYorkTimes newsfeed webapplication, som var mit forste projekt hvor jeg brugte Typescript. Udfordring var at hente xml data fra NewYorkTimes, for så at konventere det til json",
    date: "30-4-2020",
    link: "https://news-feed-app.netlify.app/",
    stack: ["React.JS", "Typescript", "Tailwind CSS"],
  },
})

export const projectIndexState = atom({
  key: "projectIndexState",
  default: 0,
})

export const projectListState = atom({
  key: "projectListState",
  default: [
    {
      title: "Newsfeed",
      description:
        "En NewYorkTimes newsfeed webapplication, som var mit forste projekt hvor jeg brugte Typescript. Udfordring var at hente xml data fra NewYorkTimes, for så at konventere det til json",
      date: "30-4-2020",
      link: "https://news-feed-app.netlify.app/",
      stack: ["React.JS", "Typescript", "Tailwind CSS"],
    },
    {
      title: "IplayMusic",
      description:
        "IplayMusic er en music player webapplication som henter data fra Spotify´s API. Det blev til en rigtig fin song preview player da jeg ikke har premium. Desuden jeg lærte en masse om at optimere REST-API kalds ",
      date: "13-1-2020",
      link: "https://iplaymusic-jwn.netlify.app/",
      stack: ["EJS", "Gulp", "SCSS"],
    },
    {
      title: "Blog-Components",
      description:
        "En skole opgave der gik ud på at tænke modulært i form af komponenter. jeg brugte Gatsby.jS, Typescript og derudover Contentful some et Headless-CMS.",
      date: "25-5-2020",
      link: "https://ui-components-jwn.netlify.app/",
      stack: ["Gatsby.JS", "Typescript", "Contentful"],
    },
    {
      title: "Tasks",
      description:
        "Endnu en Todo-List, men det var mit forste React.JS projekt, som gav mig en bredt indblik i hvordan React.js rent faktisk fungere som et javascript-framework. React-Spring blev også brugt meget i forbindelse med projektet.",
      date: "25-2-2020",
      link: "https://task-jwn.netlify.app/",
      stack: ["React.JS", "React-Spring", "SCSS"],
    },
  ],
})
