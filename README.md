<h1>PROPS :</h1>
<li>1. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.( The props are a type of object where the value of attributes of a tag is stored. )</li>
<li>2. React allows us to pass information to a Component using something called props (which stands for properties). Props are objects which can be used inside a component. Sometimes we need to change the content inside a component. Props come to play in these cases, as they are passed into the component and the user..</li>
<li>3. Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</li>

<h1>STATE :</h1>
<li>1. The state is a built-in React object that is used to contain data or information about the component.</li>
<li>2. A state is a variable that exists inside a component, that cannot be accessed and modified outside the component, and can only be used inside the component. Works very similarly to a variable that is declared inside a function that cannot be accessed outside the scope of the function in normal javascript. State Can be modified using this.setState. The state can be asynchronous. Whenever this.setState is used to change the state class is rerender itself.. </li>
<li>3. The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</li>

<h3>Difference between props and state :</h3>
<ul>
  <li>1. In React props are a way to pass the data or properties from one component to other components while the state is the real-time data available to use within that only component.</li>
  <li>2. States and props are two of the most important concepts of React and everything in React is based upon them. But before jumping into State and Props we need to know about the relation between components and normal functions.</li>
</ul>
