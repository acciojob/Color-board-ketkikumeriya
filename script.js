//your JS code here. If required.
    const board = document.getElementById('board');
    const BOX_COUNT = 800;

    for (let i = 0; i < BOX_COUNT; i++) {
      const square = document.createElement('div');
      square.classList.add('square');

      square.addEventListener('mouseover', () => {
        square.classList.add('hovered');
        setTimeout(() => {
          square.classList.remove('hovered');
        }, 1000);
      });

      board.appendChild(square);
	}