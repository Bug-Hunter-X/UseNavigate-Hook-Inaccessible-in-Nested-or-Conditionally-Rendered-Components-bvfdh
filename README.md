# React Router v6 useNavigate Hook Issue in Nested/Conditional Components

This repository demonstrates a common problem encountered when using the `useNavigate` hook in React Router v6:  the hook fails to work correctly within components that are not directly rendered by a route. This can often happen with conditionally rendered components or components nested deep within the component tree. 

The bug showcases how `useNavigate` can return an undefined function, preventing navigation. The solution provides a pattern to resolve this by ensuring the component using `useNavigate` is within the context of the router.