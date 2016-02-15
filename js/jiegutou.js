window.onresize = function() {
	location.reload()
    }

		var x=0;//鼠标的横坐标
		var y=0;//接到的个数
		var mx=0;//鼠标横坐标
		var sum=0;//错过的个数
		var w=document.body.clientWidth;//获得屏幕宽度
		var h=document.body.clientHeight;//获得屏幕高度
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
			event.preventDefault();
			x=event.clientX;
			document.getElementById("dog").style.backgroundPositionX=(x-30)+"px";
			
		}//接收器对象
		if(event){
			mx=event.clientX;
		}
	    for(i=0;i<9;i++){
	         Bonex[i]= Math.random()*w*0.9;//产生一个随机下落的横坐标
	         Downsize[i]=Math.random()*5+1;
	         DownSpeed[i]=Math.random();//产生一个随机的下落速度
	        }
	    function down(){
	    	for(i=0;i<9;i++){//开始下落
	    	    bones[i].style.left=Bonex[i]+"px";
	    		DownSpeed[i]+=Downsize[i];
	    		bones[i].style.top=DownSpeed[i]+"px";
	    		dh=DownSpeed[i];
	    		if(dh>h*0.9+30){//判断是否到底部并销毁产生新的坠落物
	    			DownSpeed[i]=0;
	    			Bonex[i]= Math.random()*w*0.9;
	                Downsize[i]=Math.random()*5+1;
	                DownSpeed[i]=Math.random();
	                sum++;
	    		}
	    		if(bones[i].style.top>h*0.8&&(Math.floor(bones[i].style.left)==mx)){//判断是否与接收器相碰，并销毁产生新的坠落物
	    			DownSpeed[i]=0;
	    			Bonex[i]= Math.random()*w*0.9;
	                Downsize[i]=Math.random()*5+1;
	                DownSpeed[i]=Math.random();
	                y++;
	                sum++;
	                document.getElementById("score").innerHTML="得分"+y+"分";
	    				   
	    		}
	    		document.getElementById("sum").innerHTML="共错过"+sum+"个";
	    	}
	    	setTimeout("down()", 100);
	    }
	    down();
