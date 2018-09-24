# tablePoc

Open server and launch


### Go to the folder `server`

Then you have to modify with your credentials `vcap-local-example.json` and rename it in `vcap-local.json`

You can now run :
```
$ npm install
$ npm start
```

### Configure ionic App

You have to go to the main folder and run :

```
$ npm install
```

And modify all the URL (for the get request) into http://localhost:3000/......

You can now launch the app with :

```
$ ionic cordova run android -l -c -s --debug
```

Or to test it with (you cannot make http request if you do it) :

```
$ ionic serve
```

### HomePage  :

<div align="center">
  <img src="https://github.com/maxgfr/tablePoc/blob/master/github/home.png"/>
</div>

### Modal  :

<div align="center">
  <img src="https://github.com/maxgfr/tablePoc/blob/master/github/modal.png"/>
</div>

### Notifications  :

<div align="center">
  <img src="https://github.com/maxgfr/tablePoc/blob/master/github/notifs.png"/>
</div>
