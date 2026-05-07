import React, { createContext, useContext, useState } from 'react'


// props drilling: small application whith small and direct child passing
// useContext:     app-wide shared values
//Redux:           complex global state values need to create the stores

const ThemeContext = createContext();
const UserContext = createContext();


// child1
function Header(){
    return (
        <>
        <div> Header Component</div>
        <p>|</p>
        <p>V</p>
        <NavBar/>
        </>
    )
}
//child2
function NavBar(){
    return (
        <>
        <div>
            NavBar Component
        </div>
        <p>|</p>
        <p>V</p>
        <Profile/>
        </>
    )
}

//child3
function Profile(){
    const {user,setUser}= useContext(UserContext);
    const {theme, setTheme}= useContext(ThemeContext);

    return (
        <>
            <div> Welcome: {user}</div>
            <div> Current Theme: {theme}</div>

            <button onClick={()=> setUser("Rokkam")}>update user</button>

            <button onClick={()=> setTheme(theme=='light'? "dark": "light")}> toggle theme</button>
        </>
    )
}

//parent
const UseContextHook = () => {
    const [theme, setTheme]= useState("light");   //for initial render 
    const [user, setUser] = useState("Praveen");

  return (
    <>
        <div>UseContextHook--useCases (theme, authentication (store token), setting language or site, role permissions like admin/user/employee) </div>
        <p>UseContext enables components to access and consume data from context API instead of prop drilling</p>

{/* Note new object created at every render like {{theme, setTheme}} !== {{theme,setTheme}} in two consecutive renders */}
{/* can remove it by useMemo */}
        <ThemeContext.Provider value={{theme,setTheme}}>
            <UserContext.Provider value={{user,setUser}}>
                <div style={{background: theme==="light"?"white": 'black', color: theme==='light'?'black':'white', minHeight: '20vh', padding:'20px'}}>
                    useContext examples 
                    <p>|</p>
                    <p>V</p>
                    <Header/>
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    </>
  )
}

export default UseContextHook