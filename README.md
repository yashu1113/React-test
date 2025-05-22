# React internship test

# how to run the project

1. clone the project
2. npm install
3. npm start

#multiple - choice and short answer questions

1.  What is the difference between a controlled and an uncontrolled component in React?
    Ans: - A controlled component is a value controlled by react via state but in uncontrolled component the value is controlled by the dom to manage the state.

2.  Which lifecycle method would you use to fetch data after a component mounts?
    Ans: - in class component : componentDidMount()
    in functional component : useEffect()

3.  Explain the purpose of useEffect in React. Give one real-world use case.
    Ans: - useEffect is a React hook used to perform side effects in functional components.Side effects include actions like fetching data from an API, setting up event listeners, or updating the document title. It runs after the component renders, ensuring that these operations do not block the UI rendering process..

          ex: - Updating the browser tab title after a user logs in

4.  What is the virtual DOM and how does it improve performance?
    Ans :- The virtual Dom is lightweight copy of the actual dom which is used for performance optimization. so real world updates are done in virtual dom and then it is compared with the actual dom and only the changes are applied to the actual dom.

5.  usestate and usereducer are used for managing state in react.

6.What are the benefits of using functional components with hooks compared to
class components?
Ans : - easy syntax and testing.
we can reuse the lohic in different components.

7. explain the difference between props and state in react.
   Ans :- props are used to pass the data from parent to child component.
   state is used to manage the data in the component.

8. What does key prop do in a React list? Why is it important?
   ANS - -

9. How would you apply conditional styling to a component based on a prop?
   Ans : - suppose if a component receives a prop called status, you can apply different styles based on whether status is "active" or "inactive". This can be done by setting a CSS class name or style conditionally inside the component logic.if a component receives a prop called status, you can apply different styles based on whether status is "active" or "inactive". This can be done by setting a CSS class name or style conditionally inside the component logic.

SECTION 3

Corrected Code : -

import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

return (
<div>
<p>You clicked {count} times</p> 
<button onClick={increment}>Click me</button>
</div>
);
}

export default Counter;

Explanation : - I have fixed the code by properly calling useState(0) to set the initial count. The increment function had syntax errors, so I corrected the arrow function and moved setCount inside it.Now, the counter updates correctly when the button is clicked.
