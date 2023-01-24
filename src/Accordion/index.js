import React, { useEffect, useRef, useState } from "react";
import "./style.css";
const animationDuration = 250;
const Accordion = (props) => {
  const [activeStates, setActiveStates] = useState(
    Array(props.items.length).fill(false)
  );
  const accordionRef = useRef([null]);
  const contentRef = useRef(props.items.map(() => React.createRef()));

  const handleClick = (index) => {
    contentRef.current.forEach((ref, i) => {
      ref.current.setAttribute("data-acc-height", ref.current.scrollHeight);
    });
    contentRef.current.forEach((ref, i) => {
      ref.current.setAttribute("data-acc-height", ref.current.scrollHeight);
    });

    contentRef.current.forEach((ref, i) => {
      if (index === i) {
        let start = null;
        let endHeight = 0;
        let currentHeight = ref.current.clientHeight;
        if (activeStates[i]) {
          endHeight = 0;
        } else {
          endHeight = ref.current.getAttribute("data-acc-height");
        }
        const animation = (timestamp) => {
          if (!start) start = timestamp;
          let progress = timestamp - start;
          let newHeight =
            (endHeight - currentHeight) * (progress / animationDuration) +
            currentHeight;
          //set the transition style using CSS - Bicubic Easing used here - remove if you want default
          ref.current.style.transition =
            "height 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955)";
          //animate the height
          ref.current.style.height = newHeight + "px";

          if (progress < animationDuration) {
            requestAnimationFrame(animation);
          }
        };
        requestAnimationFrame(animation);
      }
    });

    setActiveStates(
      activeStates.map((state, i) => (i === index ? !state : state))
    );
  };

  useEffect(() => {
    contentRef.current.forEach((ref, i) => {
      ref.current.style.height = "0px";
    });
  }, []);

  return (
    <div ref={accordionRef} className={`sg-accordion ${props.className}`}>
      {props.items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${
            activeStates[index] ? "active" : "inactive"
          }`}
        >
          <h2>
            <button
              id={`${props.className}-control-${index}`}
              onClick={() => handleClick(index)}
              aria-controls={`${props.className}-content-${index}`}
              aria-expanded={activeStates[index]}
            >
              <div className="acc-title-wrap">
                <span className="acc-title">{item.title}</span>
                <div className="acc-sub-title-wrap">
                  <span class="bold-nums">{item.numberRange} </span>
                  <span class="sub-title">{item.subTitle}</span>
                </div>
              </div>
              <div class="accordion-icon-area">
                <span class="accordion-icon"></span>
              </div>
            </button>
          </h2>
          <div
            ref={contentRef.current[index]}
            id={`${props.className}-content-${index}`}
            className="content"
            aria-hidden={!activeStates[index]}
            role="region"
            aria-labelledby={`${props.className}-control-${index}`}
          >
            <div className="content-inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
