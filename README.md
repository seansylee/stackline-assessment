# Stackline Front-End Engineer tech assessment

You can visit the deployed website [here](https://zealous-stonebraker-54640e.netlify.app/) -- (continuous deployment by [Netlify](https://www.netlify.com/))

## Some things to note:

The other approach I had in mind in sorting the table was to keep track of the `sortCategory` and `ascending | descending` in the redux store. Dispatching the action on the `onClick` of each of the category buttons then sort the sales items accordingly to these values. We can utilize the fact that `useSelector()` hook does not modify the original state; rather a modified copy of it to ensure that sorting the sales will not fluctuate or create regressions in other places that might be using this data i.e. `<Graph/>`

- Seemed that SVG file for the logo provided to me was broken, but I went ahead and added it anyways (hope this is not a problem).

- The table is able to sort by clicking each of the table category. (Toggles between ascending and descending) The sorting function can seem a little longer than needed. This was because of the typings of the objects and TypeScript's strict Object key typing, that I could not just pass around the object/ or the data's key values to access without changing the interface around which would be ideal in the long run but caused lots of regressessions elsewhere!

(Another small thing is that git was not able to catch the change in file naming convention, note the lower case `table.css` please know that this was noted and not a careless mistake in naming convention)

Graph was created using [react-vis](https://www.npmjs.com/package/react-vis)
(Note that the styles for the Graph component had to be done on `sass` as a result.

...

That will be all!

Thank you for your consideration,
Sincerely,
Sean Lee. 
