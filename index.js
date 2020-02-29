/* the promise constructor receives only one parameter, one anonymous function,
 this function receives two params, it's a correct practice use resolve and reject,
  then receives everything from resolve and catch receives everything from reject,
   another curious fact, if you uses the catch the promise continuous although exist an error. */

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

test2
.then((success) => {console.log(success)})
/* .catch((err) => console.error(err)) */
.then(() => test)
.then((success) => {console.log(success)})
.catch((err) => console.error(err))