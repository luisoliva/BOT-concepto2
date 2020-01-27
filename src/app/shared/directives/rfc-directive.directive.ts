import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[RFC-Directive]'
})
export class RfcDirectiveDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    let respuesta = this.rfcValido(elem.nativeElement.value);
  }

  rfcValido = (rfc, aceptarGenerico = true) => {
    const re = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    let validado = rfc.match(re);

    if (!validado) {
      return false;
    }

    const digitoVerificador = validado.pop(),
      rfcSinDigito = validado.slice(1).join(''),
      len = rfcSinDigito.length,

      diccionario = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ",
      indice = len + 1;
    let suma, digitoEsperado;

    if (len == 12) {
      suma = 0;
    } else {
      suma = 481;
    }

    for (let i = 0; i < len; i++) {
      suma += diccionario.indexOf(rfcSinDigito.charAt(i)) * (indice - i);
      digitoEsperado = 11 - suma % 11;
      if (digitoEsperado == 11) {
        digitoEsperado = 0
      } else if (digitoEsperado == 10) {
        digitoEsperado = "A"
      }

      if ((digitoVerificador != digitoEsperado) && (!aceptarGenerico || rfcSinDigito + digitoVerificador != "XAXX010101000")) {
        return false;
      } else if (!aceptarGenerico && rfcSinDigito + digitoVerificador == "XEXX010101000") {
        return false;
      }
      return rfcSinDigito + digitoVerificador;
    }
  }

  validarInput = (input) => {
    let rfc = input.value.trim().toUpperCase(),
      resultado = document.getElementById("resultado"),
      valido;

    let rfcCorrecto = this.rfcValido(rfc);

    if (rfcCorrecto) {
      valido = "Válido";
      resultado.classList.add("ok");
    } else {
      valido = "No válido"
      resultado.classList.remove("ok");
    }

    resultado.innerText = "RFC: " + rfc
      + "\nResultado: " + rfcCorrecto
      + "\nFormato: " + valido;
  }
}
