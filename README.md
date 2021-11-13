## Thanks for looking

This is the recipe app option.  I am very happy with it considering the time limit and need for some refactoring.  Given more time, I would have liked to complete adding and updating recipes, as well as testing.  The addEditRecipe and recipe pages need particular attention to have components pulled out into their own files.  I feel a little uneasy handing in work without tests, but that's life, and I want to respect the timing aspect of the task.  I did, however, add a dark mode because I don't like looking at bright, white screens. 

It is a Next.js app.  I chose Next.js for a couple of reasons.  The first is improved SEO.  An online weather app might depend on web crawlers to index sites so users can find them.  Traditional React SPAs have a problem in that they only return a div for a crawler to find, and that results in really bad SEO.  Next.js enables server-side rendering so that crawlers get to see the elements a React app creates.  Lesser reasons for chosing it include build-in routing and server-side rendering.  I like that I can include Node scripts within Next.js files. Thanks for taking a look.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
