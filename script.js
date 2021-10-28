const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const project_block = entry.target.querySelector('.animated');
  
      if (entry.isIntersecting) {
        project_block.classList.add('project-animation');
        return;
      }
  
    });
  });
  
selected = document.querySelectorAll('.projects');
console.log(selected.length);
selected.forEach(s => {
  observer.observe(s);
});