var playList = [{
	    title:'wawa',
	    author:'娃娃',
	    lrc:'audio/wawa.krc',
	    src:'audio/wawa.mp3'
	},{
	    title:'andy',
	    author:'阿杜',
	    lrc:'audio/andy.krc',
	    src:'audio/andy.mp3'
	},{
	    title:'wawa',
	    author:'娃娃',
	    lrc:'audio/wawa.krc',
	    src:'audio/wawa.mp3'
	},{
	    title:'andy',
	    author:'阿杜',
	    lrc:'audio/andy.krc',
	    src:'audio/andy.mp3'
	}];
	window.onload =function(){
	var Songlist= document.getElementById("Songs");
	var audioTag = document.getElementsByTagName("audio");
	for(var key in playList){
        Songlist.innerHTML = Songlist.innerHTML + "<li>" +playList[key].title +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ playList[key].author +"</li>";
	}
	var lis = Songlist.getElementsByTagName("li");
	for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",(function(i){
              return function(){
    	 	playChoo(i);//如果直接写方法，则不能实现点击一次访问一次，只会一次性全部执行完
    	 }
        })(i));
	}
	
	function playChoo(i){
        lis[i].style.background = "#fff";
        for(var j=0;j<lis.length;j++){
        	if(j!=i){
        		lis[j].style.background = "#EFE0E0";
        	}
        }
        audioTag[0].src=playList[i].src;
        audioTag[0].play();
	  }
     
     
 }  	
 function changeLyric(){
    var Songs= document.getElementById("Songlist");
 	var lyric= document.getElementById("lyric");
 	var audioTag = document.getElementsByTagName("audio");
 	var src = audioTag[0].src;
 	src = src.match("([^/]+)\/([^/]+)\.mp3")[0];//此时取得的src是绝对路径，用正则表达式转换成相对路径
 	if(lyric.style.display == "none"){
		 Songs.style.display = "none";
	     lyric.style.display = "block";
	     if(audioTag[0].paused){
		   lyric.innerHTML = "还没播放音乐呢";
		 }
		 else{
		 	lyric.innerHTML ="";
		 	 for(var key in playList){
		    	if(src==playList[key].src){
		    		 lyric.innerHTML = playList[key].lrc;
		    	}
		    }
		 }
 	}else{
        Songs.style.display = "block";
	    lyric.style.display = "none";
 	}
     }