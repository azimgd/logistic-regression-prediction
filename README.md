# CTR Prediction

##install and demo
- `npm install`
- `node lib/index`

##test
`curl -X POST -d '{"deviceExtBrowser": "Firefox", "bannerExtSize": "300x250", "deviceLanguage": "de", "deviceExtType": "tablet" }' -H "Content-Type: application/json" http://localhost:3000`

##todo
- [ ] Validate mathematical operations using high precision calculators (maybe wolfram)
- [ ] Remove hard 16 units precision format in logistic service
- [ ] Accept input request even if it's not proper json (bodyParser.json() doesn't accept requests without text/json header)
- [ ] Input request validation to controller methods
- [ ] Write more integration + unit tests on controllers
- [ ] Fix redis null hget

##commands
- `npm run build` to build project into `lib` folder
- `npm run dev` to start auto build on save

##sidenote
Logistic tests are a bit over-engineered from my opinion, that was only to show how i do mocking/spying etc. Current values that are being tested against are not having high precision, i had to use external library (https://github.com/MikeMcl/big.js) to make mathematical operations due to the nature of JS with floating numbs. In any case math operators are wrapped in separate functions so they could be swapped easily.
I had not much time to write (integration ?!) tests for controller methods, but in my opinion tests for `calculateCtr` method and dataSelectors are cruicial.
