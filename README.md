# Javascript promises

```
/* The promise constructor receives only one parameter, one anonymous function,
this function receives two params, it's a correct practice use resolve and reject,
then receives everything from resolve and catch receives everything from reject,
another curious fact, if you uses the catch the promise continuous although exist an error. */
```

```javascript
const test = new Promise( (resolve, reject) => {

if ('one' == 'one'){

    resolve('You are the number one');

}else{

    reject('An error has occurred');

}

});

const test2 = new Promise( (resolve, reject) => {

    if ('one' != 'one'){
    
        resolve('You are the number one');
    
    }else{
    
        reject('An error has occurred');
    
    }
    
    });


    const test3 = new Promise( (resolve, reject) => {

        if ('one' == 'one'){
            /* multiple responses */
            resolve({
                you: "number one",
                others: "numbers two"
              });
        
        }else{
        
            reject('An error has occurred');
        
        }
        
        });


test
.then((success) => {console.log(success)})
 .catch((err) => console.error(err))
 .then(() => test2)
.then((success) => {console.log(success)})
 .catch((err) => console.error(err)) 
.then(() => test3)
.then((value) => {console.log(value.you)})
.catch((err) => console.error(err))
```
