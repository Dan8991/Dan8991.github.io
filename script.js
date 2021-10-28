const observer_right = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const project_block = entry.target.querySelector('.animated_right');
  
      if (entry.isIntersecting) {
        project_block.classList.add('project-animation-right');
        return;
      }
  
    });
  });
  
  const observer_left = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const project_block = entry.target.querySelector('.animated_left');
  
      if (entry.isIntersecting) {
        project_block.classList.add('project-animation-left');
        return;
      }
  
    });
  });  

selected = document.querySelectorAll('.projects_right');
selected.forEach(s => {
  observer_right.observe(s);
});

selected = document.querySelectorAll('.projects_left');
selected.forEach(s => {
  observer_left.observe(s);
});