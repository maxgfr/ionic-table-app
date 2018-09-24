# tablePoc

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
$   npm install
```

Then you have to modify all the URL request (get/post/delete request) `https://tablepocserve.eu-gb.mybluemix.net/` by : `http://localhost:3000/`

Now, you can now launch the app with :

```
$ ionic platform add android
$ ionic cordova build android
$ ionic cordova run android -l -c -s --debug
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
