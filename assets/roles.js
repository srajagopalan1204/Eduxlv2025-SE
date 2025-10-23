(function(){
  function getRoles(){
    try { return JSON.parse(sessionStorage.getItem("scott_roles") || "[]"); }
    catch { return []; }
  }
  function hasAccess(scope){
    const env = (window.__ENV_NAME__ || "").trim();
    if (env !== "Production") return true;
    const roles = getRoles();
    if (roles.includes("ALL")) return true;
    return roles.some(role => {
      if(!role) return false;
      const r = role.split(":");
      const s = scope.split(":");
      if (r.length > s.length) return false;
      for (let i=0;i<r.length;i++){
        if (r[i] !== s[i]) return false;
      }
      return true;
    });
  }
  function lockTile(el, scope){
    if (hasAccess(scope)) return;
    el.classList.add("locked");
    if (el.tagName === "A") el.removeAttribute("href");
    const h3 = el.querySelector("h3") || el;
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.style.marginLeft = "8px";
    badge.textContent = "Locked";
    h3.appendChild(badge);
  }
  window.__roles = { hasAccess, lockTile };
})();