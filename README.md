# Views

Home - list of latest posts
Sign up - Allows visiters to create an account ✅
Sign in - Allows existing users to sign in ✅
Post creation - Displays a form which allows user to submit new post ❌
Single mow - Allows to read single mow and to delete or edit mow ❌
Edit mow - Allows creator to edit single mow. ❌
Profile - Allows us to view single user's mows ❌
Profile edit - Allows user to edit user profile ❌

## Route Handlers

GET '/' - Renders home page ✅

GET '/authentication/sign-up' - Renders sign up page ✅
POST '/authentication/sign-up' - Handles account registration ✅

GET '/authentication/sign-in' - Renders sign in page ✅
POST '/authentication/sign-in' - Handles existing user authentication ✅

POST '/authentication/sign-out' - Handles user sign out ✅

GET '/mow/create' - Renders mow/post creation page ✅
PSOT '/mow/create' - Handles new mow/post creation ✅

GET '/mow/:id' - Loads mow/post cfrom database, renders single mow page ❌

GET '/mow/:id/edit' - Loads mow from database, renders edit page ❌
POST '/mow/:id/edit' - Handles edit form submission ❌

POST '/mow/:id/delete' - Handles deletion ❌

GET '/profile/:id' - Loads user with params/id from collection, renders profile page ❌
GET '/profile/:id/edit' - Loads user, renders edit page ❌
POST '/profile/:id/edit' - Handles profile edit form submission ❌

### Models

User

- name: Syring, required ✅
- email: Syring, required ✅
- passwordHashAndSalt: Syring, required ✅
- picture: Syring, required ❌

Publication ❌

- message: String, required, maxlength 300 ✅
- picture: String ❌
- creator: required, ObjectId //of a user, should hold a referance to the user created the publication ✅
- createdAt: Date (add timestemps option to the publicationSchema) ✅
- updatedAt: Date (add timestemps option to the publicationSchema) ✅

### Wishlist

- Add date formatting helper to hbs

- Like "mows":
  Like model. Most liked mows will be featured.

- Sentiment detection (NLP) - npm package: sentiment

As a precondition to a mow post we can run sentiment method and if it is a negative post we can with next > throw an error to rewrite the post and stop publication.

- Share button

- Require users to confirm email before publishing

- SSO login :
  https://www.passportjs.org/
