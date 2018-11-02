var xhr = new XMLHttpRequest();

xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);

xhr.send(null);

xhr.onload = function(data) {
   console.log(xhr.responseText);
};

