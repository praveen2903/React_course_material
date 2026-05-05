import { useEffect, useRef, useState } from "react";

const EventDelegation = () => {
  const menus = [
    { key: "home", title: "Home", subs: ["Dashboard", "Activity", "Reports"] },
    { key: "profile", title: "Profile", subs: ["Info", "Edit Profile", "Privacy"] },
    { key: "settings", title: "Settings", subs: ["Theme", "Notifications"] },
    { key: "help", title: "Help", subs: ["FAQ", "Support", "Contact"] }
  ];
  const styles = {
    nav: {
        height: "60px",
        background: "#0f172a",
        color: "#ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px", 
        gap: "100px"
    },
    menuBtn: {
        padding: "8px 14px",
        cursor: "pointer",
        borderRadius: "6px",
        border: "none"
    },
    sidebar: {
        position: "fixed",
        top: "60px",
        width: "300px",
        height: "100%",
        background: "#f1f5f9",
        padding: "20px",
        transition: "0.3s",
        boxShadow: "-2px 0 10px rgba(0,0,0,0.1)"
    },
    menuItem: {
        width: "100%",
        padding: "10px",
        marginBottom: "8px",
        border: "none",
        background: "#e2e8f0",
        cursor: "pointer",
        textAlign: "left",
        borderRadius: "6px"
    },
    subMenu: {
        marginLeft: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "6px"
    },
    subItem: {
        padding: "8px",
        border: "none",
        background: "#cbd5f5",
        cursor: "pointer",
        borderRadius: "4px"
    },
    logout: {
        marginTop: "20px",
        width: "100%",
        padding: "10px",
        background: "#ef4444",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
    }
};


  const [sideOpen, setSideOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const menuRef = useRef(null);  // close  menu when clicked outside

  const navRef = useRef(null) // not close when clicked on menu the toggle must not allow neatly please

  const toggleBar = () => setSideOpen(prev => !prev);

  const toggleMenu = (key) => {
    setOpenMenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const postAPICall = async (payload) =>{
    try{
        await fetch("https://your-api.com/menu-click", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },
            body: JSON.stringify(payload)
        });    
        } catch (err) {
                console.error("api error: ", err)
        }
  }

  const handleClick = (e) => {
    const {type, key, value, parent} = e.target.dataset

    if (type === "menu") {
      toggleMenu(key);
    }

    if (type === "submenu") {
        const payload= {
            menu: parent,
            submenu: value,
            timestamp: new Date().toISOString()
        }
      console.log("Submenu clicked:", value);
      postAPICall(payload)
    }
  };

  useEffect(() => {
    const closeOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !navRef.current.contains(e.target)) {
        setSideOpen(false);
        setOpenMenus({});
      }
    };

    document.addEventListener("click", closeOutside);
    return () => document.removeEventListener("click", closeOutside);
  }, []);

  return (
    <>
    <div> Event Delegation -- and optimal delegate post api calls like when navigate send api call</div>
      <nav style={styles.nav} ref={navRef}>
        <h2 style={{color:'white'}}>Event Delegation</h2>
        <button style={styles.menuBtn} onClick={toggleBar}>
          ☰ Menu
        </button>
      </nav>

      <div
        ref={menuRef}
        onClick={handleClick}
        style={{
          ...styles.sidebar,
          left: sideOpen ? "0" : "-400px"
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Navigation</h3>

        {menus.map((item) => (
          <div key={item.key}>
            <button
              data-type="menu"
              data-key={item.key}
              style={styles.menuItem}
            >
              {item.title} {openMenus[item.key] ? "▲" : "▼"}
            </button>

            {openMenus[item.key] && (
              <div style={styles.subMenu}>
                {item.subs.map((sub, i) => (
                  <button
                    key={i}
                    data-parent={item.key}   //stores the parent key like suppose home, profile or any store it
                    data-type="submenu"
                    data-value={sub}
                    style={styles.subItem}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        <button style={styles.logout}>Logout</button>
      </div>
    </>
  );
};

export default EventDelegation;