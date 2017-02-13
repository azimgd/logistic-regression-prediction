# CTR Prediction

##sidenote
Tests are a bit over-engineered from my opinion, that was only to show how i do mocking/spying etc. Current values that are being tested again are not having high precision, i had to use external library (https://github.com/MikeMcl/big.js) to make mathematical operations due to the nature of JS with floating numbs. In any case everything is wrapped in separate function so summation/division operator could be changed easily.

##test
`curl -X POST -d '{"deviceExtBrowser": "Firefox", "bannerExtSize": "300x250", "deviceLanguage": "de", "deviceExtType": "tablet" }' -H "Content-Type: application/json" http://localhost:3000`

##todo
- [ ] Validate mathematical operations using high precision calculators (maybe wolfram)
- [ ] Remove hard 16 units precision format in logistic service
- [ ] Accept input request even if it's not proper json (bodyParser.json() doesn't accept requests without text/json header)

##commands
- `npm run build` to build project into `lib` folder
- `npm run dev` to start auto build on save
