# Cookie Stand Admin

Author: Taylor White  
Readme Template: [Kassie Bradshaw](https://github.com/kassiebradshaw/cookie-stand-admin/blob/main/README.md)
https://dev.to/ms_yogii/getting-started-with-tailwind-and-react-a-simple-login-form-tutorial-1lk8
https://www.geeksforgeeks.org/how-to-align-form-elements-to-center-using-tailwind-css/

## Lab 37: Welcome to React, Next.js & TailwindCSS

## Overview

React is great! And though it does A LOT, it’s not a full framework. In other words, many common tasks are not handled out of the box by React. So it’s up to us devs to make some decisions about how to use React in combination with other tools.

One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

Your job is to create a Cookie Stand Admin app using Next.js and style using Tailwind CSS.

pages/Index.js should...

- [x] `pages/Index.js` should...
  - [x] Have `<Head>` component with page title set to `Cookie Stand Admin`
  - [x] Have a `<header>` component that matches spec
  - [x] Have a `<main>` component containing `<form>` **and** a placeholder component showing JSON string of last created Cookie Stand
  - [x] Have a `<footer>` component that matches spec
- [x] Style app using TailwindCSS utility classes

## Lab 38 : Cookie Stand Admin Version 2

## Overview

Your job is to continue work on Cookie Stand Admin app using Next.js and style using Tailwind CSS.

**`Index.js` page details**:

- [x] Page should return top-level component `<CookieStandAdmin>` which contains:
  - [x] `<Head>` - should set page title `Cookie Stand Admin`
  - [x] `<Header>`
  - [x] `<main>`
    - [x] `<CreateForm>`
    - [x] `<ReportTable>`
  - [x] `<Footer>`

**`<Header>` details**:

- [x] `<Header>` component should have `<Link>` to `overview` page

**`<CreateForm>` details**:

- [x] Receive `onCreate` function to be called when form is submitted
- [x] `onCreate` should be passed an argument object representing new cookie stand.
  - [x] Object should have `location` property
  - [x] Object should have `hourly_sales` property with hard-coded `[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]`

**`<ReportTable>` details**:

- [x] Should receive `hours` on props that is an array of cookie stand hours of operation
- [x] Should receive `reports` on props that is an array of all cookie stand objects
  - [x] If `reports` is empty, render `<h2>No Cookie Stands Available</h2>`
  - [x] If `reports` is not empty, render a `table` with `thead`, `tbody`, and `tfoot` components
- [x] Components should render to match spec

**`<Footer>` details**:

- [x] Should receive `reports` array on props
- [x] Should display `X Locations World Wide` where `X` is the number of cookie stands

**Other Requirements**:

- [x] `<Header>`, `<Footer>`, `<CreateForm>`, and `<ReportTable>` should each be in their own file inside top-level `components` folder
- [x] Those components should be imported into `Index.js`
- [x] Style all components using TailwindCSS utility classes to match spec
