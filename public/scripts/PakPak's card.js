function toggleDarkMode(e) {
    const body = document.body;
    const storage = localStorage.getItem('theme');
    if (storage == 'dark') {
        e.target.innerText = "Moonlight";
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
        e.target.innerText = "Sunshine";
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }