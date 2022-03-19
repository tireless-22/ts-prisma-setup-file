// yarn add
// prisma typescript ts-node @types/node --save-dev


// first install prisma=> npm install prisma
// npx prisma
// npx prisma init
// npm install @prisma/client
// intialize the prisma in our project
// create connnection to the database
// add new models as you wish
// use npx prisma migrate dev --name init to migrate that changes to the database
// use can either check the sql workbench or you can check in the prisma studio
// npx prisma studio
// ts node is help full to execute the ts files directly instead of doing those stepwise
// like converting the ts to js and again exectuting the js files
// nodemon index.ts
// to execute the file

import express,{Request,Response} from "express"



const app = express();

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

app.use(express.json());


app.post("/", async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const user = await prisma.user.create({
		data: {
			username: username,
			password:password
		}
	})
	res.json(user);
	
})

app.get("/" ,async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	res.json(users);

	
})

app.put("/" ,async (req: Request, res: Response) => {
	const { id, username } = req.body;
	const updatedUser = await prisma.user.update({
		where: {
			id:id
		},
		data: {
			username:username
			
		}
	})
	res.json(updatedUser);
	
})

app.delete("/:id", async (req: Request, res: Response) => {
	const id = req.params.id
	const deletedUser = await prisma.user.delete({
		where: {
			id:Number(id)
			
		}
	});
	res.json("hello");

	
	
})



app.listen(3001, () => {
	console.log("hello")
})

