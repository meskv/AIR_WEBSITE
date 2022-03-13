export const snippet = `my_dict1 = {'a' : 1, 'b' : 2, 'c' : 3}
my_dict2 = {'d' : 4, 'e' : 5, 'f' : 6}
  
# Method 1
result = { **my_dict1, **my_dict2}
print(result)
  
# Method 2
result = my_dict1.copy()
result.update(my_dict2)
print(result)
  
# Method 3
result = {key: value for d in (my_dict1, my_dict2) for key, value in d.items()}`;

const language = `python`;
const showLineNumbers = true;
const startingLineNumber = 1;
const theme = `dracula`;


export const formData =
    [
        {
            key: "dateTime", value: ` MARCH 9, 2014`,
        },
        { key: "subHeading", value: "This is subheading" },
        {
            key: "codeSnippet", value: `${snippet}`
        },
    ]

export const body = [
    {
        heading: `The Cosmos is all there is Or ever was, or ever will be`
    },
    { dateTime: ` MARCH 9, 2014` },
    { subHeading: `COSMOS IS ALSO A STORY ABOUT US` },
    {
        paragraph: [
            { text: `A generation ago, the astronomer,` },
            { link: `< a href = "https://en.wikipedia.org/wiki/carl_sagan" >, Carl Sagan</a >` },
            { text: `stood here and launched hundreds of millions of us on a great adventure the exploration of the universe revealed by science.It's time to get going again. We're about to begin a journey that will take us from the infinitesimal to the infinite, from the dawn of time to the distant future.We'll explore galaxies and suns and worlds, surf the gravity waves of space-time, encounter beings that live in fire and ice, explore the planets of stars that never die, discover atoms as massive as suns and universes smaller than atoms.` }
        ]
    },
    {
        paragraph: [{
            text: `It's the saga of how wandering bands of hunters and gatherers found their way to the stars, one adventure with many heroes. To make this journey, we'll need imagination. But imagination alone is not enough because the reality of nature is far more wondrous than anything we can imagine. This adventure is made possible by generations of searchers strictly adhering to a simple set of rules test ideas by experiment and observation, build on those ideas that pass the test, reject the ones that fail, follow the evidence wherever it leads and question everything. Accept these terms, and the cosmos is yours.`
        }]
    },
    { codeSnippet: [`${snippet}`, language, showLineNumbers, startingLineNumber, theme] },
    {
        blockquote: `Scrimba is a platform for interactive coding screencast where you can run the code at any moment in time`
    },
]


// export const body = [{
//     heading: "This is body heading",
//     subHeading: "This is subheading",
//     codeSnippet: snippet,
// }];
