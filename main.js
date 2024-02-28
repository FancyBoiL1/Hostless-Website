function runScript(){
  const div = document.getElementById("examplediv");
  const p = document.createElement('p');
  const ctxt = document.createTextNode("This is an example paragraph.");

  p.appendChild(ctxt);
  div.appendChild(p);
}
