async function sha256Hex(s){
  const data = new TextEncoder().encode(s);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
}

// Project Pages base (https://USER.github.io/REPO/…)
function getBase(){
  const segs = location.pathname.split('/').filter(Boolean);
  const isProject = segs[0] === 'Eduxlv2025-SE';
  return isProject ? '/Eduxlv2025-SE/' : '/';
}

function $(id){ return document.getElementById(id); }

async function doLogin(){
  const u = $('username').value.trim();
  const p = $('password').value;
  const msg = $('msg');
  try{
    const conf = window.__USERS; // loaded from assets/users.js
    const cand = await sha256Hex(conf.salt + `${u}:${p}`);
    const user = (conf.users || []).find(x => x.u === u && x.h === cand);
    if(user){
      const token = await sha256Hex(conf.salt + u + Date.now());
      sessionStorage.setItem('scott_auth', token);
      sessionStorage.setItem('scott_user', u);
      sessionStorage.setItem('scott_roles', JSON.stringify(user.roles || []));
      const BASE = getBase();
      location.href = BASE + 'Production/index.html';
    }else{
      msg.textContent = 'Invalid credentials.';
    }
  }catch(e){
    console.error(e);
    msg.textContent = 'Login error. Try again.';
  }
}

function wireLogin(){
  const btn = $('go');
  if(btn){
    btn.addEventListener('click', doLogin);
  }
  // Enter key submits
  ['username','password'].forEach(id=>{
    const el = $(id);
    if(el){ el.addEventListener('keydown', e => { if(e.key === 'Enter') doLogin(); }); }
  });
}

document.addEventListener('DOMContentLoaded', wireLogin);
