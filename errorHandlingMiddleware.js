const http = require('http');

const middlewareStack = [];

const use=(middleware) =>{
    middlewareStack.push(middleware);
}

// Function to execute the middleware stack
const executeMiddleware=(req, res)=> {
    let index = 0;

    const next=(err)=> {
        if (err) {
            return errorHandler(err, req, res);
        }
        if (index < middlewareStack.length) {
            const middleware = middlewareStack[index];
            index++;
            middleware(req, res, next);
        } else {
            // End of middleware stack
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    }

    next();
}

// Example middleware to handle specific route
use((req, res, next) => {
    if (req.url === '/') {
        res.statusCode=200;
        res.setHeader('Content-Type', 'text/plain' );
        res.end('Hello, world!');
    } else {
        next();
    }
});

// Example middleware to handle errors
use((req, res, next) => {
    if (req.url === '/error') {
        next(new Error('Something went wrong!'));
    } else {
        next();
    }
});
// middleware to handle errors
const errorHandler=(err, req, res) =>{
    console.error(err.message);
    res.statusCode=404;
    res.setHeader( 'Content-Type','text/plain' );
    res.end('Internal Server Error');
}
const server = http.createServer((req, res) => {
    executeMiddleware(req, res);
});

server.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
