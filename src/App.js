import * as React from "react";
import "./style.css";
import Accordion from "./Accordion";
import { accordionContent, intro, usage } from "./contentOptions";
const items = [
  {
    title: "ARIA Implimentation",
    content: accordionContent.item1
  },
  {
    title: "Proper HTML Element Usage",
    content:
      "This component makes use of proper HTML element usage to ensure accessibility for users. For example, using a <button> element for the accordion heading, rather than a <div> or <span>, ensures that the heading is properly announced by screen readers and can be easily interacted with using a keyboard. Additionally, the heading level h3 is used here which is correct in this situation but you would need to changee if the parent heading is not an h2."
  },
  {
    title: "Proper 'TAB' sequence",
    content:
      "The component also ensures that the accordion sections can be properly navigated using the 'TAB' key. This allows users to move through the accordion sections in a logical order and easily access the content within."
  },
  {
    title: "Content remains in the DOM",
    content:
      "This is common React issue, which can be avoided. Ensure that all content is availble in the DOM at all times and when nessessary, use ARIA properties to hide elements from the accessibility DOM.  This component ensures that the content remains in the DOM at all times, allowing it to be easily accessed by screen readers and other assistive technologies."
  }
];
export default function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>{intro.title}</h1>
        </div>
      </header>
      <section>
        <div className="container">
          {intro.content}
          <h2>What makes this component accessible: </h2>
          <Accordion className={"accordian1"} items={items} />
          <h2>Usage:</h2>
          {usage.content}
        </div>
      </section>
      <footer>
        <div className="container">
          Like this accessible component? Get more like this at{" "}
          <a href="spencergoodrich.com">spencergoodrich.com</a>
        </div>
      </footer>
    </div>
  );
}
