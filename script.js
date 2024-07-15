let originalImageData;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('loadImageButton').addEventListener('click', function () {
    console.time('ImageLoadTime');
    setTimeout(async () => {
      await loadRandomDogImage();
      console.timeEnd('ImageLoadTime');
    }, 1000);
  });
});

async function loadRandomDogImage() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random?' + new Date().getTime());
    const data = await response.json();

    if (data && data.message) {
      const image1 = await loadImage(data.message);

      canvas.width = image1.width;
      canvas.height = image1.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
      originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}


async function convertToGrayscale() {
  console.time('convertToGrayscale');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const originalPixels = originalImageData.data;

  const sliceHeight = canvas.height / 4;

  for (let slice = 0; slice < 4; slice++) {
    setTimeout(() => {
      const startY = slice * sliceHeight;
      const endY = (slice + 1) * sliceHeight;

      for (let y = startY; y < endY; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const index = (y * canvas.width + x) * 4;
          const average = (originalPixels[index] + originalPixels[index + 1] + originalPixels[index + 2]) / 3;

          originalPixels[index] = average;
          originalPixels[index + 1] = average;
          originalPixels[index + 2] = average;
        }
      }
      ctx.putImageData(originalImageData, 0, 0);

      if (slice === 3) {
        console.timeEnd('convertToGrayscale');
      }
    }, slice * 1000);
  }
}

async function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = url;
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
  });
}

function mirrorImage() {
  console.time('mirrorImage');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width / 2; x++) {
      const index1 = (y * canvas.width + x) * 4;
      const index2 = (y * canvas.width + (canvas.width - x - 1)) * 4;
      for (let i = 0; i < 4; i++) {
        const temp = pixels[index1 + i];
        pixels[index1 + i] = pixels[index2 + i];
        pixels[index2 + i] = temp;
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
  console.timeEnd('mirrorImage');
}

function revertChanges() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  if (originalImageData) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(originalImageData, 0, 0);
  }
}
