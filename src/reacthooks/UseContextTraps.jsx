import React, { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext();

/*
✅ CHILD COMPONENT
Trap: Even though Profile ONLY uses `user`,
it will re-render when `theme` changes (because context value object changes)
*/
function Profile(){
    const { user } = useContext(AppContext);
    console.log("Profile Rendered"); // observe re-renders
    return <div>Even change in theme rerenders this profile User: {user}</div>;
}

const UseContextTraps = () => {
    const [user, setUser] = useState('praveen');
    const [theme, setTheme] = useState('dark');

    /*
    🔴 TRAP 1: Object Identity Problem
        value={{user, theme}} creates NEW object on every render
        → causes ALL consumers to re-render

    ✅ FIX: memoize value
        ()=>{{}} is (){return {{}}}
    */
    const contextValue = useMemo(() => ({ user, theme }), [user, theme]);

    return (
        <div style={{textAlign:'left', marginLeft: '30px'}}>
            <h2>useContext Interview Traps</h2>

            {/* ------------------- THEORY ------------------- */}

            <p><b>1. Unnecessary Re-renders:</b><br/>
            Even if a component uses only <code>user</code>, it re-renders when <code>theme</code> changes.<br/>
            👉 Reason: Context value object changes → React triggers all consumers.
            </p>

            <p><b>2. Object Reference Trap:</b><br/>
            <code>{`value={{user, theme}}`}</code> creates a new object each render.<br/>
            👉 React compares by reference, not deep equality.
            </p>

            <p><b>3. Overusing Context:</b><br/>
            Context is NOT a replacement for all state.<br/>
            👉 Frequent updates = performance issues.
            </p>

            <p><b>4. Large Context Problem:</b><br/>
            Putting everything in one context = all components re-render.<br/>
            👉 Better: split contexts (UserContext, ThemeContext).
            </p>

            <p><b>5. useContext ≠ selective subscription:</b><br/>
            You cannot subscribe to only part of context.<br/>
            👉 Entire value triggers updates.
            </p>

            <p><b>6. Inline Functions Trap:</b><br/>
            Passing functions inside context without memoization causes re-renders.
            </p>

            <p><b>7. Debugging Difficulty:</b><br/>
            Hard to trace which component re-rendered due to context updates.
            </p>

            <p><b>8. Testing Complexity:</b><br/>
            Components using context need wrapping with Provider in tests.
            </p>

            <p><b>9. Nested Providers Hell:</b><br/>
            Too many providers → messy tree.
            </p>

            <p><b>10. Better Alternatives:</b><br/>
            👉 Props (for small trees)<br/>
            👉 Zustand / Redux (for frequent updates)
            </p>

            {/* ------------------- CONTEXT ------------------- */}

            <AppContext.Provider value={contextValue}>
                <Profile />
            </AppContext.Provider>

            {/* ------------------- ACTIONS ------------------- */}

            <button onClick={() => setUser('john')}>
                Change User
            </button>

            <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>
                Toggle Theme
            </button>

            {/* ------------------- INTERVIEW SUMMARY ------------------- */}

            <div style={{textAlign:'left'}}>
                <h3>🔥 Interview Summary:</h3>
            <ul style={{textAlign: 'left'}}>
                <li>Context causes re-render when value reference changes</li>
                <li>Memoize provider value using useMemo: instead of passing object pass the memoized object</li>
                <li>Split contexts for performance optimization (AppContextlike <code>{`value={{user, theme}}`}</code>) cause extra rerenders, split as
                    userContext and themeContext
                </li>
                <li>Context is NOT for frequently changing state -- for frequent updates need to use Redux</li>
                <li>No partial subscription → all consumers update: Like when value object in provider changes then all consumers using that context rerenders</li>
            </ul>
            </div>
        </div>
    );
};

export default UseContextTraps;