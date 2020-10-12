# url-shortner
MERN | Get Short URL for a Long URL

## Tech Spec
- Backend - Node.js
- Frontend - React.js
- Database - MongoDB

## Steps to run the project
- **Backend**
  - cd server
  - run "npm install"
  - run "node index.js"
- **Frontend**
  - cd client
  - run "npm install"
  - run "npm start"

## Solution approach
- The user submits a long URL from the user interface.
- The shortid npm package generate a unique shortid for each request and generate the url by appending it to the shortBaseName.
- The mapping of short url code, long url is saved in the database.

## Limitations and Assumptions
- The applicatiion heavily relies on the _shortid_ npm package to generate unique shortcode to be append with the url. If there is a collision on a generated shortid then the previous URL info will be overwrittern. 

## Future Scope
- **Analytics** - Based on the number of hits on any short URL graphs can be generated to visulize the traffic on a partcular URL.

## References
- https://dzone.com/articles/how-to-build-a-url-shortener-with-nodejs-and-mongo
- https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
