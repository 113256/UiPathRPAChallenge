function(e,param) { label = param.split(",")[0]; val = param.split(",")[1]; document.querySelector('[ng-reflect-name='+label+']').value=val; }

