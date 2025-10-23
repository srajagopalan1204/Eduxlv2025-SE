(function(){
  const segs = location.pathname.split('/').filter(Boolean);
  const env = segs[0] || "";
  if(env === "Production"){
    const token = sessionStorage.getItem("scott_auth");
    if(!token){ location.replace("/login.html"); return; }
  }
  window.__ENV_NAME__ = env;
})();