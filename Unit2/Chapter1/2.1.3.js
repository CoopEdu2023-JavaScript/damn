for(i = 1; i <= 9; ++i) {
    line = "";
    for(j = 1; j <= i; ++j) {
     line += String(i) + " * " + String(j) + " = " + String(i * j) + "    ";
    }
    console.log(line);
  }