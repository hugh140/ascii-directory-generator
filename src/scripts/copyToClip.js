function copyToClip() {
  const textarea = document.getElementById("asciiDir");
  const copyText = textarea.value;

  if (window.isSecureContext) navigator.clipboard.writeText(copyText);
  return 'Copiado'  
}
export default copyToClip;
