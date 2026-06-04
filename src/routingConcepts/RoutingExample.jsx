import React from "react";

export default function RoutingExample() {

      const styles = {
  notesGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2,minmax(0,1fr))",
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
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
</Routes>

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
Move between pages. Avoids full page refresh.

Example
--------
import { Link } from "react-router-dom";
<Link to="/">Home</Link>
<Link to="/about">About</Link>

Wrong
--------
<a href="/about">About</a>

Problem: anchor tag Entire application reloads.

Interview
--------
Link uses client-side routing. Anchor tag uses browser navigation.
`;

  const navigateRouting = `
═══════════════════════════════════════════════
3. useNavigate() - event navigation like post login, form submit
═══════════════════════════════════════════════
Purpose
--------
Navigate using JavaScript.

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
4. DYNAMIC ROUTING
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
Purpose
--------
Parent Layout + Child Pages

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
Placeholder for child routes.

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

URL
--------
/admin

Output
--------
DashboardHome

Equivalent
--------
Default Route

Interview
--------
index route does not require path.`;

  const layoutRouting = `
═══════════════════════════════════════════════
8. LAYOUT ROUTING
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

Routes
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

Correct:- child routes shouldn't have / it gives url as /dashboard//home
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Router Complete Notes</h1>

      <pre style={styles.noteCard}>{basicRouting}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{linkRouting}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{navigateRouting}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{dynamicRouting}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{nestedRouting}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{outletNotes}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{indexRoute}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{layoutRouting}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{protectedRoute}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{wildcardRoute}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{queryParams}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{navigateRedirect}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{childRouting}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{completeExample}</pre>
      <div className="section-divider"></div>
      <pre style={styles.noteCard}>{interviewTraps}</pre>
    </div>
  );
}