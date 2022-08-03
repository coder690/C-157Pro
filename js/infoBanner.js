AFRAME.registerComponent("info-Banner", {
    schema:{
        itemId:{default:"",type:"string"},
    },
    init: function(){
        this.createBanner();
    },
    createBanner:function(){
        postersInfo={
            thorComic:{
                banner_url:".assets\thumbnails\Exchange-Thor-Marvel-Comic.jpg"
                title:"Thor Marvel Comic",
                released:"1988",
                description:"A comic about the origins of thor!"
        }
    }
}



if(selectedId){
    fadeBackgroundEl.setAttribute("visible",true);
    fadeBackgroundEl.setAttribute("info-banner",{
        itemId:selectedItemId,
    });
    titleEl.setAttribute("visible",false)
    cursorEl.setAttribute("position",{x:0,y:0,z:-1});
    cursorEl.setAttribute("geometry",{
        radiusInner:0.03,
        radiusOuter:0.04,
    });
} else {
    fadeBackgroundEl.setAttribute("visible",false);
    titleEl.setAttribute("visible",true);
    cursorEl.setAttribute("position",{x: 0, y: 0, z: -3});
    cursorEl.setAttribute("geometry",{
        radiusInner:0.08,
        radiusOuter:0.12,
    });
}

});