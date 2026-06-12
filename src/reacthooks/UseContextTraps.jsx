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

            <pre>{`
1. Unnecessary Re-renders: Even if a component uses only <code style={{textAlign:'left', minWidth: '500px'}}>user</code>, it re-renders when <code style={{textAlign:'left', minWidth: '500px'}}>theme</code> changes.<br/>
            👉 Reason: Context value object changes → React triggers all consumers.

2. Object Reference Trap: value={{user, theme}} creates a new object each render.<br/>
            👉 React compares by reference, not deep equality.


3. Overusing Context: Context is NOT a replacement for all state.<br/>
            👉 Frequent updates = performance issues.

4. Large Context Problem: Putting everything in one context = all components re-render.<br/>
            👉 Better: split contexts (UserContext, ThemeContext).

5. useContext ≠ selective subscription: You cannot subscribe to only part of context.
            👉 Entire value triggers updates.

6. Inline Functions Trap: Passing functions inside context without memoization causes re-renders.

7. Debugging Difficulty: Hard to trace which component re-rendered due to context updates.


8. Testing Complexity: Components using context need wrapping with Provider in tests.

9. Nested Providers Hell: Too many providers → messy tree.

10. Better Alternatives:
            👉 Props (for small trees)
            👉 Zustand / Redux (for frequent updates)           
`}</pre>

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
<pre>
{`1. Context causes re-render when value reference changes
2. Memoize provider value using useMemo: instead of passing object pass the memoized object          
3. Split contexts for performance optimization (AppContextlike value={{user, theme}}) cause extra rerenders, split as userContext and themeContext
4. Context is NOT for frequently changing state -- for frequent updates need to use Redux
5. No partial subscription → all consumers update: Like when value object in provider changes then all consumers using that context rerenders
`}
</pre>
            </div>
        </div>
    );
};

export default UseContextTraps;