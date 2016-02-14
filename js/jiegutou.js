window.onresize = function() {
	location.reload()
    }

		var x=0;;
		var y=1;
		var w=document.body.clientWidth;
		var h=document.body.clientHeight;
		var DownSpeed=new Array();
		var Downsize=new Array();
		var Bonex=new Array();
		var bones=new Array();
		bones[0]=document.getElementById("bone0");
		bones[1]=document.getElementById("bone1");
		bones[2]=document.getElementById("bone2");
		bones[3]=document.getElementById("bone3");
		bones[4]=document.getElementById("bone4");
		bones[5]=document.getElementById("bone5");
		bones[6]=document.getElementById("bone6");
		bones[7]=document.getElementById("bone7");
		bones[8]=document.getElementById("bone8");
		bones[9]=document.getElementById("bone9");
		function move(){
			x=event.clientX;
			document.getElementById("dog").style.backgroundPositionX=(x-30)+"px";
			
		}//接收器对象
	    for(i=0;i<9;i++){
	         Bonex[i]= Math.random()*w*0.9;
	         Downsize[i]=Math.random()*5+1;
	         DownSpeed[i]=Math.random();
	        }
	    function down(){
	    	for(i=0;i<9;i++){
	    	    bones[i].style.left=Bonex[i]+"px";
	    		DownSpeed[i]+=Downsize[i];
	    		bones[i].style.top=DownSpeed[i]+"px";
	    		dh=DownSpeed[i];
	    		if(dh>h*0.9+30){
	    			DownSpeed[i]=0;
	    			Bonex[i]= Math.random()*w*0.9;
	                Downsize[i]=Math.random()*5+1;
	                DownSpeed[i]=Math.random();
	    		}
	    		if(bones[i].style.top>h*0.8&&bones[i].style.left==pageXOffset){
	    			DownSpeed[i]=0;
	    			Bonex[i]= Math.random()*w*0.9;
	                Downsize[i]=Math.random()*5+1;
	                DownSpeed[i]=Math.random();
	                y++;
	                document.getElementById("score").innerHTML="得分"+y;
	    				   
	    		}
	    	}
	    	setTimeout("down()", 100);
	    }
	    down();
