# applicational-atomic-design-for-nextjs
This application is a sample with "Applicational Atomic Design" applied.  
The working application is [here](https://applicational-atomic-design-for-nextjs.vercel.app/about).  

## What is "Applicational Atomic Design" ?
Based on the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) proposed by Brad Frost, this methodology adds the perspective of application behavior and domain model.  

### Atoms
The definition of this classification is the same as the original.  
In this sample application, there are HTML tag wrapper components with project-specific styles applied.  
If you are using a UI framework that provides these components, you will rarely create components that fall into this category.  

### Molecules
In addition to the original definition, I classify the following components here.

+ Atoms wrapper component with application-specific information (For example, text or select that accepts a particular type or interface)
+ Components that should be encapsulated as the behavior of the application (such as a form to change a given entity value)

I value the behavior of the application and its relationship to the domain model rather than the UI size of the component and its reusability.  
Also, the important thing in this classification is not to refer to or change global values ​​such as context.  

### Organisms
Components that combine molecules and atoms to reference and update global values ​​and behave like widgets by themselves are categorized here.  
The big difference from molecules is whether the component references and updates global values.  
So components that just wrap molecules and connect to context, and small components that change global values, such as the SignOut button, are organisms.  

### Templates
Similar to the original definition, the components that specifically place organisms and molecules are categorized, and in next.js and gatsby.js, they are the components that are injected with values ​​and rendered.  
It is also responsible for giving some feedback to the user and transitioning the screen after the component of the organism makes changes to the global value.  

### Pages
Components that give specific values ​​to templates and select templates to display according to the user's role.  
The specific code for these components will vary depending on the framework you use.  
If you are using next.js, it may be a group of files placed in the `pages` directory, and if you are using gatsby.js, it may be procedural code written in `gatsby-node.js`.  

### Components
Components that do not fit into the above categories.  
For example, a component that wraps a template component and controls the user's sign-in state and rendering and redirects from roles falls into this category.  
