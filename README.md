# Getting Started with Poke

## Changing Environment

To toggle app environment between DEV and PROD:
1. Go to src/config/envConfig
2. Change export ENV to required environment
- Always make sure to change the ENV to PROD before release - 


## Folder structure (src/)

App entry point --> index.js

1. components --> Singular species does not depend on anything else and is used throughout the app.
2. containers --> Plural species that is created with components and is used throughout the app.
3. helpers --> Functions which are used throughout the app.
4. pages --> Meat of the app. App is build by using these pages. Each page further has its own helpers and components, which are only used in that page. 
5. customHooks --> custom hooks for handling complex state and effects logic, for e.g. - fetching data.
6. assets --> Images and icons used throught the app


## Branch Naming Convention

1. branch name starts with 'pr-'
2. all letters are smallcase and seperated by '-'
3. eg: 'pr-ui-home'


## Figma Rules

1. Add colors in rgba format to design system
2. Use colors only from design system for creating components
