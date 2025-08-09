## Requirements

Node.js (v22+ recommended)<br />
npm (comes with Node.js)<br />

## Getting Started

1* clone the repository<br />
2* in the root directory run the command `npm i`<br />
3* run command `node server` for run the json server on port 3001<br />
4* run the command `npm run dev` for run the project on port 3000<br />

## Technologies & Libraries

1* Material UI (MUI) for ui<br />
2* React Query for manage api and caching<br />
3* Redux Toolkit for manage state<br />
4* i18next for language<br />
5* TypeScript  <br />
6* JSON Server for mock data<br />

## Project Structure

src/<br />
 ├── app/   define route for app router<br />
 ├── components/   for shared component and ui<br />
 ├── section/      define components hooks apis types and slices related to a route  <br /> 
 ├── config/       global configration for apis  and languages<br />
 ├── message/      for locals files  <br />
 ├── theme/         define every thing related to theme configration and dark light mode<br />
 ├── store/         define configration for store and redux toolkit<br />
 ├── types/         define type for every shard and reusable types<br />
