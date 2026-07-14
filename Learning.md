# Day 3

## Topics
- React Router
- Layout
- Outlet
- useEffect

## What I understood

- Layout prevents repeating Navbar and Sidebar.
- Outlet renders the active child route inside the parent layout.
- useEffect is used for side effects like API calls.
- [] makes the effect run only once after the component mounts.

## One interview question

Q: Why do we use useEffect for API calls?

A: Because API calls are side effects. We usually fetch data after the component mounts, and an empty dependency array ensures it runs only once.