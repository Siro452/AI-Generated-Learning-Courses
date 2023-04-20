# AI-Generated-Learning-Courses

T3 stack application

This project is using
- Supabase
- Prisma
- Next.js
- Typescript
- Vercel

Useful commands:
- Ctrl + Shift + P = Restarting TS server
- npm run dev: Run Dev Server
- npm run build: Run Production build of the app
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
