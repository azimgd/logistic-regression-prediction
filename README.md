# CTR Prediction

##sidenote
Tests are a bit over-engineered from my opinion, that was only to show how i do mocking/spying etc. Current values that are being tested again are not having high precision, i had to use external library to make mathematical operations due to the nature of JS with floating numbs. In any case everything is wrapped in separate function so summation/division operator could be changed easily.

##todo
- [ ] Validate mathematical operations using high precision calculators (maybe wolfram)
- [ ] Remove hard 16 units precision format in logistic service

##commands
- `npm run build` to build project into `lib` folder
- `npm run dev` to start auto build on save
