$(document).ready(function(){
	window.globalVar = 1;

	//create initial layout



	var supra;
	var ProcessContainer = {
			ProcessUserMessage: function (e,texttoinput) {
			window.globalVar += 1;
			$('.class123').hide();

			setTimeout(function () {
				$("#chatwindow").append("<div id='dotdotdot'><span id='StuLife" + window.globalVar + "' class='options class123' style='float:left;margin-right: 0px; background-color:#77DD77' onclick='test.myFunction(event,this)'><span class='dotA'></span> <span class='dotB'></span> <span class='dotC'></span> </span></div><div style='clear: both'></div>");
			}, 700);

			setTimeout(function () {
				var ans;
				supra="'" + supra + "'";
				$('.class123').hide();
				fetch('https://soteria.azurewebsites.net/qnamaker/knowledgebases/f149f6d1-e7e5-40d3-855e-ea1cbcc7a16d/generateAnswer', {
					 method: 'POST',
					 headers: {
					   'Content-Type': 'application/json',
					   'Authorization': 'EndpointKey aedde24f-1584-4bfb-86f0-aa32eca0aa3b',
					 },
					 body: "{'question':" + supra + "}"
					})
				.then(r => r.json())
				.then(data => { ans=data["answers"][0]['answer'];BotMessageContainer.BotMessage(ans);});

				$('#chatwindow').scrollTop($('#chatwindow')[0].scrollHeight);
			}, 2000);
		}
	}

	var UserMessageContainer = {
    UserMessage: function (e,texttoinput) {
		$("#chatwindow").append("<div style='width: 100%'><span id='StuLife' class='options' style='background-color: skyblue;margin-left: 40px;float:right' onclick='test.myFunction(event,this)'>" + texttoinput + "</span></div><div style='clear: both'></div>");
		ProcessContainer.ProcessUserMessage(e,texttoinput);
		$("#UserInputBox").val("");

		}
	}

	var BotMessageContainer = {
		BotMessage: function (replymessage) {
			$("#chatwindow").append("<div style='width: 80%;'><span id='StuLife"+ window.globalVar + "' class='options' style='float:left;margin-right: 0px;background-color:#77DD77' onclick='test.myFunction(event,this)'>" + replymessage + "</span></div><div style='clear: both'></div>");
			}
		}

	var BotMessageWithActionContainer = {
    BotMessageWithAction: function (id1,class1,onclick1, text1, link) {
		$("#chatwindow").append("<a href='" + link + "'><div><span id='StuLife"+ window.globalVar + "' class='options' style='float:left;background-color:#77DD77' onclick='test.myFunction(event,this)'>" + text1 + "</span></div><div style='clear: both'></div></a>");
		}
	}

	$("#UserInputBox").keypress(function(e) {
		if(e.which == 13) {
			supra = $("#UserInputBox").val()
			UserMessageContainer.UserMessage(e,$("#UserInputBox").val());
			$('#chatwindow').scrollTop($('#chatwindow')[0].scrollHeight);
		}
	});

	$(".message").click(function(e){
		UserMessageContainer.UserMessage(e,$("#UserInputBox").val());
	});

  $("#closebutton").click(function(e){
		 $("#menuoptions").toggle();
	});



    function chatting(){
		$("#UserInputBox").val("");
        $("#menuoptions").animate({right: '0'}).animate({top: '0%'},{ queue: false, duration: 1000 }).animate({height: '100%'},{ queue: false, duration: 200 });
      $('#closebutton').fadeOut({ queue: false, duration: 200 });


		$('#Instruction').text('How can I help you?');
		BotMessageContainer.BotMessage('Hello');

		$('#usertextboxmessage').fadeIn(1000);
		$('#chatwindow').fadeIn(1000);
		$('#UserInputBox').focus();

    };
    chatting();
});
