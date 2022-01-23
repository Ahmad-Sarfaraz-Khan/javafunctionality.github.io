  var img_arr = [
    'https://tse4.mm.bing.net/th?id=OIP.3usPDe6k6b5GlaW6rHStKgHaEo&pid=Api&P=0&w=249&h=156',
    'https://tse1.mm.bing.net/th?id=OIP.DssvkmwN-c92JjvRCrsv5wHaDg&pid=Api&P=0&w=364&h=172',
    'https://tse1.mm.bing.net/th?id=OIP.la4Gb63fAb1Az63kyuqEBAHaFh&pid=Api&P=0&w=237&h=176',
    'https://tse2.mm.bing.net/th?id=OIP._7DPPuUx8GLl0j_jPIBEgQHaE9&pid=Api&P=0&w=249&h=167',
    'https://tse1.mm.bing.net/th?id=OIP.fktWG2EqljvtZQWFWDgtEQHaEk&pid=Api&P=0&w=289&h=178'
  ]
  var container_ref = document.getElementsByClassName('imgBx')
  for (var i=0; i<5; i++ ) {
    var img_ref = document.createElement('img');
    img_ref.src = img_arr[i];
    img_ref.className = 'cover'
    container_ref[i].appendChild(img_ref);
  }
  // img_ref.src = img_arr[1];
  // container_ref[0].appendChild(img_ref);
