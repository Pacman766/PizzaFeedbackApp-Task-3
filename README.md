## Getting Started
npm i

## Task #3 - Feedbacks

Our PizzaParty is over and now we need to collect feedback from participants. This information will be used for future parties. I think it will be a good idea to collect guest phone numbers, comments, and a 5-star rating. You can add other fields which you think would be useful.
API
Party guests
https://gp-js-test.herokuapp.com/pizza/guests
The World Book of Diets
https://gp-js-test.herokuapp.com/pizza/world-diets-book/NAMES
Check your guests if they are vegans. NAMES is urlencoded guest names separated by a comma.
Example:
https://gp-js-test.herokuapp.com/pizza/world-diets-book/Anton%20Chehov,Vladimir%20Pushkin
Get diets for "Anton Chehov" and "Vladimir Pushkin"
How PizzaFeedbackApp should look and work?
We start with an empty page with text “Loading”:
1.	on page load:
a.	if it is the first load and LocalStorage is empty - we request guests and their diets and save this in LocalStorage
b.	if we already opened the app - get the list of guests from LocalStorage
2.	display guests list when guests and diets are loaded (from API or LocalStorage)
3.	make clickable guests who ate pizza - vegans should be displayed with green
4.	when clicking the guest name: 
a.	hide the guest list
b.	if the feedback for the guest was not filled - show a form with necessary fields and the 5-star rating (3 stars is the default rating)
c.	otherwise (if the feedback for the guest was filled), show the page with filled information and DELETE button (show only the information, no forms should be visible here)
5.	show empty feedback form for a current guest if DELETE button was clicked
a.	show an error message if a phone number is wrong (the phone field should be 3-10 chars length and accept numbers, +, () and a space " " char)
b.	by default show the CANCEL button
c.	show SAVE button when information is filled and valid
6.	CANCEL button closes the form and shows the guests list
7.	SAVE button stores feedback to LocalStorage and shows guests list 
8.	DELETE button removes feedback from LocalStorage and shows guests list (and removes a tick mark from the guest, of course)
9.	mark guests with saved feedback using   (use emoji "tick" symbol)
10.	add the "Clear app" button which removes all cached data (guests list, guests feedback). When clicking on it the app should be refreshed and the new guests' list is requested (step 1a)
What to use
1.	Use any framework you want: React, Svelte, SolidJS, Elm, Backbone, Vue
2.	Use form libs with React, if you want: react-hook-forms, Formik, etc. If you chose another framework (not React), you can use any lib that will help to work with forms.
3.	Use any lib that can help with working with API and LocalStorage: SWR, react-query, redux-persist, etc. If you chose another framework (not React), you can use any lib that will help in this.
4.	Any CSS framework can be used (Bootstrap, MaterialUI, etc.)
How/where to create PizzaFeedbackApp?
Link to your app should be sent via https://forms.gle/rL6z1H29ChUkb6kG9. 
UI examples
How to render guest	Why?
Marley York (not clickable)	Guest who did not eat pizza
Lynn Cooke	Guest who ate pizza (haven't filled the feedback yet)
Tanner Holmes	Vegan guest who ate pizza (haven't filled the feedback yet)
 Reggie Dawson	Guest who filled feedback
  Brett George	Vegan guest with filled feedback
Feedback screen examples
 
Filling the form
 
Empty form
 
View after saving the form or when opening user with filled feedback
