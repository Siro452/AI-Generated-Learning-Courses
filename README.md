# AI-Generated-Learning-Courses

T3 stack application

This project is using

- Supabase
- Prisma
- Next.js
- Typescript
- Vercel

Useful commands:

- Ctrl + Shift + P = Restarting TS server - if you have any problems with the TS server updating on changes of the code
- npm run dev: Run Dev Server
- npm run build: Run Production build of the app (check if any linting errors before catching them in vercel deployment)
- npx prisma db pull: Pull the latest version of the DB onto your local machine
- npx prisma db push: Push your version of the Prisma DB to update
- npx prisma generate: (Taken from online) The generate command generates assets like Prisma Client based on the generator and data model blocks defined in your prisma/schema.prisma file.

Here is an example of data transfer in the stack. There is lots of helpful documentation to look at and consume.

- Link: https://shorturl.at/uGO26

Regarding the commented code:

- Check the commented stuff to scan if there is anything that might be useful to you or not.
- Don't be afraid once you've checked it to cut it out to clean up the code.

Important Note:

- Once you clone you may see 2x tsconfig.json files. I had a problem with the way my machine would I believe try and find the innermost file so I had to put another one outside of the directory and then it didn't have any problems. You can test to see if it's fine on your machine by removing the outermost file and restarting the TS Server.

### TRPC

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
