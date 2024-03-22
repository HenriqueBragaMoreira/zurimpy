export var hours: string[] = [];
for (var hora = 0; hora < 24; hora++) {
  for (var minuto = 0; minuto < 60; minuto += 15) {
    var horaFormatada = hora.toString().padStart(2, '0');
    var minutoFormatado = minuto.toString().padStart(2, '0');
    hours.push(`${horaFormatada}:${minutoFormatado}`);
  }
}
