export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('tregua-theme');var dark=t==='dark';document.documentElement.classList.toggle('dark',dark);document.documentElement.classList.toggle('light',!dark);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
