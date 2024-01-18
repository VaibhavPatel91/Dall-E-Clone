To run this project

step-1 - run command {npm init} in both folders client and server
step-2 - go to the open.ai website and generate api key
step-3 - put your api key into the .env file like this OPENAI_API_KEY="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"
step-4 - verify that all packages are installed in package.json file
step-5 - create new cluster and database in the mongodb atlas.
step-6 - change your mongodb connection string in the .env file like this MONGODB_URL="mongodb+srv://<username>:<password>@cluster0.ikxpb04.mongodb.net/?retryWrites=true&w=majority"
step-7 - go to the cloudinary and create account 
step-8 - replace this three --  CLOUDINARY_CLOUD_NAME=''  CLOUDINARY_API_KEY=""  CLOUDINARY_API_SECRET='' values in the .env files you will get this vales from a cloudinary website after login
step-9 - run both folder in the terminal

For run the client - npm start
For run the server - npm run dev

And your project will run 

IF THERE ARE ANY ERRORS IT IS PROBABLY COMING BECAUSE OF PACKAGES SO READ THE ERRORS AND CHECK THE LATEST DOCUMENTATION OF THE PACKAGE.
