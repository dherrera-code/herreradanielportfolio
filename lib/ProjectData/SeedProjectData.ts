import { IProjectData } from "../Interface/interface";

export const MyProjectsData: IProjectData[] = [
    {
        Id: 1,
        ImgSrc: "../assets/VennOverviewWebsite.png",
        Title: "Venn FullStack",
        Description: "Venn is a social scheduling app where friends and colleagues can create and scheduling events based on everyone's saved availability! A fullstack application built with Next.js and powered by a .NET API using EF Core to deliver fast, reliable backend functionality.",
        GithubLink: "https://github.com/duartemjoseph-spec/vennfrontend",
        HostLink: "https://venn-iota.vercel.app/"
    },
    {
        Id: 2,
        ImgSrc: "../assets/PokedexWebsite.png",
        Title: "Pokedex Entries",
        Description: "This is a Vite powered project using semantic HTML and TailwindCSS for clean Pokedex design and used a free Pokemon API to get all relevant data on a searched Pokemon!",
        GithubLink: "https://github.com/dherrera-code/DHPokemonAPI",
        HostLink: "https://ashy-mushroom-0fe13a81e.6.azurestaticapps.net/"
    },
    {
        Id: 3,
        ImgSrc: "../assets/MyInspirationWebsite.png",
        Title: "My Inspirational Person Website",
        Description: "This webpage is dedicated to my sister who inspires me to work hard towards my goals and make my dreams come true! This is a multipage site built in Next.js using a fully component based architecture.",
        GithubLink: "https://github.com/dherrera-code/inspirationalperson",
        HostLink: "https://salmon-forest-0e150bd1e.6.azurestaticapps.net/"
    },
]