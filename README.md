# angular-REST-EXPRESS-Mongoose-lab11-1


Outil de scaffold utilisé : express-mongoose-generator


disponible ici : https://www.npmjs.com/package/express-mongoose-generator

###Initalisations avant le scaffold :


###Générer le projet express avec express-generator
> express MyProject --save


###Rentrer dans le dossier du projet
> cd MyProject


###Rajouter mongoose
> npm install mongoose --save


###Rajouter nodemon
> npm install nodemon --save-dev


###Installer les dépendances
> npm install

###Installer le generateur en mode global, si cele n'est pas déja fait
> npm install -g express-mongoose-generator

#Scaffold it !
> mongoose-gen -m ours -f nom:string,age:number -r


#Options
-m, --model <modelName> - the model name.

-f, --fields <fields> - the fields (name1:type,name2:type).

-r, --rest - enable generation REST.

##Available types
string, number, date,b oolean, array, objectId

##On doit ensuite écrire les routes dans dans app.js file ainsi que la la connection vers MongoDB
###avec Mongoose :

var routes = require('./routes/index');
var ourses = require('./routes/ours');
...
mongoose.connect('mongodb://localhost/oursdb');
...
app.use('/', routes);
app.use('/ours', ourses);


