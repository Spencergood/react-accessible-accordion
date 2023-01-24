# Accessible Accordion Example (Pure React Component)


## Why I made this component:

As useful accordions can be in terms of user experience, they introduce some issues that could make the content less accessible for people using screen readers if they arent implimented properly. For example, if ARIA properties, roles ad states are not used, a person using a screen reader wouldn't have a way to predict what would happen if they were to click the accordian heading.

Additionally, I needed a custom solution for an accessible accordion that wouldn't require a framework like Bootstrap. Which led me to building it without any dependencies as a pure React component, while following the guidelines set forth by W3's pattern for an accessible accordion.

## Usage:

All you need to do is download the files from the 'Accordion' folder and create a similar folder in your own React app and upload the files. And import the component where ever you want to use it. Then add each accordion item to an object (called 'items' in the demo).
It looks something like this:

    const items = [
    {
      title: "ARIA Implimentation",
        content: "Lorem ipsum dolor set emet."
    },
    {
     title: "Proper HTML Element Usage",
     content:
       "Lorem ipsum dolor set emet."
    }
  ];

Finally, you can use the Accordion in your JSX and pass the items object as a prop:

  "<Accordion className={"accordian1"} items={items} />"

Check the App.js file associated with this codesandbox to see example usage.


## Demo

https://x1xtb0.csb.app/

## Why should we use ARIA when making an accordion:

WAI-ARIA, or Web Accessibility Initiative-Accessible Rich Internet Applications, is a set of standards and techniques for making web content more accessible to users with disabilities, particularly those using screen readers. Properly implimented, it enhances the experience by helping them percieve the contents of the web page easier.
<br>
To create an accessible accordion using WAI-ARIA, the following roles, properties, and states are necessary:
<br>
* aria-labelledby - This attribute should be added to the accordion content element, and should point to the ID of the button element. This allows screen readers to announce the label when the user interacts with the content.
* aria-controls - This attribute should be added to the accordion button element, and should point to the ID of the element that contains the content of the accordion section.
* aria-expanded - This attribute should be added to the accordion button element, and should be set to true or false depending on whether the accordion section is currently expanded or collapsed which is managed in our component using React's useState hook.
* region - This attribute should be added to the element that contains the accordion content. This allows the screen reader to identify the element as a region of content, rather than a generic container element.
<br>
<br>


Like this component? Get more like this at 
[spencergoodrich.com](https://spencergoodrich.com)


