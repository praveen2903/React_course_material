import React from "react";

export default function RoutingExample() {

const styles = {
  notesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(1,minmax(0,1fr))",
    gap: "20px",
    alignItems: "start",
    textAlign: 'left'
  },

  noteCard: {
    background: "#111",
    color: "#00ff90",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #333",
    whiteSpace: "pre-wrap",
    overflowX: "auto",
    fontSize: "13px",
    lineHeight: "1.5",
    margin: 0,
    textAlign:'left'
  },
};
  const headerStyle = {
  padding: "15px",
  textAlign: "left",
  fontSize: "16px",
  color: "#00ff90",
};

const cellStyle = {
  padding: "14px 15px",
  textAlign: "left",
};

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

<button onClick={() => window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  style={{
    position: "fixed",
    right: "20px",
    bottom: "20px",
    padding: "12px 18px",
    borderRadius: "10px",
    background: "#00ff90",
    color: "#000",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  ↑ Top
</button>


const browserRouting = `══════════════════════════════════════════════════════════════
1. BrowserRouter
══════════════════════════════════════════════════════════════

Definition
-----------
Main Router Provider.

Why?
-----------
Keeps UI synchronized with browser URL.

Usage
-----------
<BrowserRouter>
  <App />
</BrowserRouter>

Flow
-----------
URL Change
    ↓
BrowserRouter
    ↓
Matching Route
    ↓
Render Component

Interview
-----------
Without BrowserRouter:
useNavigate()
useLocation()
useParams()

will throw errors.`;

const routesRouting = `══════════════════════════════════════════════════════════════
2. Routes
══════════════════════════════════════════════════════════════

Definition
-----------
Container holding all Route definitions.

Why?
-----------
Checks current URL and finds matching route.

Usage
-----------
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>

Interview
-----------
Routes replaces Switch from React Router v5.`

  const basicRouting = `
═══════════════════════════════════════════════
1. BASIC ROUTING
═══════════════════════════════════════════════
Purpose
--------
Navigate between pages without refreshing browser.

When Used?
--------
Almost every React application.

Route Structure
--------
/           -> Home
/about      -> About
/contact    -> Contact

Example
--------
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
  </Routes>
</BrowserRouter>

Flow
--------
Browser URL
      ↓
Route Match
      ↓
Component Render`;

  const linkRouting = `
═══════════════════════════════════════════════
2. LINK NAVIGATION  -- if use <a href="/"></a> -needs refresh
═══════════════════════════════════════════════
Purpose
--------
Move between pages. Avoids full page refresh. When you reload a browser, session memory and the DOM tree structure are wiped, causing state to be lost.
To prevent this, developers use the <Link> component (from frameworks like React or Next.js) instead of an <a> tag, as <Link> intercepts the click, prevents the reload, and swaps views dynamically


Link is used at JSX at return.

Example
--------
import { Link } from "react-router-dom";
<Link to="/">Home</Link>
<Link to="/about">About</Link>

Wrong
--------
<a href="/about">About</a>

Problem: anchor tag Entire application reloads. Which results:

Component State: Both React useState and internal DOM states are completely destroyed.
The Render Tree: HTML, CSS, and DOM elements are parsed newly.
The Event Listeners: Any interactive event handlers bound to the page are lost until re-registered

Interview
--------
Link uses client-side routing. Anchor tag uses browser navigation.
`;
const routeUsage = `
══════════════════════════════════════════════════════════════
3. Route
══════════════════════════════════════════════════════════════

Definition
-----------
Maps URL → Component.

Why?
-----------
Tells React which component to render.

Usage
-----------
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>

Flow
-----------
/about
   ↓
Route Match
   ↓
About Component`
  const navigateRouting = `
═══════════════════════════════════════════════
3. useNavigate() - event navigation like post login, form submit
═══════════════════════════════════════════════
Purpose
--------
Navigate using JavaScript. This is useful when javascript event commonly used.

Real Usage
--------
Login Success
Logout
Form Submit
Payment Success

Example
--------
const navigate = useNavigate();
const login = () => {
  navigate("/dashboard");
};

Example
--------
navigate("/profile");
navigate(-1);
navigate(1);

navigate("/",{replace:true });

Interview
--------
Programmatic Navigation.
`;

  const dynamicRouting = `
═══════════════════════════════════════════════
4. DYNAMIC ROUTING -- add params to routes
═══════════════════════════════════════════════
Purpose
--------
Get value from URL.

URL
--------
/users/101
/users/102
/users/103

Route
--------
<Route path="/users/:id" element={<UserDetails />}/>

Reading Value
--------
const { id } = useParams();  -- read params using useParams

Real Example
--------
GET /products/1
GET /products/2
GET /products/3

Interview
--------
:id creates dynamic parameter.`;

  const nestedRouting = `
═══════════════════════════════════════════════
5. NESTED ROUTING
═══════════════════════════════════════════════
Purpose: Parent Layout + Child Pages

Example Structure
--------
/dashboard/profile
/dashboard/settings
/dashboard/reports

Routes --nested routing must need to have <outlet/> in parent component at end of jsx
--------
<Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />}/>
    <Route path="settings" element={<Settings />}/>
</Route>

Dashboard Component
--------
function Dashboard(){
 return(
  <>
    <h1>Dashboard</h1>
    <Outlet />
  </>
 )
}

Flow
--------
Dashboard
    |
 Outlet
    |
 Profile

Dashboard
    |
 Outlet
    |
 Settings

Interview Trap
--------
Without Outlet(), Child routes never render.`;

  const outletNotes = `
═══════════════════════════════════════════════
6. OUTLET - tag must be in jsx at end of parent return (<> <div>code jsx</div>  <outlet/> </>)
═══════════════════════════════════════════════
Purpose
--------
Placeholder for child routes. You could make layouts at 8 you see.

Example
--------
function Layout(){
 return(
  <>
   <Navbar/>
   <Outlet/>
   <Footer/>
  </>
 )
}

Render Result
--------
Navbar
Home Page
Footer

OR

Navbar
About Page
Footer

Interview
--------
Outlet is similar to children prop for routing.
`;

  const indexRoute = `
═══════════════════════════════════════════════
7. INDEX ROUTE -- For default child route use Index like /admin shows DashboardHome, /admin/users show Users
═══════════════════════════════════════════════
Purpose
--------
Default Child Route

Example -- For default child route use Index like /admin shows DashboardHome, /admin/users show Users
--------
<Route path="/admin" element={<Admin />}>
 <Route index element={<DashboardHome />}/>
 <Route path="users" element={<Users />}/>
</Route>

URL: /admin
Output: DashboardHome comes out instead of <Admin/>

Equivalent: Default Route
Interview: index route does not require path.`;

  const layoutRouting = `
═══════════════════════════════════════════════
 **** 8. LAYOUT ROUTING  -- not child/nested routes just using outlet to make layout
═══════════════════════════════════════════════
Purpose
--------
Reuse Navbar Footer Sidebar.

Example
--------
function MainLayout(){
 return(
  <>
   <Navbar/>
   <Outlet/>
   <Footer/>
  </>
 )
}

Routes : it's not the child route just attaching same nav and footer to page
If not this you need to include Nav and footer to every page
--------
<Route element={<MainLayout/>}>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
</Route>

Benefits
--------
Reusable Layout, Less Duplication`;

  const protectedRoute = `
═══════════════════════════════════════════════
9. PROTECTED ROUTE -- Route Gaurd
═══════════════════════════════════════════════
Purpose
--------
Allow only authenticated users.

Example-- routeGaurd
--------
function ProtectedRoute({children}){
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />
}

Usage
--------
<Route path="/dashboard" element={ <ProtectedRoute> <Dashboard/> </ProtectedRoute>} />

Flow
--------
Token Exists
      ↓
Dashboard

Token Missing
      ↓
    Login`;

  const wildcardRoute = `
═══════════════════════════════════════════════
10. Error ROUTE -- if 404 error the default backup route * path notfound component implemented
═══════════════════════════════════════════════
Purpose
--------
404 Page

Example
--------
<Route path="*" element={<NotFound />} />

Matches
--------
/xyz
/random
/test

Output
--------
404 Not Found`;

  const queryParams = `
═══════════════════════════════════════════════
11. QUERY PARAMETERS-- ?page=''&category=''
═══════════════════════════════════════════════
URL
--------
/products?page=1
/products?page=2
/products?category=mobile

Read Value
--------
const [searchParams] = useSearchParams();
const page = searchParams.get("page");
const category = searchParams.get("category");

Use Cases
--------
Pagination
Sorting
Filtering
Searching`;

  const navigateRedirect = `
═══════════════════════════════════════════════
12. REDIRECT ROUTE-- Redirect to old urls if wrong path given
═══════════════════════════════════════════════
Purpose
--------
Redirect old URLs.

Example
--------
<Route path="/home" element={<Navigate to="/" />}/>

Flow
--------
/home
redirects
/
`;

  const childRouting = `
═══════════════════════════════════════════════
13. CHILD ROUTING
═══════════════════════════════════════════════
Admin Structure
--------
/admin/users
/admin/roles
/admin/settings

Routes
--------
<Route path="/admin" element={<Admin />}>
 <Route path="users" element={<Users />}/>
 <Route path="roles" element={<Roles />}/>
</Route>

Flow
--------
Admin
   |
 Outlet
   |
 Users`;

  const completeExample = `
═══════════════════════════════════════════════
14. COMPLETE PROJECT STRUCTURE
═══════════════════════════════════════════════

/
│
├── Home
├── About
├── Contact
│
├── Login
├── Register
│
├── Dashboard
│     │
│     ├── index
│     ├── Profile
│     ├── Settings
│     └── Reports
│
├── Admin
│     │
│     ├── Users
│     ├── Roles
│     └── Permissions
│
└── NotFound

Route Tree if 404 page number (path= "*" element={<NotFound/>})
--------
BrowserRouter
      |
    Routes
      |
--------------------------------
|             |               |
Home       About         Dashboard
                             |
                     ----------------
                     |      |       |
                  Profile Settings Reports
`;

  const interviewTraps = `
═══════════════════════════════════════════════
15. INTERVIEW TRAPS
═══════════════════════════════════════════════
Trap 1
--------
Nested routes without Outlet. Don't redirect to page. like dashboards/home give error

Result: Child routes never render.
--------------------------------
Trap 2
--------
Using anchor tag instead of Link.

Result: Full page reload.
--------------------------------
Trap 3
--------
Missing BrowserRouter.

Error: useNavigate() may be used only inside Router.
--------------------------------
Trap 4
--------
Wrong child route.

Wrong: 
<Route path="/profile"/>
Inside parent route.

Correct:- child routes shouldn't have / it gives url as /dashboard/home
<Route path="profile"/>

--------------------------------
Trap 5
--------
Using useParams() without :id
output: undefined
--------------------------------
Trap 6
--------
index route with path.

Wrong: <Route index path="home" />
Correct: <Route index element={<Home/>} />

--------------------------------
Trap 7
--------
Protected Route missing children.

Result: Nothing renders.`;

const useLocationRouting = `
====================================
UseLocation() -- current url
====================================
Definition
-----------
Get current URL information.

Usage
-----------
const location = useLocation();

console.log(location.pathname);

Output
-----------
/dashboard/profile

Useful For
-----------
Breadcrumbs
Analytics
Route Tracking`; 

const navigateTag = `
══════════════════════════════════════════════════════════════
15. Navigate Tag  -- used for redirecting in routes 
══════════════════════════════════════════════════════════════

Definition
-----------
Component used for redirect.

Example
-----------
<Navigate to="/" />

Redirect Route
-----------
<Route
 path="/home"
 element={<Navigate to="/" />}
/>

Flow
-----------
/home
  ↓
Navigate
  ↓
/`
  return (
    <>
    <div
  style={{
    width: "100%",
    marginBottom: "30px",
    background: "#111",
    border: "1px solid #333",
    borderRadius: "12px",
    overflow: "hidden",
  }}
>
  <h2
    style={{
      margin: 0,
      padding: "20px",
      background: "#1a1a1a",
      color: "#00ff90",
      borderBottom: "1px solid #333",
    }}
  >
    📚 React Router Complete Navigation
  </h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      color: "white",
    }}
  >
    <thead>
      <tr
        style={{
          background: "#181818",
        }}
      >
        <th style={headerStyle}>Topic</th>
        <th style={headerStyle}>Purpose</th>
      </tr>
    </thead>

    <tbody>
      {[
  [
    "browserRouter",
    "BrowserRouter",
    "Root router provider. Connects React Router with browser URL and enables routing features."
  ],

  [
    "routes",
    "Routes",
    "Container that holds all Route components and finds the best matching route."
  ],

  [
    "route",
    "Route",
    "Maps a URL path to a React component. URL → Component relationship."
  ],

  [
    "basicRouting",
    "Basic Routing",
    "Navigate between pages without refreshing the browser using Route definitions."
  ],

  [
    "link",
    "Link",
    "Client-side navigation. Changes URL without full page reload and preserves React state."
  ],

  [
    "navigate",
    "useNavigate",
    "Programmatic navigation using JavaScript. Commonly used after login, logout and form submit."
  ],

  [
    "navigateTag",
    "Navigate",
    "Redirect component used inside routes or components for automatic navigation."
  ],

  [
    "dynamic",
    "Dynamic Route / useParams",
    "Read dynamic URL values such as /users/:id using useParams()."
  ],

  [
    "nested",
    "Nested Routes",
    "Parent-child routing structure used for dashboards, admin panels and layouts."
  ],

  [
    "outlet",
    "Outlet",
    "Placeholder where child route components render inside the parent component."
  ],

  [
    "index",
    "Index Route",
    "Default child route rendered automatically when parent route is opened."
  ],

  [
    "location",
    "useLocation",
    "Provides current URL information like pathname, state and search parameters."
  ],

  [
    "layout",
    "Layout Route",
    "Shared layout containing Navbar, Sidebar and Footer using Outlet."
  ],

  [
    "protected",
    "Protected Route",
    "Route guard that restricts access to authenticated users only."
  ],

  [
    "query",
    "useSearchParams",
    "Reads query parameters from URL such as page, sort, category and search."
  ],

  [
    "wildcard",
    "Wildcard Route (*) path = '*'",
    "Fallback route for invalid URLs. Commonly used for 404 Not Found pages."
  ],

  [
    "redirect",
    "Redirect Route",
    "Automatically redirects users from one route to another using Navigate."
  ],

  [
    "child",
    "Child Routes",
    "Routes rendered inside a parent route through the Outlet component."
  ],

  [
    "project",
    "Project Structure",
    "Complete routing hierarchy showing Home, Dashboard, Admin and nested pages."
  ],

  [
    "traps",
    "Interview Traps",
    "Common React Router mistakes such as missing Outlet, wrong child paths and missing BrowserRouter."
  ]
].map(([id, title, purpose], index) => (
        <tr
          key={id}
          onClick={() => scrollToSection(id)}
          style={{
            cursor: "pointer",
            borderBottom: "1px solid #2a2a2a",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#1e1e1e")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <td
            style={{
              ...cellStyle,
              color: "#00ff90",
              fontWeight: "bold",
            }}
          >
            {title}
          </td>

          <td style={cellStyle}>{purpose}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
 <div style={styles.notesGrid}>

  <div id="browserRouter">
    <pre style={styles.noteCard}>{browserRouting}</pre>
  </div>

  <div id="routes">
    <pre style={styles.noteCard}>{routesRouting}</pre>
  </div>

  <div id="route">
    <pre style={styles.noteCard}>{routeUsage}</pre>
  </div>

  <div id="basicRouting">
    <pre style={styles.noteCard}>{basicRouting}</pre>
  </div>

  <div id="link">
    <pre style={styles.noteCard}>{linkRouting}</pre>
  </div>

  <div id="navigate">
    <pre style={styles.noteCard}>{navigateRouting}</pre>
  </div>

  <div id="navigateTag">
    <pre style={styles.noteCard}>{navigateTag}</pre>
  </div>

  <div id="dynamic">
    <pre style={styles.noteCard}>{dynamicRouting}</pre>
  </div>

  <div id="nested">
    <pre style={styles.noteCard}>{nestedRouting}</pre>
  </div>

  <div id="outlet">
    <pre style={styles.noteCard}>{outletNotes}</pre>
  </div>

  <div id="index">
    <pre style={styles.noteCard}>{indexRoute}</pre>
  </div>

  <div id="location">
    <pre style={styles.noteCard}>{useLocationRouting}</pre>
  </div>

  <div id="layout">
    <pre style={styles.noteCard}>{layoutRouting}</pre>
  </div>

  <div id="protected">
    <pre style={styles.noteCard}>{protectedRoute}</pre>
  </div>

  <div id="wildcard">
    <pre style={styles.noteCard}>{wildcardRoute}</pre>
  </div>

  <div id="query">
    <pre style={styles.noteCard}>{queryParams}</pre>
  </div>

  <div id="redirect">
    <pre style={styles.noteCard}>{navigateRedirect}</pre>
  </div>

  <div id="child">
    <pre style={styles.noteCard}>{childRouting}</pre>
  </div>

  <div id="project">
    <pre style={styles.noteCard}>{completeExample}</pre>
  </div>

  <div id="traps">
    <pre style={styles.noteCard}>{interviewTraps}</pre>
  </div>

</div>
    </>
  );
}