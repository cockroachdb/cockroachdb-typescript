# Using CockroachDB with a React + Netlify App

This project was bootstrapped with Create React App. It is a simple game leaderboard that displays a list of player scores and contains an admin component that lets you add new leaderboard entries.

It uses the Prisma ORM along with Netlify Functions and CockroachDB Serverless to read and write data.

To run the app, clone or fork it into your own GitHub repo, use the repo to create a new Netlify app, and set the DATABASE_URL environment variable in Netlify to a Postgres connection string that Prisma will recognize. Then, deploy to Netlify or run locally using with the Netlify CLI by running netlify link to connect the local netlify environment to your app on Netlify, then run netlify dev.
