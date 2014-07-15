# AngularJS

## Directives

Q: When to give a directive a `controller`? When to use the `link` function?
Q: When using a controller, when to alias the controller and use {{ alias.prop }} and when to just use {{ prop }}?


# Dashboard

## Todo

### Funnel page
- The funnel page does not yet give suggestions for collections/filter fields.
- The funnel page lacks visual validation (colors around boxes). Now nothing happens if you submit.
- The funnel page does not support changing the datatype (right now, every value is a string)
- Funnel filter currently only accepts exact matches, but we should support other filters as well.
- You can delete all steps of the funnel, which should not be possible.

### Highcharts
- HighCharts is not free for commercial use. What now?
- Only show highcart if data is available (or show placeholder while it has no data? and hide the credits + title?)
- Make sure that Highcharts credits enabled false (fork the directive? create custom directive?)

### General
- Testing
- Loading of dependencies is not done like it should (just some random CDN/static files) (use requirejs?)
- Globally store API root url
- Should use input border for input validation
- Separate module for controllers, not sure if thats a wise decision..
- If the API is unavailable, a message should be shown. $http never uses the .error right now.
- Should make some kind of flashmessage thing to show a message after fire button has succeeded.
- Extract filter to directive (so that it can be used in funnel and in audit)

### Audit
- Pagination

## Decisions
- Support IE9 and higher