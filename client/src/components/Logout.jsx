import React from 'react'

function Logout() {
    function logout() {
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    const token = localStorage.getItem("token");
  return (
    <>
    {token&&(
    <button onClick={logout}>
      Logout
    </button>
    )}
    </>
  )
}

export default Logout
