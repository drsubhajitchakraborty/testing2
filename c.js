function a(){
     console.log(require('crypto').randomBytes(64).toString('hex'))
}
a()