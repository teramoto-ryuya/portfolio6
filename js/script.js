document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.ring');
  const title = document.querySelector('.title');

  if (image) {
    image.animate(
      [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(-360deg)' }
      ],
      {
        fill: 'backwards',
        duration: 20000,
        iterations: Infinity,
      },
    );
  } else {
    console.log('ringが見つかりませんでした');
  }
});


