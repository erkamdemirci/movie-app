# Movie App Case Study

# https://movie-app-ojni.vercel.app

## **Usage**

_**Important!!** <br>
To run the application on localhost; an environment variable named "REACT_APP_TMDBKEY" must be defined. This is a TMDB Api Key used for API calls._
<br><br>
First install the dependencies;

```sh
npm i
```

then run the app by using the command below in the root directory;

```sh
npm run start
```

## **Folder Structure**

    .
    ├── ...
    ├── src
    │   ├── api                       # A component for react-query api calls
    │   ├── components
    │   │   ├── Icons
    │   │   ├── Layout                # Layout for homepage
    │   │   ├── Navbar                # Logo and language toggler
    │   │   ├── Movie
    │   │   │   ├── MovieItem         # Represents each movie item in the MovieList
    │   │   │   └── MovieList
    │   │   └── Pages
    │   │       ├── Details.page      # Movie Details
    │   │       ├── Home.page         # The home for listing popular movies and search.
    │   │       └── Search.page       # Search Component
    │   ├── context         # Used for store values (sorting)
    │   ├── hooks           # Used for context
    │   ├── i18n            # Language (react-intl)
    │   ├── styles          # Global styles
    │   └── ?               #
    └── ...

## **Developed with**

- React
- Typescript
- React-Query
- Styled-components
- Framer-Motion
- Axios
