<template>
  <section id="pixelGrid"></section>
</template>

<script>
import p5 from "p5";

var s = function(sketch) {
  var grid = [];
  var gridBuffer = [];

  var colors = [
    "#1D2B53",
    "#7E2553",
    "#83769C",
    "#008751",
    "#00E436",
    "#29ADFF",
    "#FF77A8",
    "#FF77A8",
    "#FF004D",
    "#FF004D",
    "#FFA300",
    "#FFA300",
    "#FFEC27",
    "#FFEC27",
    "#ffffff",
    "#ffffff"
  ];

  var runners = [];
  var logo;

  var logoImg;
  sketch.preload = function() {
    logoImg = sketch.loadImage('/logo.png');
  }

  sketch.setup = function() {
    sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    sketch.frameRate(30);
    sketch.noStroke();
    sketch.background(34, 34, 34);

    initGrid(Math.floor(sketch.width / 10)+1, Math.floor(sketch.height / 10)+1);
    logo = document.querySelector("#logo");
  };

  sketch.draw = function() {
    if (sketch.frameCount % 30 === 0) {
      addRandomEnergy();
    }
    if (sketch.frameCount % 60 === 0) {
      addRunner()
    }

    moveRunners()
    energyLogo()

    spreadEnergy();
    reduceEntropy()
    drawGrid();
  };

  sketch.windowResized = function() {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    sketch.background(34, 34, 34);
    initGrid(Math.floor(sketch.width / 10)+1, Math.floor(sketch.height / 10)+1);
  };

  sketch.touchStarted = function() {
    increaseEnergy(
      Math.floor(sketch.mouseX / 10),
      Math.floor(sketch.mouseY / 10),
      colors.length * 500
    );
  };

  sketch.touchMoved = function() {
    increaseEnergy(
      Math.floor(sketch.mouseX / 10),
      Math.floor(sketch.mouseY / 10),
      sketch.random(colors.length, colors.length * 200)
    );
  };

  sketch.mouseMoved = function() {
    increaseEnergy(
      Math.floor(sketch.mouseX / 10),
      Math.floor(sketch.mouseY / 10),
      colors.length
    );
  };

  function initGrid(gridWidth, gridHeight) {
    for (let x = 0; x < gridWidth; x++) {
      grid[x] = [];

      for (let y = 0; y < gridHeight; y++) {
        grid[x][y] = 0;
      }
    }

    grid.forEach((el, i) => {
      gridBuffer[i] = el.slice(0);
    });

    drawGrid(true);
  }

  function drawPixel(x, y) {
    let val = Math.floor(grid[x][y]);
    if (val >= colors.length) {
      val = colors.length - 1;
    }
    if (val < 0) {
      val = 0;
    }

    sketch.fill(colors[val]);
    sketch.rect(x * 10, y * 10, 5, 5);
  }

  function drawGrid(fullDraw) {
    // only draw changed pixels
    grid.forEach((col, x) => {
      col.forEach((pxl, y) => {
        let oldPxl = gridBuffer[x][y];
        if (Math.floor(pxl) != Math.floor(oldPxl) || fullDraw) {
          drawPixel(x, y);
        }
      });
    });
    // after draw set new gridBuffer
    grid.forEach((el, i) => {
      gridBuffer[i] = el.slice(0);
    });
  }

  function reduceEntropy() {
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        decreaseEnergy(x, y);
      }
    }
  }

  function decreaseEnergy(x, y) {
    let mod = Math.random() / 8;
    if (grid[x][y] - mod < 0) {
      grid[x][y] = 0;
    } else {
      if (grid[x][y] > colors.length) {grid[x][y] = colors.length;}
      grid[x][y] = grid[x][y] - mod;
    }
  }

  function increaseEnergy(x, y, mod) {
    if (x < grid.length && x >= 0 && y >= 0) {grid[x][y] = mod ? mod : colors.length;}
  }

  function spreadEnergy() {
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        let burnFactor = 6;
        let initEnergy = grid[x][y];
        let spreadEnergy = sketch.random(0, initEnergy) / (8*burnFactor);
        let burned = sketch.random(0, initEnergy/1.5) / burnFactor;

        if (Math.floor(initEnergy) != 0) {
          // spread energy to lower level cells around
          if (y-1 >= 0 && grid[x][y-1] < initEnergy) {
            grid[x][y-1] = grid[x][y-1] + spreadEnergy;
          }
          if (y+1 < grid[x].length && grid[x][y+1] < initEnergy) {
            grid[x][y+1] = grid[x][y+1] + spreadEnergy;
          }
          if (x-1 >= 0 && grid[x-1][y] < initEnergy) {
            grid[x-1][y] = grid[x-1][y] + spreadEnergy;
          }
          if (x+1 < grid.length && grid[x+1][y] < initEnergy) {
            grid[x+1][y] = grid[x+1][y] + spreadEnergy;
          }
        }

        // subtract burned energy
        if (grid[x][y] - burned < 0) {
          grid[x][y] = 0;
        } else {
          grid[x][y] = grid[x][y] - burned;
        }
      }
    }
  }

  function addRandomEnergy() {
    increaseEnergy(
      Math.floor(sketch.random(0, grid.length-1)),
      Math.floor(sketch.random(0, grid[0].length-1)),
      sketch.random(colors.length, colors.length * 2000)
    );
  }

  function addRunner() {
    let dir = Math.floor(sketch.random(0,4));
    let x, y;

    // set starting point on edge depending on direction
    switch (dir) {
      case 0:
        x = Math.floor(sketch.random(0, grid.length - 1));
        y = grid[0].length - 1;
        break;
      case 1:
        x = 0;
        y = Math.floor(sketch.random(0, grid[0].length - 1));
        break;
      case 2:
        x = Math.floor(sketch.random(0, grid.length - 1));
        y = 0;
        break;
      case 3:
        x = grid.length - 1;
        y = Math.floor(sketch.random(0, grid[0].length - 1));
        break;
    }

    runners.push({x, y, dir})
  }

  function moveRunners() {
    runners.forEach((runner, index) => {
      increaseEnergy(
        runner.x,
        runner.y,
        colors.length
      )

      // move in direction
      switch (runner.dir) {
        case 0:
          runner.y--
          break;
        case 1:
          runner.x++
          break;
        case 2:
          runner.y++
          break;
        case 3:
          runner.x--
          break;
      }

      // remove if end is reached
      if (runner.x < 0 || runner.x >= grid.length || runner.y < 0 || runner.y >= grid[0].length) {
        runners.splice(index, 1);
      }
    })
  }

  function energyLogo() {
    let rect = logo.getBoundingClientRect();
    let pxlW = Math.floor( (rect.right-rect.left)/10 )
    let pxlH = Math.floor( (rect.bottom-rect.top)/10 )

    logoImg.resize(pxlW, 0)
    logoImg.loadPixels()

    for (let x = 0; x < logoImg.width; x++) {
      for (let y = 0; y < logoImg.height; y++) {
        // @ToDo/wontfix: use faster pixel data instead of .get()
        let val = logoImg.get(x,y)
        if (val[3] !== 0) {
          increaseEnergy(
            Math.floor(rect.left/10)+x,
            Math.floor(rect.top/10)+y,
            sketch.map(val[3], 0, 255, 0, colors.length)
          )
        }
      }
    }
  }
};

export default {
  mounted() {
    let pixelGrid = new p5(s, "pixelGrid");
  }
};
</script>
