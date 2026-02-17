$(document).ready(function () {
  var envelope = $("#envelope");

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
    // restore overflow:hidden after letter slides back in
    setTimeout(function () {
      envelope.css("overflow", "hidden");
    }, 550);
  }

  // clicking envelope also opens it
  envelope.click(function () { openEnvelope(); });
  $("#btn-open").click(function ()  { openEnvelope(); });
  $("#btn-close").click(function () { closeEnvelope(); });

  // on open, clear inline overflow so CSS rule takes over
  function openEnvelope() {
    envelope.css("overflow", "");
    envelope.addClass("open").removeClass("close");
  }
});