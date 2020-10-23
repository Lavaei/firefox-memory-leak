# FirefoxMemoryLeak

### Requirements

1. [**Nodejs v12**](https://nodejs.org/en/) 
2. **Angular CLI v10**:
    ```
    sudo npm i -g @angular/cli
    ```

### How to initialize (for first time only)?

Execute following command in the project's directory:
```
npm i
```

### How to run the project?

Execute following command in the project's directory:
```
ng serve
```

### How to reproduce the Memory Leak?

1. Open the application from [here](http://localhost:4200) if its not started after `ng serve` automatically.
2. Open the Dev Tools for that tab.
3. The page will refresh automatically after few seconds, just track the memory usage of `Web Content` process.
