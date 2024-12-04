// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/
app.get('/status-info', function(request, response){
  let code = Number(request.query.code)

  if(code === 200){
    let obj =  {
      status: 200,
      message: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
    };
    return response.send(obj);
  } else if (code == 201){
    let obj = {
      status: 201,
      message: "Created: The request has been successfully processed, and as a result, a new resource has been created"
    };
    return response.send(obj);

  } else if (code == 204){
    let obj = {
      status: 204,
      message: "No Content: The server has successfully processed the request, but there is no content to return in the response."
    };
    return response.send(obj);

  } else if (code == 400){
    let obj = {
      status: 400,
      message: "Bad Request: The server cannot process the request due to malformed syntax or invalid data."
    };
    return response.send(obj);

  } else if (code == 401){
    let obj = {
      status: 401,
      message: "Unauthorized: The server requires authentication, but the request either lacked valid credentials or included incorrect ones."
    };
    return response.send(obj);

  } else if (code == 403){
    let obj = {
      status: 403,
      message: "Forbidden: The server understands the request but refuses to authorize it, usually due to permission issues."
    };
    return response.send(obj);

  } else if (code == 404){
    let obj = {
      status: 404,
      message: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
    };
    return response.send(obj);

  } else if (code == 405){
    let obj = {
      status: 405,
      message: "Method Not Allowed: The server recognizes the request but the HTTP method is not supported for the requested resource."
    };
    return response.send(obj);

  } else if (code == 429){
    let obj = {
      status: 429,
      message: "Too Many Requests: The user has sent too many requests in a given time, exceeding the server's rate limits."
    };
    return response.send(obj);
    
  } else if (code == 500){
    let obj =   {
      status: 500,
      message: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
    };
    return response.send(obj);

  } else if (code == 502){
    let obj =   {
      status: 502,
      message: "Bad Gateway: The server received an invalid response from the upstream server it tried to access."
    };
    return response.send(obj);

  } else if (code == 503){
    let obj =   {
      status: 503,
      message: "Service Unavailable: The server is temporarily unable to handle the request, often due to being overloaded or undergoing maintenance."
    };
    return response.send(obj);

  } else if (code == 504){
    let obj =   {
      status: 504,
      message: "Gateway Timeout Error: The server did not receive a timely response from another server that it needed to complete the request."
    };
    return response.send(obj);

  } else {
    return response.send("<p>NO CODE FOUND</p>")
  }

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
