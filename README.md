# Accessible Accordion example

# Author: Spencer Goodrich

# Why I made this component:

As useful accordions can be in terms of user experience, they introduce some issues that could make the content less accessible for people using screen readers if they arent implimented properly. For example, if ARIA semantics are not used, a person using a screen reader wouldn't have a way to predict what would happen if they were to click the accordian heading.

When using accordions in React, it can be challenging to implement smooth animations when expanding and collapsing sections. React works differently than vanilla javascript and it can be more complicated to get the heights of elements and manipulate the DOM. It requires a bit more knowledge about the React's lifecycle methods, state management, and component structure. So i wanted to make an accordion others could download and quickly use in their own projects.

Additionally, I needed a custom solution for an accessible accordion that wouldn't require a framework like Bootstrap. Which led me to building it without any dependencies, while following the guidelines set forth by W3's pattern for a accessible accordion.

# Usage:

All you need to do is download the files from the 'Accordion' folder and create a similar folder in your own React app and upload the files. And import the component where ever you want to use it. Then add each accordion item to an object (called 'items' in this example).

Finally, you can use the Accordion in your JSX and pass the items object as a prop. Check the App.js file associated with this code to see example usage.

Like this component? Get more like this at spencergoodrich.com.
