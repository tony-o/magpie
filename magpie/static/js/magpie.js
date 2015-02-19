/* Tony O'Dell */
(function(){
  /* MODALS */
  var modals = document.getElementsByClassName("modal");
  var togglers = document.querySelectorAll("[data-toggle='modal']");
  var closers = document.querySelectorAll("[data-dismiss='modal']");
  var tflag = true;
  for(var i in closers){
    closers[i].ontouchstart = closers[i].onclick = function(){
      for(var i in modals){
        try{
          if(modals[i].className.indexOf("hidden") == -1){
            modals[i].className += " hidden";
          }
        } catch(e) { }
      }
    }
  }
  window.onkeyup = function(e){
    if(e.keyCode == 27){
      closers[0].onclick();
    }
  };
  for(var i in togglers){
    togglers[i].ontouchstart = togglers[i].onmousedown = function(){
      var id = this.getAttribute("data-target");
      for(var i in modals){
        try{
          if(modals[i].getAttribute("id") == id){
            tflag = false;
            modals[i].className = modals[i].className.replace(/(\s|^)hidden(\s|$)/, "");
            return;
          }
        } catch(e) { }
      }
    };
  }

  //menu adjustments
  var menus = [document.getElementById("notebooks"), document.getElementById("notes")];
  var stat  = {};
  for(var m in menus){
    if(menus[m].className.indexOf("collapsed") > -1){
      stat[menus[m].getAttribute("id")] = true;
    }
    menus[m].onmouseenter = menus[m].ontouchstart = function(e){
      e.stopPropagation();
      if(!stat[this.getAttribute("id")]){
        return;
      }
      if(this == menus[0]){
        menus[1].className = menus[1].className.replace(/(\s|^)notebookadjust(\s|$)/, "");
      }
      this.className = this.className.replace(/(\s|^)collapsed(\s|$)/, "");
    };
    menus[m].onmouseleave = menus[m].ontouchstart = function(e){
      if(!stat[this.getAttribute("id")]){
        return;
      }
      e.stopPropagation();
      if(this == menus[0]){
        menus[1].className += " notebookadjust";
      }
      this.className += " collapsed";
    };
  }

})();
