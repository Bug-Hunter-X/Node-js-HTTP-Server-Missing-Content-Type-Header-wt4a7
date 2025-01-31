# Node.js HTTP Server Missing Content-Type Header

This repository demonstrates a common error in Node.js HTTP servers:  omitting the `Content-Type` header in the response.  This can lead to unexpected behavior in the client, often resulting in the browser not rendering content correctly or displaying it as plain text. 

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides the corrected version.

## Bug Description

The server correctly responds with 'Hello, World!', but it lacks a `Content-Type` header.  Browsers and other clients rely on this header to determine how to interpret the response body. Without it, the client may misinterpret the data.

## Solution

The `bugSolution.js` file adds the necessary `Content-Type` header to the response, specifically setting it to `text/plain` to indicate that the response body is plain text.