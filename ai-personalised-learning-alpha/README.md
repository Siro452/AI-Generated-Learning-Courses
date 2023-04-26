# Dacreed AI Personalised Learning

Project creacted using the T3 Stack

## Getting Started

1.  npm install within the root directory to install all dependencies

2.  npm run dev to start the development server

3.  npm run build to build the project and check for any linting errors of typescript

## routers

within src/server/routers are the api routes to the database

Must import the routes within the root.s and subroute within it

### finduser.ts

1.  This is the route to find a user by their userid (findUnique method is only valid with either userid or email) and all their relational data

2.  within the frontend the middleware will check if userid is stored in the localstorage and if not will redirect to the login page else will go directly to the upload page

    a. this is called on by this section of code

        const findExistingUserSession = api.findUser.findExistingUserSession.useQuery(

    {
    userid: global.localStorage?.getItem("userid") ?? "",
    }
    );
    const router = useRouter();
    if (
    !findExistingUserSession.isLoading &&
    findExistingUserSession.data !== null &&
    findExistingUserSession.data !== undefined
    ) {
    // User not found.
    console.log(findExistingUserSession.data);
    router.push("/prototype4/uploadfile");
    }

3.  the ideal pathway was to have it if user is found but not stored in local storage it will create a new session with the same userid

4.  Most optimal is to have both email and user id as unique identifiers and have that as login sequence (better relations with the database and values) i.e a login functionality - see if you can recreate it as close to dacreed authentication to allow ease of migration in the future

#### Possible issues

user id is saved but no username is associated with that userid when saving data, may need to change it to return username and userid

### createcourse.ts

1. logic was to have it when user input document -> api return array object with courseid -> frontend use courseid to upload array object to database during the loading page

2. once saved to database in the corresponding title and description and questions etc. api route to query the database and return the array object to the frontend

3. loading page can be calculated via either % of packets to be returned and calculate the time through that
