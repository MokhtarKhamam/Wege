## Requirements

Node.js (v22+ recommended)
npm (comes with Node.js)

## Getting Started

1* clone the repository
2* in the root directory run the command `npm i`
2* run command `node server` for run the json server on port 3001
3* run the command `npm run dev` for run the project on port 3000

## Technologies & Libraries

1* Material UI (MUI) for ui
2* React Query for manage api and caching
3* Redux Toolkit for manage state
4* i18next for language
5* TypeScript  
6* JSON Server for mock data

## Project Structure

src/
 ├── app/   define route for app router
 ├── components/   for shared component and ui
 ├── section/      define components hooks apis types and slices related to a route   
 ├── config/       global configration for apis  and languages
 ├── message/      for locals files  
 ├── theme/         define every thing related to theme configration and dark light mode
 ├── store/         define configration for store and redux toolkit
 ├── types/         define type for every shard and reusable types
