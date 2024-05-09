function Spectrum() {
  this.name = "spectrum";

  this.draw = function () {
    push();
    // declare a variable to analse the audio spectrum
    var spectrum = fourier.analyze();
    noStroke();

    // loop through all frequencies
    for (var i = 0; i < spectrum.length; i++) {
      // set the vertical heigh of the start of each bar dynmaically based on the spectrum and object height
      var x = map(i, 0, spectrum.length, 0, height);
      // set the width of each bar dynamically based on amplitude and object width
      var w = map(spectrum[i], 0, 255, 0, width);
      // set each bar to be more red/less green for higher amplitude
      fill(spectrum[i], 255 - spectrum[i], 0);
      // draw a rect using the set parameters
      rect(0, x, w, width / spectrum.length);
    }

    pop();
  };
}
