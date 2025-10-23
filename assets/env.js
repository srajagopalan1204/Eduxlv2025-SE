async function getEnvFiles(){
  const env = window.__ENV_NAME__ || (location.pathname.split('/').filter(Boolean)[0] || "Production");
  const base = `/env/${env}`;
  const [nav, tax, story] = await Promise.all([
    fetch(`${base}/nav_config.json`, {cache:"no-store"}).then(r=>r.json()),
    fetch(`${base}/taxonomy.json`, {cache:"no-store"}).then(r=>r.json()),
    fetch(`${base}/story.json`, {cache:"no-store"}).then(r=>r.json())
  ]);
  return {env, nav, tax, story};
}