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

const observer_bottom = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const project_block = entry.target.querySelector('.animated_bottom');

    if (entry.isIntersecting) {
      project_block.classList.add('project-animation-bottom');
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

selected = document.querySelectorAll('.projects_bottom');
selected.forEach(s => {
  observer_bottom.observe(s);
});