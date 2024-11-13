document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            // Toggle the "expanded" class to show/hide options
            box.classList.toggle('expanded');
            
            // Close other boxes
            boxes.forEach(b => {
                if (b !== box) b.classList.remove('expanded');
            });
        });
    });
});
