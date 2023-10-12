function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qvhX7jziZX":
        Script1();
        break;
      case "645RbMeavQ9":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbya7H3PQqSLg1_N1Aw5US_xGTa1pRR_Ljg_qj5Yf9IktHOqS4sCSg6rDS_GTUZbMjGeJQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbya7H3PQqSLg1_N1Aw5US_xGTa1pRR_Ljg_qj5Yf9IktHOqS4sCSg6rDS_GTUZbMjGeJQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect")})
	}
	)
}

