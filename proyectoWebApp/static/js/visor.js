const foto= (num)=>{
  document.getElementById("visor").src = `http://www.controlastuenergia.gob.es/factura-electrica/factura/facturas/factura-electrica-${num}.jpg`
  document.getElementById("visor").alt = `Factura ${num}/3`
}