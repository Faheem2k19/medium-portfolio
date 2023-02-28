
#### Whether you're a developer or not, I'll guide you step-by-step on how to configure and run the project. You can easily fork or clone or download the repository and replace the existing data with your own to make it yours.

#### Simple As That!

I've deployed the website with Vercel. Check the link below-

https://asifulalam-medium.vercel.app

The website is fast, responsive, highly customizable and you can tailor it to your needs. With some knowledge of tailwindcss, you can also change the color code of the template.
So, let's get started and have some fun customizing your new website!

## Stacks

The technology stack I've used to create this template includes Next.js and Tailwindcss. To display Medium data, I've converted the Medium RSS feed to an API using rss2json and utilized it to fetch article queries.

## Github_Repo
The first step is to clone the repository or download the zip file of the project.

## Install_dependencies
Open your preferred code editor, navigate to the root of the directory, 

and run the command below on your terminal to install all the project dependencies.

```
yarn install

```
The dependencies will be retrieved from the package.json file and will be stored in the yarn.lock file.

## Run_The_Project

Now we're all set to run our development server. write ```yarn run dev``` on your terminal and Boom!

Open http://localhost:3000 with your browser to see the result.

## Folder_Stracture
Here's the folder structure of the project:

```
.
└── medium-blog-feed/
    ├── .next
    ├── node_modules
    ├── public
    └── src/
        ├── components
        ├── layout
        ├── pages/
        │   └── api
        ├── styles
        └── utils
```

*The root directory of the project is named medium-blog-feed.*

First up, we have the **.next** folder. This directory is created by Next.js and contains the production-ready code for the website after it has been built.

Next, we have the **node_modules** folder. This is where all the dependencies that our project requires are installed using the yarn install command.

Moving on, we have the **public** folder. This directory contains all the static files for our website such as images and fonts.

*The src directory is where most of the code for our project is located. Inside this directory, we have several subdirectories.*

The **components** folder contains reusable components that are used across multiple pages of the website. This helps keep our code organized and easy to maintain.

The **layout** folder is where we keep the layout component used to render our website's header and footer. This helps keep our website consistent and easy to navigate.

The **pages** folder contains the pages of our website. These are the different routes that can be accessed by the user. Additionally, we have an api folder inside pages that contains Medium API and data.

The **styles** folder contains the global CSS files that we use throughout our website.

Lastly, we have the **utils** folder containing utility functions used across the website.
We've designed this folder structure to keep our code organized and easy to maintain.

## Project_Configuration

Let's start with next.config.js

```JavaScript
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)
```

This specific file is using a package called @next/mdx, which is a plugin for Next.js that enables support for rendering MDX files (a combination of markdown and React components) as pages or components. The withMDX function is used to wrap the default Next.js configuration in order to extend it with support for MDX.

The configuration object for withMDX function includes the extension key, which specifies the file extensions that should be recognized as MDX files. In this case, it includes .md and .mdx. The options object allows for customization of MDX rendering with plugins.

The pageExtensions key in the nextConfig object specifies the file extensions that Next.js should look for when building pages. It includes .ts, .tsx, .js, .jsx, .md, and .mdx. The reactStrictMode key is used to enable strict mode for React components.

Finally, the module.exports statement is used to export the merged configuration object created by combining the default Next.js configuration with the withMDX configuration.

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '0.2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ]
}
```

The tailwind.config.js file is important because it allows you to customize the Tailwind CSS framework to match your project's unique design requirements. It gives you power to customize various aspects of the framework, such as the colors, fonts, and spacing used in your project.

In the provided code, the content array specifies the files that Tailwind should scan to generate the CSS classes used in your project. By default, it scans only the files in the ./pages directory, but this configuration extends it to the ./utils and ./components directories as well.

The theme object is used to customize the various design properties of your project, such as the spacing, colors, and fonts. The extend property is used to extend the default values with your own custom values. In this example, the container property is extended to include custom padding values for different screen sizes, and a custom screen size sm is added.

The plugins array includes any plugins you want to use with Tailwind CSS. In this example, the @tailwindcss/typography plugin is added to allow for easy typography customization.

## Fetch_Article
Now we need to discuss about the two main components responsible for displaying the Medium article. First, we need to fetch the article. To do this, we need to replace the existing @ username with our own. But where can you find it? Well, in the pages folder, there's another folder named api that contains the necessary API.

To be more specific, we can use the following API, which I have generated using rss2json:

```
https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@asifulalamfahim
```

This API is responsible for fetching the Medium article data that we want to display on our website.

Now, let's breakdown **cards.js** file

```JavaScript
const Articlecard = ({ article }) => {

    const sanitizedDescription = DOMPurify.sanitize(article.description);
    const descriptionText = sanitizedDescription.replace(/<figcaption>.*<\/figcaption>/gi, '').replace(/<[^>]+>/g, '');


    return (

        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800">
            <div>
                <img className="rounded-t-lg" src={article.thumbnail} alt />
            </div>
            <div className="p-5">
                <Link href={article.link}>
                    <h5 className="mb-2 text-xl lg:text-2xl 2xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {article.title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }} 
                dangerouslySetInnerHTML={{__html: descriptionText}}
                />
                 <p className="text-cyan-600">
                    {moment(article.pubDate).format("MMMM Do YYYY")}
                </p>
            </div>
        </div>
    );
};
```

We've implemented DOMPurify to sanitize the article.description property and remove any unwanted HTML tags. Afterwards, we utilized the following code:

```
const descriptionText = sanitizedDescription.replace(/<figcaption>.*<\/figcaption>/gi, '').replace(/<[^>]+>/g, '');
```

But what does this code actually do?

The first replace() method eliminates any figcaption tags along with their content. This is necessary since Medium includes a figcaption tag with each image in the article, and we don't want to display that in the description.

The second replace() method uses a regular expression to match and remove any other HTML tags (i.e., anything within angle brackets). This guarantees that only the plain text of the description is displayed.

We return a div that contains the entire card, with the article title, description, and publication date. The title is a clickable link that takes the user to the article on Medium. The description is truncated to two lines using CSS ellipsis and overflow properties.

The second component is **allcard.js**

```JavaScript
const Allcards = () => {
    const [mediumData, setMediumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(
            mediumURL
        )
            .then(res => res.json())
            .then(response => {
                setMediumData(response.items);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading && <p>Fetching data from Medium...</p>}
            {error && <p>There was an error fetching the data: {error.message}</p>}
            {!isLoading && !error && (
                <>
                    <div className='pb-10 flex justify-center'>
                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4">
                            {mediumData.slice(0, 9).map((article) => (
                                <Articlecard article={article} />
                            ))}
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <Link href={socialprofils.medium} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded flex items-center">
                                View All <HiOutlineArrowNarrowRight className="ml-2" size={20}/>
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};
```

Here, we've used useEffect hook, we fetch the data from the mediumURL API endpoint and update the mediumData state with the response. We also handle any errors and update the isLoading state accordingly.
Next, we check for the isLoading and error states. If isLoading is true, we display a loading message, if error has a value, we display an error message. If neither of them is true, we display the Articlecard component for each medium article in the mediumData array (using the map method). We also limit the number of articles displayed to 9 and provide a button to view all articles.

## Edit_Data

Let's take a closer look at the pages folder, as it's a crucial part of the website's structure:

```
└── pages/
    ├── api/
    │   └── hello.js
    ├── _app.js
    ├── _document.js
    ├── contact.mdx
    ├── about.mdx
    └── index.js
```

The pages folder contains all the Next.js pages for the website. Here's a quick rundown of each file:

**api/hello.js**: This file contains the medium API and static data. You can modify or add your own information by editing this file.

**_app.js**: This file allows you to add global CSS, JavaScript, and other elements to all pages in the application.

**_document.js**: This file is used to customize the initial HTML and body tags rendered for the application.

**about.mdx** and **contact.mdx**: These two files are written in Markdown and can be modified directly to change the content of the Contact and About pages.

**index.js**: This file serves as the main landing page or home page of the website.

It's important to note that any file created in the pages folder will be treated as a page in Next.js. This provides flexibility in creating and modifying pages for your website.

## Deploy_Website_With_Vercel

To deploy your website, you can follow the below article:

https://dev.to/terieyenike/how-to-use-vercel-cli-for-deployment-361f

