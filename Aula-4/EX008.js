const letra = prompt("Digite uma letra:").toLowerCase();
switch (letra) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("É uma vogal");
    break;
  default:
    console.log("É uma consoante");
}