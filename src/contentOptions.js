import React from "react";
const meta = {
  title: "Lustgarten",
  description:
    "The Lustgarten Foundation funds the world’s preeminent pancreatic cancer researchers, leading the pursuit of bold and innovative science toward earlier detection, better treatments and a curable disease."
};

const intro = {
  title: "Accessible Accordion in React",
  content: (
    <React.Fragment>
      <div className="intro">
        <h2>Why I made this component: </h2>
        <p>
          As useful accordions can be in terms of user experience, they
          introduce some issues that could make the content less accessible for
          people using screen readers if they arent implimented properly. For
          example, if ARIA properties, roles ad states are not used, a person
          using a screen reader wouldn't have a way to predict what would happen
          if they were to click the accordian heading.
        </p>

        <p>
          Additionally, I needed a custom solution for an accessible accordion
          that wouldn't require a framework like Bootstrap. Which led me to
          building it without any dependencies, while following the guidelines
          set forth by{" "}
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">
            W3's pattern for a accessible accordion.
          </a>
        </p>
      </div>
    </React.Fragment>
  )
};

const accordionContent = {
  title: "Accordion Title",
  item1: (
    <React.Fragment>
      <h3>Why should we use ARIA when making an accordion:</h3>
      <p>
        WAI-ARIA, or Web Accessibility Initiative-Accessible Rich Internet
        Applications, is a set of standards and techniques for making web
        content more accessible to users with disabilities, particularly those
        using screen readers. Properly implimented, it enhances the experience
        by helping them percieve the contents of the web page easier.
      </p>
      <h3>
        To create an accessible accordion using WAI-ARIA, the following roles,
        properties, and states are necessary:
      </h3>

      <ul>
        <li>
          <b>aria-labelledby </b>
          <span>
            - This attribute should be added to the accordion content element,
            and should point to the ID of the button element. This allows screen
            readers to announce the label when the user interacts with the
            content.
          </span>
        </li>
        <li>
          <b>aria-controls </b>
          <span>
            {" "}
            - This attribute should be added to the accordion button element,
            and should point to the ID of the element that contains the content
            of the accordion section.
          </span>
        </li>
        <li>
          <b>aria-expanded </b>
          <span>
            - This attribute should be added to the accordion button element,
            and should be set to true or false depending on whether the
            accordion section is currently expanded or collapsed which is
            managed in our component using React's useState hook.
          </span>
        </li>
        <li>
          <b>region </b>
          <span>
            - This attribute should be added to the element that contains the
            accordion content. This allows the screen reader to identify the
            element as a region of content, rather than a generic container
            element.
          </span>
        </li>
      </ul>
    </React.Fragment>
  ),
  accordionContent2: {},
  accordionContent3: {}
};

const usage = {
  content: (
    <React.Fragment>
      <p>
        All you need to do is download the files from the 'Accordion' folder and
        create a similar folder in your own React app and upload the files. And
        import the component where ever you want to use it. Then add each
        accordion item to an object (called 'items' in this example).
      </p>
      <p>
        Finally, you can use the Accordion in your JSX and pass the items object
        as a prop. Check the App.js file associated with this code to see
        example usage.
      </p>
    </React.Fragment>
  )
};

export { meta, intro, accordionContent, usage };
