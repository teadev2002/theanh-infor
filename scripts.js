function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInputZalo");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  function myFunction2() {
    // Get the text field
    var copyText = document.getElementById("myInputBank");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  function openPopup() {
    document.getElementById('overlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
  }
  function openTable(){
    document.getElementById('overlay2').style.display = 'block';

  }
  function closeTable(){
    document.getElementById('overlay2').style.display = 'none';
  }
  function openMomo(){
    document.getElementById('overlay3').style.display = 'block';

  }
  function closeMomo(){
    document.getElementById('overlay3').style.display = 'none';
  }
  function openBank(){
    document.getElementById('overlay4').style.display = 'block';

  }
  function closeBank(){
    document.getElementById('overlay4').style.display = 'none';
  }