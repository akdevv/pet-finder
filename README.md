# pet-finder

Online platform connecting lost pets to their owners

Tools Used:
Firebase
React
Tailwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Website Layout:

1. Home Page (/)
2. All Pets (/pets)
3. Show one specific pet (/pets/:id)
4. Report lost pet (/pets/new)
5. Sign-in (/sign-in) && Sign-up (/sign-up) pages

-   connect supabase as database
-   use prisma
-   authentication using clerk

### Home Page

-   **Navbar**: should be a react component with react router links

    -   Logo
    -   Home
    -   Find
    -   Report
    -   Sign-in && Sign-up || Logout

-   Hero Section
-   Footer

### All Pets

-   Show all pets in form of cards
-   add filters and sorting
-   add search functionality

### Show Pet

-   Show one specific pet in detail
-   Route should be `/pets/:id`

### Report lost pet

-   Basically the add new pet route (`/pets/new`)
-   Render a form with the following inputs:
    1. Name, Age, Gender, Breed
    2. Photo (single or multiple)
    3. Last seen location
    4. Short description about the pet
    5. Contact details of owner (name, email, phone number, etc.)
    6. Report button, h1 -> "Report Lost Pet"

### Login Pages

1.  Sign-in page
2.  Sign-up page
3.  Logout page

-   use clerk for authentication

## TODO:

1. setup react router

    - `/` = root route
    - `/pets` = all pets
    - `/pets/:id` = show one pet
    - `GET /pets/new` = render the lost pet form
    - `POST /pets/new` = add new lost pet
    - `/sign-in` = sign-in
    - `/sign-up` = sign-up
    - `/logout` = logout

2. setup database (supabase)
3. config clerk for authentication
4. make the figma designs
