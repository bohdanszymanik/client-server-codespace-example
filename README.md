# Experiments with codespaces
- Being able to have a client and a server running under separate terminal processes
- TODO: Use OAuth to secure access to a server resource

## Starting the server
cd ./server
npm start

## Executing the client
cd client
npm start

TODO 
1. Get a browser client working that calls the server. I can't figure out how to get the browser to access the server. The thing is... I have managed to get this working before.

npx https-server -p 3000
or npm https-server -c-1 -p 3000 for a simplifed browser embedded in vscode

or use the VSCode 'Live Serve' extension.

2. Get OAuth going for a flow that submits credentials to generate a bearer token to access a protected resource.
