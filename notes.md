\***\*\*\*\*\*\*\***express generator\***\*\*\*\*\*\*\***
Express Generator ek command-line tool hai jo aapko Express.js application ki basic structure generate karne mein madad karta hai. Isse aap ek naya Express.js project banane ke liye turant directory structure, configuration files, aur ek basic application skeleton set up kar sakte hain.

////steps

1.  globally install express generator
    npm i express-generator -g///
2.  npm appname --view=ejs
    cd appname
    npm i
    ho gaya ban gaaya app

            \***\*\*\*\*\*\*\***MONGO DB\***\*\*\*\*\*\*\***

                 CODE SIDE                     MONGODDB  SIDE

                 1.CODE ---------------------------SETUP DB FORMATION
                 2.MODEL ---------------------------COLLECTION
                 3.SCHEMA--------------------------- DOCUMENT

        har ek app ka ek data hota hai use kehte hai database or varity of data kehlata hai collection jaise user ka data hua collection or jab ham usme ek user ki baat karenage to wo kehlayega document yani code side ma wo kehlayega schema or db side ma kehlayega document .
        isi tarah varity of data jaise user model, prdouct model code side or db side collection....

    \\\*\*points to use mongo db
    1.install mongo db from offical website for macoook it is little bit confuising watch vedio of hitesh sir for installation in mac of mongo db..
    but for window is simple just exe file downlaod next next ...

3.  install mongoose - mongoose is node js libraray which help connect to mongo db
    npm i mongoose
4.  require and setup connection
5.  make schema - scema ka matlab ye batana ki banne wala ek document m kaya kaya hoga
    mongoose.scema({
    object pass hoaga
    })
    6.create model and export

\***\*\*\*\*\*\*\***user model \***\*\*\*\*\*\*\***

jaisa ki ham jante hai db ek database hai iske anndr jaise hame ek user model(collection) banan hai to hame schema bana hoga ek ek user se milkar model yani collection banega
conste userSchema = mongoose.Schema({
name:String,
mobile:Number,
email:String
})

module.exports = mongoose.model("user" yani use model name hai ,useSchema)
bana gaya db ...

<!-- creaton ,reading ,update ,delete -->

const userModel = require("/.users" nearet file hai ) user model ko require kar liya hai

\\creation\\

router.get("/create", async function(req,res){
const userCreated = await userModel.create({ //user model.create jo hao async hai to await laga na hoga
name:"Adil",
mobile:976024314,
email:"adilnawaz138@gmail.com"
})
res.send("ban gaya user model ")
})

\\reading\\
router.get("/allusers",async function(req.res){
let allUsers = await userModel.find()
res.send("allUsers")
}) \***\*\*\*\*\*\*\*** session and cookies \***\*\*\*\*\*\*\***
Asal mein, cookies client ke browser par store hote hain aur unhe server ke saath communication ke liye istemal kiya jata hai. Sessions server-side storage hote hain aur user ke data ko server par maintain karne mein use hote hain, jaise user authentication aur user state ko track karne ke liye.

1. npm i express-session
   2.app.js mai
   var session = require("express-session")
   app.use(session({
   some properties see app.js}))
